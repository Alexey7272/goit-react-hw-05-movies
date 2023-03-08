import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { PAGE_NAMES } from "router/paths";

const Layout = lazy(() => import('./Layouts/layouts'))
const HomePage = lazy(() => import('pages/Home/Home'))
const Movies = lazy(() => import('pages/Movies/Movies'))
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'))
const Cast = lazy(() => import('./Cast/Cast'))
const Reviews = lazy(() => import('./Reviews/reviews'))
const ErrorPage = lazy(() => import('pages/Error/Error'))


function App() {
   return (
    <Routes> 
      <Route path={PAGE_NAMES.homepage} element={<Layout/>}>
        <Route path={PAGE_NAMES.homepage} element={ <HomePage/> }> </Route>
        <Route path={PAGE_NAMES.movies} element={ <Movies/> }></Route>
        <Route path={PAGE_NAMES.movieDetails} element={ <MovieDetails/>}>
          <Route path={PAGE_NAMES.cast} element={ <Cast/> }></Route>
          <Route path={PAGE_NAMES.reviews} element= { <Reviews/> }></Route>
        </Route>
        <Route path="*" element={ <ErrorPage/> }> </Route>
      </Route> 
    </Routes>
   );
};


export default App;
