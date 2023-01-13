import { Routes, Route, HashRouter } from "react-router-dom";
import {  HomePage } from "../../Pages/Home";
import { ScraperPage } from "../../Pages/Scraper";


const ProjectRoutes = () => {
   return(
    <HashRouter>
           <Routes>
                <Route element = { <HomePage /> }  path="/" />
                <Route element = { <ScraperPage/> }  path="/scraper" />
            </Routes>
    </HashRouter>
       
   )
}

export default ProjectRoutes;