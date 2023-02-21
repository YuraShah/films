import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import AddFilm from "../../pages/AddFilm";
import Action from "../../pages/FilmByGenre/Action";
import Comedy from "../../pages/FilmByGenre/Comedy";
import Drama from "../../pages/FilmByGenre/Drama";
import OtherGenres from "../../pages/FilmByGenre/OtherGenres";
import FilmCharacteristic from "../../pages/FilmCharacteristic";
import FilmDetails from "../../pages/FilmDetails";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import SearchItems from "../../pages/SearchItems";
import ShowFilms from "../../pages/ShowFilms";
import Signin from "../../pages/Signin";
import Signup from "../../pages/Signup";
import Layout from "../Layout";
import Out from "../Out";
import ScrollToTop from "../ScrollToTop";


const MyRouter = () => {
    return <>
        <BrowserRouter>
        <ScrollToTop> 
            <Routes>
                <Route path="" element={<Layout/>}>
                    <Route path="" element={<Home/>}/>
                    <Route path="signin" element={<Signin/>}/>
                    <Route path="signup" element={<Signup/>}/>
                    <Route path="/:getId" element={<FilmCharacteristic/>}/>
                    <Route path="/searchitems" element={<SearchItems/>}/>
                    <Route path="/genre/drama" element={<Drama/>}/>
                    <Route path="/genre/action" element={<Action/>}/>
                    <Route path="/genre/comedy" element={<Comedy/>}/>
                    <Route path="/genre/othergenres" element={<OtherGenres/>}/>
                </Route>
                <Route path="" element={<Out/>}>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="addfilm" element={<AddFilm/>}/>
                    <Route path="showfilms" element={<ShowFilms/>}/>
                    <Route path="showfilms/:uid/:did" element={<FilmDetails/>}/>
                </Route>
            </Routes>
        </ScrollToTop>
        </BrowserRouter>
    </>
}

export default MyRouter;