import React from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {

  return (
    <div className="App">
      <Welcome />
      <About />     
      <Experience />
      <Skills /> 
    </div>
  );
}

export default App;
