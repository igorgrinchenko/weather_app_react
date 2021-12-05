const initialState = {
  temperature: "",
};

const setTemperature = (state, action) => ({
  ...state,
  temperature: action.payload.temperature,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TEMPERATURE":
      return setTemperature(state, action);
  }
};

export default reducer;
