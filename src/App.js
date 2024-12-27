import React from 'react';
import './App.css';
import Header from './components/header/Header';
 import Home from './components/home/Home';
 import About from './components/about/About';
 import Skills from './components/skills/Skills';
//  import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/> 
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>

    
    </>
  );
}

export default App;
