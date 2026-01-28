import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap,
  Home,
  Calendar,
  Ticket,
  BarChart3,
  Settings,
  Users,
  Cpu,
  CreditCard,
  MessageSquare,
  Bell,
  Shield,
  FileText,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Role = "user" | "organizer" | "admin";

interface NavItem {
  name: string;
  href: string;
  icon: typeof Home;
  badge?: number;
}

const roleNavItems: Record<Role, NavItem[]> = {
  user: [
    { name: "Dashboard", href: "/dashboard/user", icon: Home },
    { name: "Events", href: "/dashboard/user/events", icon: Calendar },
    { name: "My Bookings", href: "/dashboard/user/bookings", icon: Ticket, badge: 3 },
    { name: "Saved Events", href: "/dashboard/user/saved", icon: Calendar },
    { name: "Notifications", href: "/dashboard/user/notifications", icon: Bell, badge: 5 },
    { name: "Profile", href: "/dashboard/user/profile", icon: Settings },
  ],
  organizer: [
    { name: "Dashboard", href: "/dashboard/organizer", icon: Home },
    { name: "My Events", href: "/dashboard/organizer/events", icon: Calendar },
    { name: "IoT Devices", href: "/dashboard/organizer/iot", icon: Cpu },
    { name: "Analytics", href: "/dashboard/organizer/analytics", icon: BarChart3 },
    { name: "Revenue", href: "/dashboard/organizer/revenue", icon: CreditCard },
    { name: "Marketing", href: "/dashboard/organizer/marketing", icon: MessageSquare },
    { name: "Profile", href: "/dashboard/organizer/profile", icon: Settings },
  ],
  admin: [
    { name: "Dashboard", href: "/dashboard/admin", icon: Home },
    { name: "Users", href: "/dashboard/admin/users", icon: Users },
    { name: "Organizers", href: "/dashboard/admin/organizers", icon: Shield },
    { name: "Events", href: "/dashboard/admin/events", icon: Calendar },
    { name: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3 },
    { name: "Devices", href: "/dashboard/admin/devices", icon: Cpu },
    { name: "Payments", href: "/dashboard/admin/payments", icon: CreditCard },
    { name: "Support", href: "/dashboard/admin/support", icon: HelpCircle, badge: 12 },
    { name: "Content", href: "/dashboard/admin/content", icon: FileText },
    { name: "Logs", href: "/dashboard/admin/logs", icon: FileText },
    { name: "Settings", href: "/dashboard/admin/settings", icon: Settings },
  ],
};

interface DashboardSidebarProps {
  role: Role;
}

export function DashboardSidebar({ role }: DashboardSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navItems = roleNavItems[role];

  const roleLabels: Record<Role, string> = {
    user: "Attendee",
    organizer: "Organizer",
    admin: "Admin",
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300 z-40",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 lg:h-20 flex items-center px-4 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-display text-lg font-bold text-sidebar-foreground"
            >
              FlowGate<span className="text-primary">X</span>
            </motion.span>
          )}
        </Link>
      </div>

      {/* Role Badge */}
      {!collapsed && (
        <div className="px-4 py-3 border-b border-sidebar-border">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {roleLabels[role]} Portal
          </span>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              )}
            >
              <item.icon className={cn("w-5 h-5 shrink-0", isActive ? "" : "text-muted-foreground group-hover:text-sidebar-foreground")} />
              {!collapsed && (
                <span className="text-sm font-medium">{item.name}</span>
              )}
              {item.badge && !collapsed && (
                <span className="ml-auto bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
              {item.badge && collapsed && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-3 border-t border-sidebar-border space-y-1">
        <button
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors w-full"
        >
          <HelpCircle className="w-5 h-5 text-muted-foreground" />
          {!collapsed && <span className="text-sm font-medium">Help</span>}
        </button>
        <button
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-destructive hover:bg-destructive/10 transition-colors w-full"
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>

      {/* Collapse Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-3 top-24 w-6 h-6 rounded-full bg-background border border-border shadow-sm hover:bg-accent"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <ChevronRight className="w-3 h-3" />
        ) : (
          <ChevronLeft className="w-3 h-3" />
        )}
      </Button>
    </aside>
  );
}
