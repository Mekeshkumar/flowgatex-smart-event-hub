import { motion } from "framer-motion";
import { HelpCircle, Book, MessageSquare, Phone, Mail, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const helpTopics = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Learn the basics of using FlowGateX",
    articles: ["Creating your first event", "Setting up ticketing", "IoT device setup"],
  },
  {
    icon: MessageSquare,
    title: "Bookings & Tickets",
    description: "Everything about booking management",
    articles: ["How to book tickets", "Cancel/refund policy", "Transfer tickets"],
  },
  {
    icon: Phone,
    title: "Payments",
    description: "Payment methods and billing",
    articles: ["Accepted payment methods", "Refund timeline", "Invoice download"],
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-card/50">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-display text-4xl font-bold mb-4">How can we help?</h1>
            <p className="text-muted-foreground mb-8">
              Search our knowledge base or browse topics below
            </p>
            <div className="max-w-md mx-auto">
              <Input
                placeholder="Search for help..."
                className="h-12 text-center"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-6">
            {helpTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card-hover h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <topic.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{topic.description}</p>
                    <ul className="space-y-2">
                      {topic.articles.map((article) => (
                        <li key={article}>
                          <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                            {article}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-spacing bg-card/50">
        <div className="container-narrow text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-muted-foreground mb-6">Our support team is here to assist you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              support@flowgatex.com
            </Button>
            <Button variant="hero" size="lg" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              Live Chat
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
