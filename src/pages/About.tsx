import { motion } from "framer-motion";
import { Zap, Users, Shield, BarChart3 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-card/50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Revolutionizing <span className="gradient-text">Event Management</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              FlowGateX combines cutting-edge IoT technology with intelligent crowd management to create seamless, unforgettable event experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                We believe every event should be an extraordinary experience. From small workshops to massive festivals, FlowGateX provides the tools organizers need to create safe, efficient, and memorable gatherings.
              </p>
              <p className="text-muted-foreground">
                Our platform leverages IoT sensors, real-time analytics, and smart crowd management to eliminate friction and let attendees focus on what matters – enjoying the event.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Zap, value: "50K+", label: "Events Hosted" },
                  { icon: Users, value: "2M+", label: "Happy Attendees" },
                  { icon: Shield, value: "99.9%", label: "Uptime" },
                  { icon: BarChart3, value: "500+", label: "Organizers" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
