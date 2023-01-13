import { Routes, Route, BrowserRouter } from "react-router-dom";
import {  HomePage } from "../../Pages/Home";
import { ScraperPage } from "../../Pages/Scraper";

const ProjectRoutes = () => {
   return(
    <BrowserRouter>
           <Routes>
                <Route element = { <HomePage /> }  path="/" />
                <Route element = { <ScraperPage/> }  path={"/scraper"} />
            </Routes>
    </BrowserRouter>
       
   )
}

export default ProjectRoutes;
