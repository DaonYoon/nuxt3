export const useUtils = () => {
  function sayHello() {
    console.log("hello");
  }
  return {
    sayHello,
  };
};
