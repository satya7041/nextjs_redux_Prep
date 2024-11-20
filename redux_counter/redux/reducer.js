//this reducer is a function that takes current state, actions, and return a new state
import { DECREMENT, INCREMENT } from "./action";

//defining intial state of counter value
const initialState = {
    counter: 10, //starting value is zero(0)
};

//reducer function that modify the state based on the action type
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return{
                ...state, //spread the current state
                counter: state.counter +1, //increment counter by 1
            };
           
        case DECREMENT:
            return{
                ...state, //spread the current state
                counter: state.counter -1, //increment counter by 1
            };
           
    
        default:
            return state; //return current state if not action type matches
    }
};
export default counterReducer;