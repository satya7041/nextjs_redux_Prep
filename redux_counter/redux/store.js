//this store code is used to hold all data of our application,everything our app need to remember is kept.
// here we will configure and export the redux store

// import { createStore} from '@reduxjs/toolkit';
// import countReducer from './reducer';

// //creating redux store with the countReducer
// const store = createStore(countReducer)

// export default store;
// src/redux/store.js
  import { configureStore } from '@reduxjs/toolkit';
  import counterReducer from './reducer'; // Replace with your actual reducer

  const store = configureStore({
    reducer: {
      counter: counterReducer, // or your own reducers
    },
  });

  export default store;
