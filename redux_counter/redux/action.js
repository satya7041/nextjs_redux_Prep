//here defining action types as constants and creating action creators that return action object

export const INCREMENT = 'INCREMENT'; //here 'INCREMENT' is string
export const DECREMENT = 'DECREMENT'; //here 'DECREMENT' is string

export const increment = () => ({
    type: INCREMENT, //this action will trigger the increment
});
export const decrement = () => ({
    type: DECREMENT, //this action will trigger the increment
});