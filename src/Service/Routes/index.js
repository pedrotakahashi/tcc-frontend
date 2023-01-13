import { Routes, Route, BrowserRouter } from "react-router-dom";
import {  HomePage } from "../../Pages/Home";
import { ScraperPage } from "../../Pages/Scraper";

const ProjectRoutes = () => {
   return(
    <BrowserRouter>
           <Routes>
                <Route component = { <HomePage /> }  path="/" />
                <Route component = { <ScraperPage/> }  path="/scraper" />
            </Routes>
    </BrowserRouter>
       
   )
}

export default ProjectRoutes;
