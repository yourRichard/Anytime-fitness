export const exerciseOptions =  {
    method: 'GET',
    params: {limit:'500'},
    headers: {
      'X-RapidAPI-Key': '5523907f03mshae9a29f436a65e3p17b6ddjsnbd4c04cc2df0',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  
  
export const fetchData = async(url,options) => {
    const respone = await fetch(url,options);
    const data = await respone.json()

    return data;
}