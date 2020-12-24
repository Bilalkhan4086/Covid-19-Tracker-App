
const url = `https://covid19.mathdro.id/api`
export const allCountries = (async () =>{

    const res = await fetch(`${url}/countries`);
    const data = await res.json();
    return(data)
} )



export const countryData = async (country) =>{
    if(country === undefined){
        country = "/"
    }
    const res = await fetch(`${url}${country}`);
    const data = await res.json();
    return(data)

} 
