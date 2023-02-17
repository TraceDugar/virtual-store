
// Logging the thunk functions.
const logger = (store) => (next) => (action) => {
  next(action);
};

export default logger;
