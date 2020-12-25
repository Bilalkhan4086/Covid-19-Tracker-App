import { Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { allCountries} from './Api';

const Options = ({country}) => {
  const [myData, setmyData] = useState('');

  useEffect(()=>{const getData = async() => {
      const data = await allCountries();
      setmyData(data);
  }; getData()},[])

    return (
        <div className="Option">
          <div className="OptionHeading" >Select any COUNTRY you want to check information</div>
          <Select
          native
          defaultValue="/"
          onChange={(e)=>{country(e.target.value)}}
          className="Select"
        >
          <option value={"/"}>Global Data</option>
          {/* {await console.log(myData)} */}
          {!myData ? <option value={''}>Loading...</option> :  myData.countries.map((i,id)=><option key={id} value={`/countries/${i.name}`}>{i.name}</option>)}
        </Select>
        
        </div>
    )
}
export default Options;