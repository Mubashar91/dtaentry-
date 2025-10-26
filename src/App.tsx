import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DesignTokensProvider } from "@/components/DesignTokensProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogDetail from "./pages/BlogDetail";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import { BookMeeting } from "./pages/BookMeeting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="lux-va-theme">
      <DesignTokensProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="app-shell">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/book-meeting" element={<BookMeeting />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/case-study/:id" element={<CaseStudyDetail />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </DesignTokensProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
