"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ActivityIcon,
  AlignJustifyIcon,
  BarChart3Icon,
  BellIcon,
  BoxIcon,
  CalendarIcon,
  ClockIcon,
  CloudIcon,
  ComponentIcon,
  CreditCardIcon,
  FileEditIcon,
  FileTextIcon,
  FolderIcon,
  GalleryVerticalEndIcon,
  GlobeIcon,
  HeadphonesIcon,
  ImageIcon,
  KanbanIcon,
  KeyRoundIcon,
  LayoutDashboardIcon,
  LineChartIcon,
  LinkIcon,
  LockIcon,
  MailIcon,
  MapPinIcon,
  MessageSquareIcon,
  PackageIcon,
  PaletteIcon,
  PanelLeftIcon,
  ReceiptIcon,
  SearchIcon,
  ShieldIcon,
  ShoppingCartIcon,
  TagIcon,
  UserCheckIcon,
  UserCircleIcon,
  UserCogIcon,
  UsersIcon,
  WandIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

const data = [
  {
    title: "Website",
    url: "/",
    items: [{ title: "Landing Page", url: "/", icon: GlobeIcon }],
  },
  {
    title: "Dashboards",
    url: "/dashboard",
    items: [
      {
        title: "Overview",
        url: "/dashboard",
        icon: LayoutDashboardIcon,
      },
      { title: "Analytics", url: "/dashboard/analytics", icon: BarChart3Icon },
      {
        title: "E-Commerce",
        url: "/dashboard/e-commerce",
        icon: ShoppingCartIcon,
      },
      { title: "CRM", url: "/dashboard/crm", icon: UsersIcon },
      { title: "SaaS", url: "/dashboard/saas", icon: CloudIcon },
    ],
  },
  {
    title: "Apps",
    url: "/apps",
    items: [
      { title: "Chat", url: "/apps/chat", icon: MessageSquareIcon },
      { title: "Mail", url: "/apps/mail", icon: MailIcon },
      { title: "Kanban", url: "/apps/kanban", icon: KanbanIcon },
      { title: "Calendar", url: "/apps/calendar", icon: CalendarIcon },
      { title: "Files", url: "/apps/files", icon: FolderIcon },
      { title: "Charts", url: "/apps/charts", icon: LineChartIcon },
      { title: "Editor", url: "/apps/editor", icon: FileEditIcon },
      { title: "Map", url: "/apps/map", icon: MapPinIcon },
    ],
  },
  {
    title: "Pages",
    url: "/pages",
    items: [
      { title: "Forms", url: "/pages/forms", icon: FileTextIcon },
      { title: "Wizard", url: "/pages/wizard", icon: WandIcon },
      { title: "Pricing", url: "/pages/pricing", icon: TagIcon },
      { title: "Billing", url: "/pages/billing", icon: CreditCardIcon },
      { title: "Notifications", url: "/pages/notifications", icon: BellIcon },
      { title: "Support", url: "/pages/support", icon: HeadphonesIcon },
      { title: "Components", url: "/pages/components", icon: ComponentIcon },
      { title: "Timeline", url: "/pages/timeline", icon: ClockIcon },
      { title: "Search", url: "/pages/search", icon: SearchIcon },
    ],
  },
  {
    title: "Layouts",
    url: "/layouts",
    items: [
      {
        title: "Sidebar (Default)",
        url: "/layouts/sidebar",
        icon: PanelLeftIcon,
        // isActive: true,
      },
      {
        title: "Horizontal",
        url: "/layouts/horizontal",
        icon: AlignJustifyIcon,
      },
    ],
  },
  {
    title: "Management",
    url: "/management",
    items: [
      { title: "Orders", url: "/management/orders", icon: PackageIcon },
      { title: "Products", url: "/management/products", icon: BoxIcon },
      { title: "Customers", url: "/management/customers", icon: UserCheckIcon },
      { title: "Invoices", url: "/management/invoices", icon: ReceiptIcon },
      { title: "Users", url: "/management/users", icon: UserCogIcon },
      { title: "Roles", url: "/management/roles", icon: ShieldIcon },
    ],
  },
  {
    title: "Account",
    url: "/account",
    items: [
      { title: "Profile", url: "/account/profile", icon: UserCircleIcon },
      { title: "Activity", url: "/account/activity", icon: ActivityIcon },
      { title: "Connections", url: "/account/connections", icon: LinkIcon },
      { title: "Gallery", url: "/account/gallery", icon: ImageIcon },
    ],
  },
  {
    title: "Settings",
    url: "/settings",
    items: [
      { title: "Profile", url: "/settings/profile", icon: UserCircleIcon },
      { title: "Password", url: "/settings/password", icon: KeyRoundIcon },
      { title: "Appearance", url: "/settings/appearance", icon: PaletteIcon },
      { title: "Two-Factor", url: "/settings/two-factor", icon: LockIcon },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const isActive = (url: string) => {
    if (url === "/") return pathname === "/";
    return pathname === url || pathname?.startsWith(url + "/");
  };

  return (
    <Sidebar {...props} collapsible="icon">
      <SidebarHeader className="px-0 pt-0">
        <SidebarMenu>
          <SidebarMenuItem className="flex h-16 items-center border-b px-2">
            <Link href="/dashboard" className="w-full">
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
                tooltip="Dashboard"
              >
                <div className="text-sidebar-primary-foreground bg-sidebar-primary flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEndIcon className="size-4" />
                </div>
                <span className="font-medium">ERP Name</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {data.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="text-muted text-xs font-medium tracking-wider uppercase">
              {item.title}{" "}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((subItem) => {
                  const active = isActive(subItem.url);

                  return (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton
                        asChild
                        className={
                          active
                            ? "bg-[#14b8a614] text-[#00936e] hover:bg-[#14b8a614] hover:text-[#00936e]"
                            : ""
                        }
                        tooltip={subItem.title}
                      >
                        <a href={subItem.url}>
                          {subItem.icon && <subItem.icon className="size-4" />}
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
