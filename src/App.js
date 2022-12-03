import classes from './App.module.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import { lazy, Suspense, useState } from 'react';
import Cursor from './components/Cursor/Cursor';
import Research from './pages/Research';
import TalentPartnership from './pages/TalentPartnership';
import ProductEngineering from './pages/ProductEngineering';
import ExpertiseSolutions from './pages/ExpertiseSolutions';
import Blogs from './pages/Blogs';
import Loading from './components/Loading';
import GoToTop from './components/GoToTop';
import Apply from './pages/Apply';

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
        <Cursor />  
        <Suspense fallback={<div style={{display: 'grid', placeitems: 'center', minHeight: '100vh'}}><Loading /></div>}>
          <GoToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/iqverse' element={<Products />} />
            <Route path='/research-and-development' element={<Research />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/talent-partnership' element={<TalentPartnership />} />
            <Route path='/product-engineering' element={<ProductEngineering />} />
            <Route path='/expertise-solutions' element={<ExpertiseSolutions />} />
            <Route path='/apply/:domain' element={<Apply />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
    </div>)
  );
}

export default App;
