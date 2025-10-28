import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// Lazy-load pages for performance
const Index = lazy(() => import("../src/pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Work = lazy(() => import("./pages/Work"));
const Clients = lazy(() => import("./pages/Clients"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="p-8 text-center text-gray-400">Loading...</div>}>
          <Routes>
            <Route path="/immortal-cinematic-studio/" element={<Index />} />
            <Route path="/immortal-cinematic-studio/about" element={<About />} />
            <Route path="/immortal-cinematic-studio/services" element={<Services />} />
            <Route path="/immortal-cinematic-studio/work" element={<Work />} />
            <Route path="/immortal-cinematic-studio/clients" element={<Clients />} />
            <Route path="/immortal-cinematic-studio/contact" element={<Contact />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<Index />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
