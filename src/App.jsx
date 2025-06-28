import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Index from "./pages/Index";
import ReportAbuse from "./pages/ReportAbuse";
import AIFeatures from "./pages/AIFeatures";
import Blockchain from "./pages/Blockchain";
import ChatBot from "./pages/ChatBot";
import NotFound from "./pages/NotFound";
import "./index.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>

        {/* ✅ Navbar */}
        <div className="navbar">
        <h1>Empower her</h1>
        <div>
            <Link to="/">Home</Link>
            <Link to="/report">Report</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/resources">Resources</Link>
            <button id="donate">Donate</button>
          </div>
        </div>


        {/* ✅ Page Routing */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/report" element={<ReportAbuse />} />
          <Route path="/ai-features" element={<AIFeatures />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/chat" element={<ChatBot />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* ✅ Footer */}
        <footer className="footer"
          style={{
            backgroundColor: "#e6ffff",
            color: "#0e151b",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "bold"
          }}>
          &copy; 2025 Empower Her. All rights reserved.
        </footer>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;