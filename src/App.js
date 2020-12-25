import React, { useState } from 'react'
import './App.css';
import Crads from './component/Cards';
import Header from './component/Header';
import Options from './component/Option';
import Table from './component/Table';
import {countryData} from './component/Api'


function App(){

const [CountryData, setCountryData] = useState('');

const country = async(data) => {
const res = await countryData(data);
      setCountryData(res);
      console.log("My country data is here and .... ",CountryData);    
 }
 window.addEventListener('load', function () {
  country();
}, false);
  return (
    <div className="App">
    <div className="container">
   <Header/>
<Crads  data={CountryData}/>
<Options country={country}/>
<Table  data1={CountryData}/>
    </div></div>);
    
  
}

export default App;
