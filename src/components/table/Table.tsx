import React from "react";
import { cn } from "@/lib/utils";
import { TableProps } from "@/types/ui";

export const Table: React.FC<TableProps> = ({ children, className }) => {
  return (
    <div className="relative w-full overflow-auto rounded-lg border border-border">
      <table className={cn("w-full caption-bottom text-sm", className)}>
        {children}
      </table>
    </div>
  );
};

// src/page-content/UserTable.tsx
// "use client";
//
// import React, { useState, useMemo } from "react";
// import { Table, THeader, TBody, TRow, THead, TCell } from "../components/ui/Table";
// import { Checkbox } from "../components/form/Checkbox";
//
// const DATA = [
//   { id: "1", name: "John Doe", role: "Developer", status: "Active" },
//   { id: "2", name: "Alice Smith", role: "Designer", status: "Away" },
//   { id: "3", name: "Bob Johnson", role: "Manager", status: "Offline" },
// ];
//
// export function UserTable() {
//   const [sortConfig, setSortConfig] = useState<{ key: string; dir: 'asc' | 'desc' | null }>({ key: 'name', dir: 'asc' });
//   const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
//
//   // Sorting Logic
//   const sortedData = useMemo(() => {
//     const items = [...DATA];
//     if (sortConfig.dir) {
//       items.sort((a: any, b: any) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.dir === 'asc' ? -1 : 1;
//         if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.dir === 'asc' ? 1 : -1;
//         return 0;
//       });
//     }
//     return items;
//   }, [sortConfig]);
//
//   // Selection Logic
//   const toggleSelectAll = () => {
//     if (selectedIds.size === DATA.length) {
//       setSelectedIds(new Set());
//     } else {
//       setSelectedIds(new Set(DATA.map(d => d.id)));
//     }
//   };
//
//   const toggleSelectRow = (id: string) => {
//     const next = new Set(selectedIds);
//     if (next.has(id)) next.delete(id);
//     else next.add(id);
//     setSelectedIds(next);
//   };
//
//   const handleSort = (key: string) => {
//     setSortConfig(prev => ({
//       key,
//       dir: prev.key === key && prev.dir === 'asc' ? 'desc' : 'asc'
//     }));
//   };
//
//   return (
//     <div className="space-y-4">
//       <div className="flex justify-between items-center px-1">
//         <h2 className="text-lg font-bold">Team Members ({selectedIds.size} selected)</h2>
//       </div>
//
//       <Table>
//         <THeader>
//           <TRow>
//             <THead className="w-10">
//               <Checkbox
//                 checked={selectedIds.size === DATA.length}
//                 onChange={toggleSelectAll}
//               />
//             </THead>
//             <THead onClick={() => handleSort('name')} sortDir={sortConfig.key === 'name' ? sortConfig.dir : null}>Name</THead>
//             <THead onClick={() => handleSort('role')} sortDir={sortConfig.key === 'role' ? sortConfig.dir : null}>Role</THead>
//             <THead>Status</THead>
//           </TRow>
//         </THeader>
//         <TBody>
//           {sortedData.map((user) => (
//             <TRow key={user.id} selected={selectedIds.has(user.id)}>
//               <TCell>
//                 <Checkbox
//                   checked={selectedIds.has(user.id)}
//                   onChange={() => toggleSelectRow(user.id)}
//                 />
//               </TCell>
//               <TCell className="font-medium">{user.name}</TCell>
//               <TCell>{user.role}</TCell>
//               <TCell>
//                 <span className={cn(
//                    "px-2 py-1 rounded text-[10px] font-bold uppercase",
//                    user.status === 'Active' ? "bg-green-500/10 text-green-600" : "bg-foreground/10 text-foreground/50"
//                 )}>
//                   {user.status}
//                 </span>
//               </TCell>
//             </TRow>
//           ))}
//         </TBody>
//       </Table>
//     </div>
//   );
// }
