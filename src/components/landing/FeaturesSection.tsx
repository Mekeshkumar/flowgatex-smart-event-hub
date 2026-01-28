import { motion } from "framer-motion";
import { 
  Cpu, 
  Shield, 
  BarChart3, 
  Zap, 
  Users, 
  CreditCard,
  Bell,
  QrCode,
  Map
} from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "IoT-Powered Gates",
    description: "Real-time crowd monitoring with ESP32 smart gateways for seamless entry management.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: BarChart3,
    title: "Live Analytics",
    description: "Comprehensive dashboards with real-time metrics, heatmaps, and attendance tracking.",
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Role-based access control, encrypted data, and secure payment processing.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: QrCode,
    title: "Smart Ticketing",
    description: "QR-based digital tickets with offline PWA support and instant validation.",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    icon: Users,
    title: "Crowd Intelligence",
    description: "AI-powered capacity predictions and flow optimization for better experiences.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: CreditCard,
    title: "Seamless Payments",
    description: "Integrated Razorpay with UPI, cards, and wallets. Instant refunds supported.",
    color: "text-info",
    bgColor: "bg-info/10",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Push, email, and SMS alerts for bookings, reminders, and real-time updates.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Map,
    title: "Venue Mapping",
    description: "Interactive venue maps with zone management and capacity visualization.",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with edge computing and real-time Firestore sync.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function FeaturesSection() {
  return (
    <section className="section-spacing bg-card/50">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Host Perfect Events</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From smart IoT gateways to real-time analytics, FlowGateX provides a complete ecosystem for modern event management.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass-card-hover p-6 group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
