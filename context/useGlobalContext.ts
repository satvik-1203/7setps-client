import { useContext } from "react";
import context from "./context";

const useGlobalContext = () => {
  const globalContext = useContext(context);
  return globalContext;
};

export default useGlobalContext;
