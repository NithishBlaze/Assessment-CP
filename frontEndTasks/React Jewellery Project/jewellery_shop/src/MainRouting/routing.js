import {createBrowserRouter} from "react-router-dom";
import Home from "../Layout/Home";
import MainDashboard from "../Layout/MainDashboard";
import AboutUs from "../Layout/AboutUs";
import Products from "../Layout/Products";
import Contact from "../Layout/Contact";


const routing = createBrowserRouter([

        {path:"",element:<MainDashboard/>,children:[
            {path:"",element:<Home/>},
            {path:"About",element:<AboutUs/>},
            {path:"Products",element:<Products/>},
            {path:"Contact",element:<Contact/>},
            
        ]}

    
]);

export default routing;