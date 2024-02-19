import { createContext, useReducer, useState } from "react";

export const LogContext = createContext({
  logs: [],
  addLog: () => {},
  isAnswered: false,
  setIsAnswered: () => {},
});

const logReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LOG":
      return [...state, action.payload];
    default:
      return state;
  }
};

export function LogContextProvider({ children }) {
  const [logs, dispatchLog] = useReducer(logReducer, []);
  const [isAnswered, setIsAnswered] = useState(false);

  const addLog = (log) => {
    dispatchLog({ type: "ADD_LOG", payload: log });
  };

  const contextData = {
    logs,
    addLog,
    isAnswered,
    setIsAnswered,
  };

  return (
    <LogContext.Provider value={contextData}>{children}</LogContext.Provider>
  );
}
