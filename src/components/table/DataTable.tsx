"use client";

import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  DataTableProps,
  DataTableSortConfig,
  SortDirection,
} from "@/types/ui";
import { Table } from "./Table";
import { THeader } from "./THeader";
import { TBody } from "./TBody";
import { TRow } from "./TRow";
import { THead } from "./THead";
import { TCell } from "./TCell";
import { Checkbox } from "@/components/form/Checkbox";

/**
 * Resolves the unique row id for a given row. Supports either a property key
 * (e.g. "id") or a function that receives the row and returns its id string.
 */
function getRowId<T>(row: T, rowKey: keyof T | ((row: T) => string)): string {
  return typeof rowKey === "function" ? rowKey(row) : String((row as Record<string, unknown>)[rowKey as string]);
}

export function DataTable<T extends object>({
  columns,
  data,
  rowKey,
  sortConfig: controlledSortConfig,
  onSort,
  selectable = false,
  selectedIds: controlledSelectedIds,
  onSelectionChange,
  className,
  tableClassName,
  emptyMessage = "No data",
}: DataTableProps<T>) {
  const [internalSortConfig, setInternalSortConfig] =
    useState<DataTableSortConfig>({
      key: columns[0]?.key as string ?? "",
      dir: "asc",
    });
  const [internalSelectedIds, setInternalSelectedIds] = useState<Set<string>>(
    new Set(),
  );

  const sortConfig = controlledSortConfig ?? internalSortConfig;
  const selectedIds = controlledSelectedIds ?? internalSelectedIds;

  const setSelectedIds = (next: Set<string>) => {
    if (controlledSelectedIds === undefined) setInternalSelectedIds(next);
    onSelectionChange?.(next);
  };

  const sortedData = useMemo(() => {
    const items = [...data];
    const key = sortConfig.key;
    const dir = sortConfig.dir;
    if (!key || dir === null) return items;
    items.sort((a, b) => {
      const aVal = (a as Record<string, unknown>)[key];
      const bVal = (b as Record<string, unknown>)[key];
      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return dir === "asc" ? 1 : -1;
      if (bVal == null) return dir === "asc" ? -1 : 1;
      const cmp = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return dir === "asc" ? cmp : -cmp;
    });
    return items;
  }, [data, sortConfig.key, sortConfig.dir]);

  const handleSort = (key: string) => {
    const nextDir: SortDirection =
      sortConfig.key === key && sortConfig.dir === "asc" ? "desc" : "asc";
    if (onSort) {
      onSort(key, nextDir);
    } else {
      setInternalSortConfig({ key, dir: nextDir });
    }
  };

  const toggleSelectAll = () => {
    if (data.length === 0) return;
    if (selectedIds.size === data.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(data.map((row) => getRowId(row, rowKey))));
    }
  };

  const toggleSelectRow = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <Table className={tableClassName}>
        <THeader>
          <TRow>
            {selectable && (
              <THead className="w-10">
                <Checkbox
                  checked={data.length > 0 && selectedIds.size === data.length}
                  onChange={toggleSelectAll}
                />
              </THead>
            )}
            {columns.map((col) => (
              <THead
                key={String(col.key)}
                className={col.headerClassName}
                onClick={
                  col.sortable
                    ? () => handleSort(col.key as string)
                    : undefined
                }
                sortDir={
                  col.sortable && sortConfig.key === col.key
                    ? sortConfig.dir
                    : null
                }
              >
                {col.label}
              </THead>
            ))}
          </TRow>
        </THeader>
        <TBody>
          {sortedData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (selectable ? 1 : 0)}
                className="p-8 text-center text-foreground/60 text-sm"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            sortedData.map((row) => {
              const id = getRowId(row, rowKey);
              return (
                <TRow key={id} selected={selectedIds.has(id)}>
                  {selectable && (
                    <TCell>
                      <Checkbox
                        checked={selectedIds.has(id)}
                        onChange={() => toggleSelectRow(id)}
                      />
                    </TCell>
                  )}
                  {columns.map((col) => (
                    <TCell key={String(col.key)} className={col.className}>
                      {col.render
                        ? col.render(row)
                        : String(
                            (row as Record<string, unknown>)[col.key as string] ??
                              "",
                          )}
                    </TCell>
                  ))}
                </TRow>
              );
            })
          )}
        </TBody>
      </Table>
    </div>
  );
}
