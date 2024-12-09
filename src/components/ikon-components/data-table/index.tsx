import React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    GroupingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    getGroupedRowModel,
    getExpandedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, ChevronFirst, ChevronLast, ChevronsDown, ChevronsUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue, ExtraParams> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    extraParams: ExtraParams;
}

export function DataTable<TData, TValue>({
    columns,
    data,
    extraParams,
}: DataTableProps<TData, TValue, { searching: boolean; grouping: boolean; filtering: boolean}>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = React.useState("");
    const [openDropdown, setOpenDropdown] = React.useState(false)
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [grouping, setGrouping] = React.useState<GroupingState>([]);
    const [expanded, setExpanded] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({})
    const [tempVisibility, setTempVisibility] = React.useState<VisibilityState>({})

    React.useEffect(() => {
        setTempVisibility(columnVisibility)
    }, [columnVisibility])

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter,
            columnFilters,
            columnVisibility,
	    rowSelection,
            grouping,
            expanded,
        },
        onSortingChange: setSorting,
        onExpandedChange: setExpanded,
        onGlobalFilterChange: setGlobalFilter,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onGroupingChange: setGrouping,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getGroupedRowModel: getGroupedRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
	globalFilterFn: (row, _columnId, filterValue) => {
            return row.getVisibleCells().some((cell) =>
                String(cell.getValue())
                    .toLowerCase()
                    .includes(filterValue.toLowerCase())
            )
        },
    });

    const handleApplyVisibility = () => {
        setOpenDropdown(false)
        setColumnVisibility(tempVisibility)
    }

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                {extraParams.searching ?
                    <Input
                        placeholder="Search ..."
                        value={globalFilter}
                        onChange={(event) => setGlobalFilter(event.target.value)}
                        className="max-w-sm"
                    /> : <></>}
                {extraParams.filtering ?
                    <DropdownMenu open={openDropdown} >
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ml-auto" onClick={() => setOpenDropdown(true)}>
                                Columns <ChevronDown />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanHide())
                                .map((column) => (
                                    <div
                                        key={column.id}
                                    >
                                        <DropdownMenuCheckboxItem
                                            className="capitalize"
                                            checked={tempVisibility[column.id] ?? true}
                                            onCheckedChange={(value) => {
                                                setTempVisibility((prev) => ({
                                                    ...prev,
                                                    [column.id]: value,
                                                }))
                                            }}
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    </div>
                                ))}
                            <DropdownMenuSeparator />
                            <Button
                                onClick={handleApplyVisibility}
                                size="sm"
                                variant="default"
                                className="w-full"
                            >
                                Apply
                            </Button>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    : <></>
                }
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder ? null : (
                                            <div className="flex items-center">
                                                {header.column.getCanGroup() && (
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={header.column.getToggleGroupingHandler()}
                                                        className="mr-2"
                                                    >
                                                        {header.column.getIsGrouped() ? <ChevronsUp /> : <ChevronsDown />}
                                                    </Button>
                                                )}
                                                {flexRender(header.column.columnDef.header, header.getContext())}
                                            </div>
                                        )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className={cell.column.columnDef?.className || 'text-center'}>
                                            {cell.getIsGrouped() ? (
                                                <Button
                                                    variant="link"
                                                    onClick={row.getToggleExpandedHandler()}
                                                    className="text-right"
                                                >
                                                    {row.getIsExpanded() ? <ChevronDown /> : <ChevronLast />}{" "}
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())} (
                                                    {row.subRows.length})
                                                </Button>
                                            ) : cell.getIsAggregated() ? (
                                                flexRender(
                                                    cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )
                                            ) : (
                                                flexRender(cell.column.columnDef.cell, cell.getContext())
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                {/* <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div> */}
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        <ChevronFirst />
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        <ChevronLast />
                    </Button>
                </div>
            </div>
        </div>
    );
}
