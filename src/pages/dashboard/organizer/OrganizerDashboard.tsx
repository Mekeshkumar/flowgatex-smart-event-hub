import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreHorizontal,
  Clock,
  MapPin,
  Ticket
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Total Events",
    value: "24",
    change: "+12%",
    trend: "up",
    icon: Calendar,
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    title: "Total Attendees",
    value: "12,847",
    change: "+23%",
    trend: "up",
    icon: Users,
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    title: "Revenue",
    value: "₹4.8L",
    change: "+18%",
    trend: "up",
    icon: CreditCard,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Conversion Rate",
    value: "68%",
    change: "-2%",
    trend: "down",
    icon: TrendingUp,
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
];

const upcomingEvents = [
  {
    id: "1",
    title: "Tech Summit 2024",
    date: "Mar 15, 2024",
    time: "9:00 AM",
    location: "Mumbai",
    attendees: 423,
    capacity: 500,
    status: "upcoming",
  },
  {
    id: "2",
    title: "Startup Pitch Night",
    date: "Mar 20, 2024",
    time: "5:00 PM",
    location: "Bangalore",
    attendees: 150,
    capacity: 200,
    status: "upcoming",
  },
  {
    id: "3",
    title: "AI Workshop",
    date: "Apr 1, 2024",
    time: "10:00 AM",
    location: "Hyderabad",
    attendees: 32,
    capacity: 50,
    status: "draft",
  },
];

const recentBookings = [
  { name: "Priya Sharma", event: "Tech Summit 2024", tickets: 2, amount: "₹5,998", time: "2m ago" },
  { name: "Raj Kumar", event: "Startup Pitch Night", tickets: 1, amount: "Free", time: "15m ago" },
  { name: "Anita Desai", event: "AI Workshop", tickets: 1, amount: "₹1,499", time: "1h ago" },
  { name: "Vikram Singh", event: "Tech Summit 2024", tickets: 3, amount: "₹8,997", time: "2h ago" },
];

export default function OrganizerDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-2xl sm:text-3xl font-bold">
          Welcome back, <span className="gradient-text">John</span>
        </h1>
        <p className="text-muted-foreground mt-1">
          Here's what's happening with your events today.
        </p>
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

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="glass-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Upcoming Events</CardTitle>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold truncate">{event.title}</h3>
                      <Badge variant={event.status === "draft" ? "secondary" : "outline"} className="text-xs">
                        {event.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {event.date}, {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{event.attendees}/{event.capacity}</p>
                    <p className="text-xs text-muted-foreground">attendees</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="glass-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Recent Bookings</CardTitle>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentBookings.map((booking, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-semibold text-primary">
                      {booking.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{booking.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {booking.event} • {booking.tickets} ticket{booking.tickets > 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm">{booking.amount}</p>
                    <p className="text-xs text-muted-foreground">{booking.time}</p>
                  </div>
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
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Calendar className="w-5 h-5" />
                <span>Create Event</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Users className="w-5 h-5" />
                <span>View Analytics</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <Ticket className="w-5 h-5" />
                <span>Manage Tickets</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                <CreditCard className="w-5 h-5" />
                <span>View Revenue</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
