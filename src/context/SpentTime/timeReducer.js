export const initialState = {
  time: 0,
  isRunning: false || localStorage.getItem("startTime"),
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "stopTime":
      return {
        time: action.payload,
      };
    case "isRunning":
      return {
        isRunning: action.payload,
      };
    default:
      return state;
  }
};
