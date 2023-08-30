
import { createBrowserRouter,RouterProvider} from "react-router-dom";

import {Provider} from 'react-redux';
import store from "./utils/store";
import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {

  return (
    <Provider store={store}>
    <div className="App mr-5 ml-5">
      <Header></Header>
      
      <RouterProvider router={router}></RouterProvider>
    
    </div>
    </Provider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
     {
      path:'watch',
      element:<WatchPage/>
     }
    ]
  },
 
  
]);
export default App;
