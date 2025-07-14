import { Provider } from "react-redux";
import AppRoutes from "./routes/AppRoutes.tsx";
import { store } from "./app/store.ts";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
