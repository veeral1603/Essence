import { BrowserRouter } from "react-router-dom";
import Approutes from "./routes/Approutes";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 24 * 60 * 60 * 1000 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Approutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
