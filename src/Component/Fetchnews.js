import React, { useState } from 'react'
import axios from 'axios'

function Fetchnews() {

    const[news,setNews]=useState([]);

    const Fetch=()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=e13cf514699d4043b3f7ccc62dcdb0e2')
        .then((response)=>{
            // console.log(response)
            setNews(response.data.articles)
        });
    }    
  return (
    <>
    <div className='container my-3'>
        <div className='row'>
          <div className='col-4'>
           <button className='btn btn-primary' onClick={Fetch}>Fetchnews</button>
         </div>
        </div>
    </div>
    <div className='container'>
     <div className='row'>
       {news.map((values)=>{
           return(
            <div className='col-4'>
            <div className="card" style={{width: '18rem'}}>
             <img src={values.urlToImage} className="card-img-top" alt="..."/>
             <div className="card-body">
             <h5 className="card-title">{values.title}</h5>
             <p className="card-text">{values.description}</p>
             <a href="#" className="btn btn-primary">Go somewhere</a>
           </div>
        </div>
      </div>
           )
       })

       }
    
     </div>
    </div>
    </>
    )
}

export default Fetchnews