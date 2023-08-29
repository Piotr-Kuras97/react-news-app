import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './sass/main.scss'

import Menu from './components/Menu';
import Top from './components/Top';

import TitleImg from './images/title-img.png'
import { fetchFromAPI } from './utils/FetchFromAPI';

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Top")
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [data, setData] = useState(null)

   useEffect(() => {
       setData(null)
       fetchFromAPI(`category=${selectedCategory}&language=${selectedLanguage}`)
          .then(data => setData(data.results))
  }, [selectedCategory, selectedLanguage])


  return (
    <BrowserRouter>
        <div className="container">
            <h1 className='app__title'><img src={TitleImg} className='app__title--img' alt="logo" /> React News App</h1>
            <Menu 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
            />
            <Routes>
              <Route path="/" element={<Top data={data}/>}/>
              <Route path="/politics" element={<Top data={data}/>}/>
              <Route path="/world" element={<Top data={data}/>}/>
              <Route path="/business" element={<Top data={data}/>}/>
              <Route path="/science" element={<Top data={data}/>}/>
              <Route path="/technology" element={<Top data={data}/>}/>
              <Route path="/environment" element={<Top data={data}/>}/>
              <Route path="/sports" element={<Top data={data}/>}/>
              <Route path="/health" element={<Top data={data}/>}/>
              <Route path="/food" element={<Top data={data}/>}/>
              <Route path="/entertainment" element={<Top data={data}/>}/>
              <Route path="/tourism" element={<Top data={data}/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
