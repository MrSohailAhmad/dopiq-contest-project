"use client";
import React from "react";

export type Column<T> = {
  key: keyof T; // which property in data
  label: string; // column header
  render?: (
    value: string | number | React.ReactNode | React.ReactNode | any,

    row: T
  ) => React.ReactNode; // custom renderer
};

type DataTableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

const DataTable = <T extends { id: string }>({
  data,
  columns,
}: DataTableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead>
          <tr className="text-xs uppercase tracking-wider bg-gray-50">
            {columns.map((col) => (
              <th key={String(col.key)} className="px-4 py-5">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-t border-gray-300 hover:bg-gray-50 transition"
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-5 text-gray-700">
                  {col.render
                    ? col.render(row[col.key], row)
                    : (row[col.key] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
