import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Event Director",
    company: "TechCon India",
    image: "/placeholder.svg",
    content: "FlowGateX transformed how we manage our annual tech conference. The IoT gateways reduced entry times by 60% and the real-time analytics helped us optimize crowd flow beautifully.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Festival Organizer",
    company: "Rhythm Live Events",
    image: "/placeholder.svg",
    content: "Managing 50,000+ attendees seemed impossible until we discovered FlowGateX. The crowd intelligence features are game-changing for large-scale events.",
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Operations Head",
    company: "StartupHub",
    image: "/placeholder.svg",
    content: "The seamless integration with Razorpay and instant QR ticket generation has made our booking process incredibly smooth. Our attendees love the experience!",
    rating: 5,
  },
];

export function TestimonialsSection() {
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
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Loved by <span className="gradient-text">Event Organizers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See what industry leaders say about their experience with FlowGateX.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 relative"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
