"use client"

import AccountSwitcher from "@/components/ikon-components/account-switcher";
import { SidebarUser } from "@/components/ikon-components/sidebar-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader, SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import { DollarSign, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MainSideBar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const navMain = [
        {
            title: "Sales CRM",
            url: "/sales-crm",
            icon: DollarSign,
            isActive: true,
        },
        {
            title: "HCM",
            url: "/hcm",
            icon: Users,
            isActive: false,
        },

    ];
    const [activeItem, setActiveItem] = useState(navMain[0])
    return (
        <Sidebar
            collapsible="icon"
            {...props}
            className="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r"
        >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <AccountSwitcher />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent className="px-1.5 md:px-0">
                        <SidebarMenu>
                            {navMain.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        tooltip={{
                                            children: item.title,
                                            hidden: false,
                                        }}
                                        onClick={() => {
                                            setActiveItem(item);
                                        }}
                                        isActive={activeItem.title === item.title}
                                        className="px-2.5 md:px-2"
                                        asChild
                                    >
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>

                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarUser />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}
