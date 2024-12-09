"use client";

import { DataTable } from "@/components/ikon-components/data-table";
import { DemoData } from "@/components/ikon-components/data-table/type";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Edit, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

const leadData: DemoData[] = [
  { orgId: "11", orgName: "Lead 1", leadManager: "John Doe", email: "john.doe@example.com", noOfEmployees: "28", orgNumber: "1111111111", sector: "Construction", status: "Opportunity Created", updatedOn: "2024-09-12" },
  { orgId: "12", orgName: "Lead 2", leadManager: "Jane Smith", email: "jane.smith@example.com", noOfEmployees: "32", orgNumber: "2222222222", sector: "Hospitals", status: "Proposal Created", updatedOn: "2024-09-15" },
  { orgId: "13", orgName: "Lead 3", leadManager: "Alice Brown", email: "alice.brown@example.com", noOfEmployees: "45", orgNumber: "1010101010", sector: "Media", status: "Deal Created", updatedOn: "2024-10-21" },
  { orgId: "14", orgName: "Lead 4", leadManager: "Bob White", email: "bob.white@example.com", noOfEmployees: "78", orgNumber: "2121010121", sector: "Construction", status: "Discovery Created", updatedOn: "2024-11-02" },
  { orgId: "15", orgName: "Lead 5", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "16", orgName: "Lead 6", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "17", orgName: "Lead 7", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "18", orgName: "Lead 8", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "19", orgName: "Lead 9", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "20", orgName: "Lead 10", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "21", orgName: "Lead 11", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "22", orgName: "Lead 12", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "23", orgName: "Lead 13", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "24", orgName: "Lead 14", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "25", orgName: "Lead 15", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "26", orgName: "Lead 16", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "27", orgName: "Lead 17", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "28", orgName: "Lead 18", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "29", orgName: "Lead 19", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
  { orgId: "30", orgName: "Lead 20", leadManager: "Alex Stone", email: "alex.stone@example.com", noOfEmployees: "12", orgNumber: "1231231230", sector: "Hospitals", status: "Deal Created", updatedOn: "2024-09-11" },
];

//Column Schema
const columns: ColumnDef<DemoData>[] = [
  {
    accessorKey: "orgName",
    header: ({ column }) => {
      return (
        <div style={{ textAlign: 'center' }}>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Organization Name
            <ArrowUpDown />
          </Button>
        </div>
      )
    },

    //cell: ({ row }) => <span>{row.original.orgName}</span>,
    cell: info => info.getValue(),
    getGroupingValue: row => `${row.orgName}`,
    //getCanGroup: () => true,
    //grouped: true,
  },
  {
    accessorKey: "noOfEmployees",
    header: () => (
      <div style={{ textAlign: 'center' }}>
        Number of Employees
      </div>
    ),
    cell: ({ row }) => <span>{row.original.noOfEmployees}</span>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <span>{row.original.email}</span>,
  },
  {
    accessorKey: "orgNumber",
    header: "Contact Number",
    cell: ({ row }) => <span>{row.original.orgNumber}</span>,
  },
  {
    accessorKey: "sector",
    header: "Sector",
    cell: ({ row }) => <span>{row.original.sector}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <span>{row.original.status}</span>,
  },
  {
    accessorKey: "leadManager",
    header: "Lead Manager",
    cell: ({ row }) => <span>{row.original.leadManager}</span>,
  },
  {
    accessorKey: "updatedOn",
    header: "Updated On",
    cell: ({ row }) => <span>{row.original.updatedOn}</span>,
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only"></span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => { }}
              >
                Edit <Edit />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  }
];

const extraParams: any = {
  searching: true,
  filtering: true,
  grouping: true,
}

const extraParamsEvent: any = {
  height : 800,
  margin : "10px",
  defaultView : "month",
  
}

export default function Page() {
  return (
    <div className="container p-3 w-full">
      <DataTable columns={columns} data={leadData} extraParams={extraParams} />
    </div>
  );
}