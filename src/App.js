import './App.scss';
import {Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Recursos from './components/Recursos';
import Contacto from './components/Contacto'
import Works from './components/Works';
import Syllabus from './components/Syllabus';

function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element={<Layout/>}>
        <Route index element = {<Home/>}/>
        <Route path='/syllabus' element = {<Syllabus/>}/>
        <Route path='/recursos' element = {<Recursos/>}/>
        <Route path='/works' element = {<Works/>}/>
        <Route path='/contacto' element = {<Contacto/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default App;
