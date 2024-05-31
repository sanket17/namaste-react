const useDebounce = (fn, delay = 500) => {
  let timeOut = null;
  return function (...args) {
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(fn(...args), delay);
  };
};

export default useDebounce;
