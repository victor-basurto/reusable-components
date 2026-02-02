"use client";

import React, { useState, useMemo, useEffect } from "react";

import { Table } from "../table/Table";
import { THead } from "../table/THead";
import { THeader } from "../table/THeader";
import { User } from "@/types/user";
import { SortDirection } from "@/types/ui";
import { TRow } from "../table/TRow";
import { Checkbox } from "../form/Checkbox";
import { TBody } from "../table/TBody";
import { TCell } from "../table/TCell";
import { cn } from "@/lib/utils";

// const DATA = [
//   { id: "1", name: "John Doe", role: "Developer", status: "Active" },
//   { id: "2", name: "Alice Smith", role: "Designer", status: "Away" },
//   { id: "3", name: "Bob Johnson", role: "Manager", status: "Offline" },
// ];
export function SimpleUserTable() {
  const [userData, setUserData] = useState<User[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    dir: SortDirection;
  }>({
    key: "name",
    dir: "asc",
  });
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  useEffect(() => {
    // fetch data from the JSON file
    const fetchData = async () => {
      const rawUserData = await import("../../data/users.json");
      const userData: User[] = rawUserData.default as User[];

      setUserData(userData);
    };
    fetchData();
  }, []);
  // sorting logic
  const sortedData = useMemo(() => {
    const items = [...userData];
    if (sortConfig.dir === "asc") {
      items.sort((a: User, b: User) => {
        const key = sortConfig.key as keyof User;
        if (a[key] < b[key]) return sortConfig.dir === "asc" ? -1 : 1;
        if (a[key] > b[key]) return sortConfig.dir === "asc" ? 1 : -1;
        return 0;
      });
    }
    return items;
  }, [userData, sortConfig]);
  // Selection Logic
  const toggleSelectAll = () => {
    if (selectedIds.size === userData.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(userData.map((u) => u.id)));
    }
  };
  // Toggle Rows
  const toggleSelectRow = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };
  // handle sort
  const handleSort = (key: string) => {
    setSortConfig((prev) => ({
      key,
      dir: prev.key === key && prev.dir === "asc" ? "desc" : "asc",
    }));
  };
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center px-1">
        <h2 className="text-lg font-bold">
          Team Members ({selectedIds.size} selected)
        </h2>
      </div>
      <Table>
        <THeader>
          <TRow>
            <THead className="w-10">
              <Checkbox
                checked={selectedIds.size === userData.length}
                onChange={toggleSelectAll}
              />
            </THead>
            <THead
              onClick={() => handleSort("name")}
              sortDir={sortConfig.key === "name" ? sortConfig.dir : null}
            >
              Name
            </THead>
            <THead
              onClick={() => handleSort("role")}
              sortDir={sortConfig.key === "role" ? sortConfig.dir : null}
            >
              Role
            </THead>
            <THead>Status</THead>
          </TRow>
        </THeader>
        <TBody>
          {sortedData.map((user: User) => (
            <TRow key={user.id} selected={selectedIds.has(user.id)}>
              <TCell>
                <Checkbox
                  checked={selectedIds.has(user.id)}
                  onChange={() => toggleSelectRow(user.id)}
                />
              </TCell>
              <TCell className="font-medium">{user.name}</TCell>
              <TCell>{user.role}</TCell>
              <TCell>
                <span
                  className={cn(
                    `px-2 py-1 rounded text-[10px] font-bold uppercase ${
                      user.status === "active"
                        ? "bg-green-500/10 text-green-600"
                        : "bg-foreground/10 text-foreground/50"
                    }`,
                  )}
                >
                  {user.status}
                </span>
              </TCell>
            </TRow>
          ))}
        </TBody>
      </Table>
    </div>
  );
}
