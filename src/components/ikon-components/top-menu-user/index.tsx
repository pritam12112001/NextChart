"use client"


import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar"
import { Button } from "../../ui/button"
import NavUserDropdownMenu from "../user-dropdown-menu"

export default function TopMenuUser() {
    const user = {
        name: "John Doe",
        avatar: "https://example.com/avatar.jpg",
        email: "john.doe@example.com",
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Avatar className="rounded-lg">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                sideOffset={4}
            >
                <NavUserDropdownMenu />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
