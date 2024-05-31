import About from './About';
import './App.css';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const routerConfig = createBrowserRouter([
  {
  "path":"/home",element:<Home/>
  },{
    "path":"/about",element:<About/>
    },{
      "path":"/contact",element:<Contact/>
      }
]);


function App() {
  return (
    <>
      <div className="App">
        <RouterProvider router={routerConfig}/>
      </div>
    </>
  );
}
export default App;
