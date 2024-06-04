import About from './About';
import './App.css';
import App2 from './App2';
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
      },{
        "path":"/app2",element:<App2/>
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
