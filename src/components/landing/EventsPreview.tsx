import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: "1",
    title: "Tech Summit 2024",
    category: "Technology",
    date: "Mar 15, 2024",
    time: "9:00 AM",
    location: "Convention Center, Mumbai",
    image: "/placeholder.svg",
    price: "₹2,999",
    capacity: 500,
    registered: 423,
    status: "upcoming" as const,
  },
  {
    id: "2",
    title: "Music Festival Live",
    category: "Music",
    date: "Mar 20, 2024",
    time: "6:00 PM",
    location: "Open Arena, Delhi",
    image: "/placeholder.svg",
    price: "₹4,999",
    capacity: 10000,
    registered: 8547,
    status: "live" as const,
  },
  {
    id: "3",
    title: "Startup Pitch Night",
    category: "Business",
    date: "Mar 25, 2024",
    time: "5:00 PM",
    location: "Tech Hub, Bangalore",
    image: "/placeholder.svg",
    price: "Free",
    capacity: 200,
    registered: 200,
    status: "sold-out" as const,
  },
  {
    id: "4",
    title: "AI Workshop",
    category: "Workshop",
    date: "Apr 1, 2024",
    time: "10:00 AM",
    location: "Innovation Lab, Hyderabad",
    image: "/placeholder.svg",
    price: "₹1,499",
    capacity: 50,
    registered: 32,
    status: "upcoming" as const,
  },
];

const statusConfig = {
  live: { label: "LIVE", className: "badge-live" },
  upcoming: { label: "Upcoming", className: "badge-upcoming" },
  "sold-out": { label: "Sold Out", className: "badge-sold-out" },
};

export function EventsPreview() {
  return (
    <section className="section-spacing">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Discover
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Trending Events
            </h2>
          </div>
          <Link to="/events">
            <Button variant="outline" className="gap-2 group">
              View All Events
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card-hover overflow-hidden group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <Calendar className="w-12 h-12 text-primary/30" />
                </div>
                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusConfig[event.status].className}`}>
                    {event.status === "live" && (
                      <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
                    )}
                    {statusConfig[event.status].label}
                  </span>
                </div>
                {/* Price */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-sm font-semibold">
                  {event.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <Badge variant="secondary" className="mb-2 text-xs">
                  {event.category}
                </Badge>
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-1">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 shrink-0" />
                    <span>{event.date}</span>
                    <Clock className="w-4 h-4 shrink-0 ml-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 shrink-0" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                </div>

                {/* Capacity Bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="text-muted-foreground">
                      <Users className="w-3.5 h-3.5 inline mr-1" />
                      {event.registered} / {event.capacity}
                    </span>
                    <span className="font-medium">
                      {Math.round((event.registered / event.capacity) * 100)}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
