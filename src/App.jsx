import { LogContextProvider } from "./components/LogContextProvider";
import Outlet from "./components/Outlet";

function App() {
  return (
    <>
      <LogContextProvider>
        <Outlet />
      </LogContextProvider>
    </>
  );
}

export default App;
