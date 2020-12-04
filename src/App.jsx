import React, { useState } from 'react';
import Welcome from './components/Welcome';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  const [lang, setLang] = useState('EN')
  
  return (
    <div className="App">
      <Welcome lang={lang} setLang={setLang}/>
      <About lang={lang}/>     
      <Experience lang={lang}/>
      <Skills lang={lang}/> 
    </div>
  );
}

export default App;
