import { useReducer, createContext, useContext } from "react";
import { Reducer, initialState } from "./timeReducer";

export const TimeContext = createContext();

export const useTimeContext = () => useContext(TimeContext);
export const TimeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <TimeContext.Provider value={[state, dispatch]}>
      {children}
    </TimeContext.Provider>
  );
};
