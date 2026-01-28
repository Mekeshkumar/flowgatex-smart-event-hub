import { motion } from "framer-motion";
import { 
  Users, 
  Calendar, 
  CreditCard, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Shield,
  AlertTriangle,
  Activity,
  Server
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Users",
    value: "24,589",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    title: "Active Events",
    value: "156",
    change: "+8%",
    trend: "up",
    icon: Calendar,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    title: "Total Revenue",
    value: "₹45.2L",
    change: "+23%",
    trend: "up",
    icon: CreditCard,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Platform Health",
    value: "99.9%",
    change: "+0.1%",
    trend: "up",
    icon: Activity,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
];

const recentActivity = [
  { type: "user", message: "New organizer registered: TechEvents Inc.", time: "2m ago" },
  { type: "event", message: "Event published: Music Festival 2024", time: "15m ago" },
  { type: "payment", message: "Payment processed: ₹24,999", time: "32m ago" },
  { type: "alert", message: "High traffic alert: Tech Summit page", time: "1h ago" },
  { type: "device", message: "IoT Gateway connected: Gate-Mumbai-01", time: "2h ago" },
];

const systemStatus = [
  { name: "API Server", status: "operational", uptime: "99.99%" },
  { name: "Database", status: "operational", uptime: "99.95%" },
  { name: "IoT Gateway", status: "operational", uptime: "99.9%" },
  { name: "Payment Gateway", status: "operational", uptime: "100%" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold">
            Admin <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            Platform overview and management
          </p>
        </div>
        <Badge variant="outline" className="gap-1 text-success border-success/30">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
          All Systems Operational
        </Badge>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="glass-card border-border/50">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <span className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === "up" ? "text-success" : "text-destructive"
                  }`}>
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="glass-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
              <Button variant="ghost" size="sm">View All</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    activity.type === "user" ? "bg-info/10" :
                    activity.type === "event" ? "bg-success/10" :
                    activity.type === "payment" ? "bg-primary/10" :
                    activity.type === "alert" ? "bg-warning/10" :
                    "bg-muted"
                  }`}>
                    {activity.type === "user" && <Users className="w-5 h-5 text-info" />}
                    {activity.type === "event" && <Calendar className="w-5 h-5 text-success" />}
                    {activity.type === "payment" && <CreditCard className="w-5 h-5 text-primary" />}
                    {activity.type === "alert" && <AlertTriangle className="w-5 h-5 text-warning" />}
                    {activity.type === "device" && <Server className="w-5 h-5 text-muted-foreground" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {systemStatus.map((system) => (
                <div key={system.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-success rounded-full" />
                    <span className="font-medium text-sm">{system.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{system.uptime}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="glass-card border-border/50">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4">Admin Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Users className="w-5 h-5" />
                <span>Manage Users</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Calendar className="w-5 h-5" />
                <span>Review Events</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Server className="w-5 h-5" />
                <span>IoT Devices</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>Analytics</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
