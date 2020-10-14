
export function getApiData (fetchType){

  return fetch(`https://gateway.marvel.com:443/v1/public/${fetchType}?apikey=bb052b9f0fc4f21fb02ec9a68c698d33`).then((res)=> res.json())

}



   


   
 

