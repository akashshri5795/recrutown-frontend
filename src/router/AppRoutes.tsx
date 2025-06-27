import { Routes, Route } from "react-router-dom"
import PrivateRoutes from "./PrivateRoutes";
import Home from "../components/Home";
import Login from "../components/Login";
import NotFound from "../components/NotFound";


const AppRoutes = () =>{
    return(
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login />} />
       
        <Route element={<PrivateRoutes />} >
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>

         <Route path="*" element={<NotFound />} />
        </Routes>
       
    );
};

export default AppRoutes;