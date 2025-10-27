import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ActiveBounties from "./pages/ActiveBounties";
import Submissions from "./pages/Submissions";
import Leaderboard from "./pages/Leaderboard";
import Community from "./pages/Community";
import Settings from "./pages/Settings";
import AdminPanel from "./pages/AdminPanel";
import BountyDetails from "./pages/BountyDetails";
import { DashboardLayout } from "./components/DashboardLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Determine the basename based on environment
const basename = import.meta.env.MODE === 'production' ? '/bug-hunt-pilot' : '';

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/bounties" element={<DashboardLayout><ActiveBounties /></DashboardLayout>} />
          <Route path="/bounty/:id" element={<DashboardLayout><BountyDetails /></DashboardLayout>} />
          <Route path="/submissions" element={<DashboardLayout><Submissions /></DashboardLayout>} />
          <Route path="/leaderboard" element={<DashboardLayout><Leaderboard /></DashboardLayout>} />
          <Route path="/community" element={<DashboardLayout><Community /></DashboardLayout>} />
          <Route path="/admin" element={<DashboardLayout><AdminPanel /></DashboardLayout>} />
          <Route path="/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
