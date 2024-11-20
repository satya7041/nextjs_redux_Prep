"use client"
import Counter from '../components/Counter'
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from '../redux/store'; // Import your Redux store
export default function Home() {
  return (
    <Provider store={store}>
      <div className='bg-gray-400 h-screen'>

     <h1> Welcome to Redux Counter App</h1>
    <Counter/>
      </div>
         
    
        </Provider>
  );
}

