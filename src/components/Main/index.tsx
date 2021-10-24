import { FC } from "react";
import { useCat } from "../../contexts/CategoryContext";


import { IProps } from "./types";
import Newtodo from "../Todo";
import Category from "../Category";
import Active from "../Category/Active";
import Done from "../Category/Done";
import Details from "../Category/Details";



const Main: FC<IProps> = (props) => {
  const { selectedCategory } = useCat();
  return (
    <div className="mainComponent">
      <Newtodo></Newtodo>
      <Category></Category>
      {selectedCategory === "ACTIVE" && <Active />}
      {selectedCategory === "DONE" && <Done />}
      {selectedCategory === "DETAIL" && <Details />}
    </div>
  );
};

export default Main;
