import { BrowserRouter } from "react-router-dom";
import Approutes from "./routes/Approutes";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ScrollToTopRouter from "./components/ScrollToTopRouter";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 24 * 60 * 60 * 1000 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          pauseOnHover={false}
        />
        <ScrollToTopRouter />
        <Approutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
