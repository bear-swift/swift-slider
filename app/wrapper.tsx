"use client";

//adding redux
import { Provider } from "react-redux";
import store from "../store";
import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Wrapper;
