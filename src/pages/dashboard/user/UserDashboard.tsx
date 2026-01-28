import { motion } from "framer-motion";
import { 
  Ticket, 
  Calendar, 
  Heart, 
  Bell,
  Clock,
  MapPin,
  QrCode,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const upcomingBookings = [
  {
    id: "1",
    title: "Tech Summit 2024",
    date: "Mar 15, 2024",
    time: "9:00 AM",
    location: "Convention Center, Mumbai",
    tickets: 2,
    status: "confirmed",
  },
  {
    id: "2",
    title: "AI Workshop",
    date: "Apr 1, 2024",
    time: "10:00 AM",
    location: "Innovation Lab, Hyderabad",
    tickets: 1,
    status: "confirmed",
  },
];

const recommendedEvents = [
  {
    id: "1",
    title: "Startup Pitch Night",
    category: "Business",
    date: "Mar 25, 2024",
    price: "Free",
  },
  {
    id: "2",
    title: "Music Festival Live",
    category: "Music",
    date: "Mar 20, 2024",
    price: "₹4,999",
  },
  {
    id: "3",
    title: "Art Exhibition",
    category: "Art",
    date: "Apr 15, 2024",
    price: "₹499",
  },
];

const quickStats = [
  { icon: Ticket, label: "My Bookings", value: "5", href: "/dashboard/user/bookings" },
  { icon: Heart, label: "Saved Events", value: "12", href: "/dashboard/user/saved" },
  { icon: Bell, label: "Notifications", value: "3", href: "/dashboard/user/notifications" },
];

export default function UserDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-2xl sm:text-3xl font-bold">
          Welcome back, <span className="gradient-text">Alex</span>
        </h1>
        <p className="text-muted-foreground mt-1">
          Discover events and manage your bookings.
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        {quickStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link to={stat.href}>
              <Card className="glass-card-hover border-border/50">
                <CardContent className="p-4 text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Bookings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Card className="glass-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Ticket className="w-5 h-5 text-primary" />
              Upcoming Bookings
            </CardTitle>
            <Link to="/dashboard/user/bookings">
              <Button variant="ghost" size="sm" className="gap-1">
                View All
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <QrCode className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold truncate">{booking.title}</h3>
                    <Badge variant="outline" className="text-xs text-success border-success/30">
                      {booking.status}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {booking.date}, {booking.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {booking.location}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{booking.tickets} ticket{booking.tickets > 1 ? "s" : ""}</p>
                  <Button variant="ghost" size="sm" className="text-primary">
                    View Ticket
                  </Button>
                </div>
              </div>
            ))}

            {upcomingBookings.length === 0 && (
              <div className="text-center py-8">
                <Ticket className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
                <p className="text-muted-foreground">No upcoming bookings</p>
                <Link to="/events">
                  <Button variant="link" className="text-primary">
                    Explore Events
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Recommended Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <Card className="glass-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-warning" />
              Recommended for You
            </CardTitle>
            <Link to="/events">
              <Button variant="ghost" size="sm" className="gap-1">
                Browse All
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4">
              {recommendedEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
                >
                  <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-3">
                    <Calendar className="w-8 h-8 text-primary/40" />
                  </div>
                  <Badge variant="secondary" className="text-xs mb-2">
                    {event.category}
                  </Badge>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2 text-sm">
                    <span className="text-muted-foreground">{event.date}</span>
                    <span className="font-semibold text-primary">{event.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Explore CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
          <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl font-bold mb-1">
                Discover Amazing Events
              </h3>
              <p className="text-muted-foreground">
                Explore thousands of events happening near you
              </p>
            </div>
            <Link to="/events">
              <Button variant="hero" size="lg">
                Explore Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
