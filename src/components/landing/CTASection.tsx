import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent" />
      
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Transform Your Events?
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Join thousands of organizers using FlowGateX to create unforgettable experiences with smart crowd management.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button variant="hero" size="xl" className="group">
                  Start for Free
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  Contact Sales
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • Free tier available • Setup in minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
