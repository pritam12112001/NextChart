"use client"
import { useAppLayout } from "@/components/ikon-components/layouts/app-layout/AppLayoutProvider";
import { Building, Handshake, Hourglass, ListCollapse } from "lucide-react";

const menuItems = [
  {
    title: 'Lead',
    iconClass: Building,
    submenu: [
      {
        title: 'Details',
        iconClass: ListCollapse,
      },
      {
        title: 'Activity',
        iconClass: Hourglass,
      },
    ],
  },
  {
    title: 'Deal',
    iconClass: Handshake,
    submenu: [
      {
        title: 'Details',
        iconClass: ListCollapse,
      },
      {
        title: 'Activity',
        iconClass: Hourglass,
      },
    ],
  },
];

export default function SalesCrm() {
  const { setAppMenus } = useAppLayout();
  setAppMenus(menuItems);
  return (
    <>
      <h1>Sales CRM</h1>
    </>
  );
}
