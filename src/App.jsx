import { useState } from "react";
import { LogContextProvider } from "./components/LogContextProvider";
import Outlet from "./components/Outlet";
import StartPage from "./components/StartPage";
import Header from "./components/Header";

function App() {
  const [StartQuiz, setStartQuiz] = useState(false);
  return (
    <>
      <Header />
      {StartQuiz ? (
        <LogContextProvider>
          <Outlet />
        </LogContextProvider>
      ) : (
        <StartPage onStart={() => setStartQuiz(true)} />
      )}
    </>
  );
}

export default App;
