"use client"

import {
    ChevronsUpDown
} from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenuButton, useSidebar
} from "@/components/ui/sidebar"
import User from "../menu-user"
import NavUserDropdownMenu from "../user-dropdown-menu"

export function SidebarUser() {

    const { isMobile } = useSidebar()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground md:h-8 md:p-0"
                >
                    <User />
                    <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
            >
                <NavUserDropdownMenu />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
