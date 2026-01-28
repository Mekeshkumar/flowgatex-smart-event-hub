import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Search, 
  Filter, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  ChevronDown,
  Grid,
  List,
  SlidersHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = ["All", "Technology", "Music", "Business", "Workshop", "Sports", "Art", "Food"];

const events = [
  {
    id: "1",
    title: "Tech Summit 2024",
    category: "Technology",
    date: "Mar 15, 2024",
    time: "9:00 AM",
    location: "Convention Center, Mumbai",
    price: "₹2,999",
    capacity: 500,
    registered: 423,
    status: "upcoming" as const,
    description: "Join industry leaders for a day of innovation and networking.",
  },
  {
    id: "2",
    title: "Music Festival Live",
    category: "Music",
    date: "Mar 20, 2024",
    time: "6:00 PM",
    location: "Open Arena, Delhi",
    price: "₹4,999",
    capacity: 10000,
    registered: 8547,
    status: "live" as const,
    description: "The biggest music festival featuring top artists from around the world.",
  },
  {
    id: "3",
    title: "Startup Pitch Night",
    category: "Business",
    date: "Mar 25, 2024",
    time: "5:00 PM",
    location: "Tech Hub, Bangalore",
    price: "Free",
    capacity: 200,
    registered: 200,
    status: "sold-out" as const,
    description: "Watch startups compete for funding from top VCs.",
  },
  {
    id: "4",
    title: "AI & ML Workshop",
    category: "Workshop",
    date: "Apr 1, 2024",
    time: "10:00 AM",
    location: "Innovation Lab, Hyderabad",
    price: "₹1,499",
    capacity: 50,
    registered: 32,
    status: "upcoming" as const,
    description: "Hands-on workshop on artificial intelligence and machine learning.",
  },
  {
    id: "5",
    title: "Sports Marathon",
    category: "Sports",
    date: "Apr 10, 2024",
    time: "5:30 AM",
    location: "Marina Beach, Chennai",
    price: "₹999",
    capacity: 5000,
    registered: 3200,
    status: "upcoming" as const,
    description: "Annual marathon with 5K, 10K, and full marathon categories.",
  },
  {
    id: "6",
    title: "Art Exhibition",
    category: "Art",
    date: "Apr 15, 2024",
    time: "11:00 AM",
    location: "Modern Art Gallery, Kolkata",
    price: "₹499",
    capacity: 300,
    registered: 156,
    status: "upcoming" as const,
    description: "Contemporary art exhibition featuring emerging artists.",
  },
];

const statusConfig = {
  live: { label: "LIVE", className: "bg-success/20 text-success border-success/30" },
  upcoming: { label: "Upcoming", className: "bg-info/20 text-info border-info/30" },
  "sold-out": { label: "Sold Out", className: "bg-destructive/20 text-destructive border-destructive/30" },
};

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-card border-b border-border py-8 sm:py-12">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Discover <span className="gradient-text">Events</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Find and book amazing events happening near you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="border-b border-border sticky top-16 lg:top-20 z-20 bg-background/80 backdrop-blur-xl">
        <div className="container-wide py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search events, venues, or categories..."
                className="pl-10 h-12 bg-muted/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3">
              <Select defaultValue="date">
                <SelectTrigger className="w-[140px] h-12 bg-muted/50">
                  <Calendar className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Any Date</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="price">
                <SelectTrigger className="w-[140px] h-12 bg-muted/50">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price">Any Price</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="lg" className="h-12 gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">More Filters</span>
              </Button>

              <div className="hidden sm:flex items-center gap-1 border border-border rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 mt-4 overflow-x-auto no-scrollbar pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredEvents.length}</span> events
            </p>
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="date">Date: Soonest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popularity">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Events Grid/List */}
          <div className={viewMode === "grid" 
            ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-4"
          }>
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`glass-card-hover overflow-hidden group cursor-pointer ${
                  viewMode === "list" ? "flex" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative bg-muted ${
                  viewMode === "list" ? "w-48 shrink-0" : "aspect-[16/10]"
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                    <Calendar className="w-12 h-12 text-primary/30" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${statusConfig[event.status].className}`}>
                      {event.status === "live" && (
                        <span className="w-1.5 h-1.5 bg-current rounded-full animate-pulse" />
                      )}
                      {statusConfig[event.status].label}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-5 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {event.category}
                    </Badge>
                    <span className="text-lg font-bold text-primary">{event.price}</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  {viewMode === "list" && (
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {event.description}
                    </p>
                  )}
                  
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

                  {/* Capacity */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground">
                        <Users className="w-3.5 h-3.5 inline mr-1" />
                        {event.registered} / {event.capacity}
                      </span>
                      <span className="font-medium">
                        {Math.round((event.registered / event.capacity) * 100)}% filled
                      </span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      />
                    </div>
                  </div>

                  {viewMode === "list" && (
                    <div className="mt-4">
                      <Button variant="hero" size="sm">
                        Book Now
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Events
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
