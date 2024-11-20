"use client";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/action";

const Counter = () => {
    const dispatch = useDispatch(); //get the dispatch function
    const counter = useSelector((state) => state.counter.counter);

    return( 
        <div className="flex justify-center">
            <h1 className="text-2xl font-bold mr-4">Counter: {counter}</h1>
            <button
             className="border bg-blue-400 rounded-sm p-1 hover:bg-green-400 "
              onClick={() =>dispatch(increment())}>Click for Increment</button>
            <button
             className="border bg-blue-400 rounded-sm p-1 hover:bg-green-400 "
              onClick={() =>dispatch(decrement())}>Click for Increment</button>
            
        </div>
    )
}
export default Counter;