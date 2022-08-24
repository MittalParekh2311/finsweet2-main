import React,{useEffect,useState} from "react";


const Api = () => {
    const [apiData,setApiData]= useState([]);

    const getApi = async () => {
        const response = await fetch(
          'https://944b-43-242-123-35.ngrok.io/api/get-category-list',
          {
            method: 'GET', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const json = await response.json();
      //console.log("get category list",json.data.map((i)=>i.category));
      setApiData(json.data);
      
      
      };
      useEffect(() => {
        getApi();
      },[]);
      useEffect(() => {
        console.log("api data",apiData.map((i)=>i));
      },[apiData])
    return(
        <>
        <h2>Api Call</h2>
        <h1>Category Title</h1>

            {apiData && apiData.map((item)=>{
                return(
                    <>
                <p>{item.category}</p>
                
                </>
                )
            })}
        </>
    )

}
export default Api;