// Import react
import React  from 'react';


// Global styles
import { GlobalStyle } from "./GlobalStyle";


// Router

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


// Import components
import Header from './components/header/Header.index';
import Home from './components/Home';
import NotFound from './components/Notfound';
import Movie from './components/Movie';
import Userprovider from '../src/context';
import Login from './components/Login';



const App : React.FC = () => (
    <Router>
      <Userprovider>
        <Header />
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/:movieId" element={<Movie />} /> 
              <Route path="/*" element={<NotFound />} /> 
          </Routes>
        <GlobalStyle />
      </Userprovider>
    </Router>
);

export default App;
