import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "./components/layout/PublicLayout";
import { DashboardLayout } from "./components/layout/DashboardLayout";

// Pages
import Index from "./pages/Index";
import EventsPage from "./pages/Events";
import AboutPage from "./pages/About";
import HelpPage from "./pages/Help";
import ContactPage from "./pages/Contact";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import ForgotPasswordPage from "./pages/auth/ForgotPassword";
import UserDashboard from "./pages/dashboard/user/UserDashboard";
import OrganizerDashboard from "./pages/dashboard/organizer/OrganizerDashboard";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="dark">
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>

            {/* Auth Routes (no layout) */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* User Dashboard */}
            <Route path="/dashboard/user" element={<DashboardLayout role="user" />}>
              <Route index element={<UserDashboard />} />
            </Route>

            {/* Organizer Dashboard */}
            <Route path="/dashboard/organizer" element={<DashboardLayout role="organizer" />}>
              <Route index element={<OrganizerDashboard />} />
            </Route>

            {/* Admin Dashboard */}
            <Route path="/dashboard/admin" element={<DashboardLayout role="admin" />}>
              <Route index element={<AdminDashboard />} />
            </Route>

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
