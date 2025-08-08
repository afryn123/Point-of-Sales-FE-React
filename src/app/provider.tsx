import TanstackProvider from "./queryClient";
import ReactRouterProvider from "./router";

export const AppProvider = () => {
  return (
    <TanstackProvider>
      <ReactRouterProvider />
    </TanstackProvider>
  );
};
