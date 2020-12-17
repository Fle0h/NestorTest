const logMiddleware = (store) => (next) => (action) => {
  console.log('Check MW ', action);
  next(action);
};

export default logMiddleware;
