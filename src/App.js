import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import AuthPage from './pages/AuthPage'



function App() {
  return (
<Router>
    <Routes>
      <Route path="/" element={ <Layout/> }>
        <Route index element={ <HomePage/> }/>
        <Route path="movie-details" element={ <MovieDetailsPage/> }/>
        <Route path="search" element={ <SearchPage/> }/>
      </Route>
      <Route path="authentication" element={ <AuthPage />}/>
    </Routes>
</Router>
  );
}

export default App;
