import React from "react";
import { Link,Router,Route,Routes } from "react-router-dom";
import { HeapSort } from "../HeapSort";
const Header = () => {
  return (
    <div className="bg-pink-400 h-20 flex justify-between  ">
      <div className="border-r-2 border-r-blue-500 p-4 w-1/3 text-xl font-bold">
        Generate new Sort
      </div>
      <div className="w-1/3 border-r-2 border-r-blue-500 p-4 text-xl font-bold">
        change the array size
      </div>
      <div className="w-1/3 border-r-2 border-r-blue-500 p-4  font-bold">
        Select Sort:--
         <h2>Heap sort</h2>
      </div>
    </div>
  );
};

export default Header;
