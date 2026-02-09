"use client";

import React, { useEffect, useState } from "react";
import { DataTable } from "../table/DataTable";
import { DataTableColumn } from "@/types/ui";
import { User } from "@/types/user";
import { cn } from "@/lib/utils";

export function DataTableExample() {
  const [userData, setUserData] = useState<User[]>([]);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchData = async () => {
      const raw = await import("../../data/users.json");
      setUserData((raw.default as User[]) ?? []);
    };
    fetchData();
  }, []);

  const columns: DataTableColumn<User>[] = [
    {
      key: "name",
      label: "Name",
      sortable: true,
      className: "font-medium",
    },
    {
      key: "role",
      label: "Role",
      sortable: true,
      headerClassName: "capitalize",
      render: (row) => (
        <span className="capitalize">{String(row.role)}</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      render: (row) => (
        <span
          className={cn(
            "px-2 py-1 rounded text-[10px] font-bold uppercase",
            row.status === "active"
              ? "bg-green-500/10 text-green-600"
              : "bg-foreground/10 text-foreground/50",
          )}
        >
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center px-1">
        <h2 className="text-lg font-bold">
          Team Members
          {selectedIds.size > 0 && ` (${selectedIds.size} selected)`}
        </h2>
      </div>
      <DataTable<User>
        columns={columns}
        data={userData}
        rowKey="id"
        selectable
        selectedIds={selectedIds}
        onSelectionChange={setSelectedIds}
        emptyMessage="No team members yet."
      />
    </div>
  );
}
