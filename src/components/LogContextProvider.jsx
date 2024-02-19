import { createContext, useReducer } from "react";

export const LogContext = createContext({
  logs: [],
  addLog: () => {},
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

  console.log(logs);

  const addLog = (log) => {
    dispatchLog({ type: "ADD_LOG", payload: log });
  };

  const contextData = {
    logs,
    addLog,
  };

  return (
    <LogContext.Provider value={contextData}>{children}</LogContext.Provider>
  );
}
