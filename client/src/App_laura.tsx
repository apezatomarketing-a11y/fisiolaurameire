import { useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import TopNavigation from "./components/TopNavigation";
import Home from "./pages/Home";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen w-full">
            <TopNavigation />
            <main className="flex-1 w-full">
              <Home />
            </main>
            <Footer />
            <FloatingButtons />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
