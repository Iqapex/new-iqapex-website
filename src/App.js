import { Suspense, lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import Home from './pages/Home';
//import Cursor from './components/Cursor/Cursor';
import EventDetails from './components/Events/EventDetails';
import GoToTop from './components/GoToTop';
import Loading from './components/Loading';
import About from './pages/About';
import Apply from './pages/Apply';
import Blogs from './pages/Blogs';
import Events from './pages/Events';
import ExpertiseSolutions from './pages/ExpertiseSolutions';
import Investors from './pages/Investors';
import ProductEngineering from './pages/ProductEngineering';
import Research from './pages/Research';
import TalentPartnership from './pages/TalentPartnership';

const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))
const Products = lazy(() => import('./pages/Products'))
const Services = lazy(() => import('./pages/Services'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App() {
  const [loading, setLoading] = useState(true)
  const spinner = document.getElementById('spinner')

  if(spinner){
    setTimeout(() => {
      spinner.style.display = 'none'
      setLoading(false)
    }, 2000);
  }

  return (
    !loading && (<div className={classes.app}>
       {/* <Cursor /> */ }
        <Suspense fallback={<div style={{display: 'grid', placeitems: 'center', minHeight: '100vh'}}><Loading /></div>}>
          <GoToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutUs' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/iqverse' element={<Products />} />
            <Route path='/research-and-development' element={<Research />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/talent-partnership' element={<TalentPartnership />} />
            <Route path='/product-engineering' element={<ProductEngineering />} />
            <Route path='/expertise-solutions' element={<ExpertiseSolutions />} />
            <Route path='/investor' element={<Investors />} />
            <Route path='/event' element={<Events />} />
            <Route path='/events/:id' element={<EventDetails/>}/>
            <Route path='/apply/:domain' element={<Apply />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
    </div>)
  );
}

export default App;
