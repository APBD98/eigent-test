import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import { Link } from "react-router-dom";

export default function Home() {
    const [datas, setDatas] = useState([])
  
    useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=45b59b156ecd493b8f481bbb5e4801b3')
    .then((response) => setDatas(response.data.articles))
  },[])

  return (
    <div className='container'>
      <h1 >Top Headlines News</h1>
      <div className='content'>
        {
          datas.map((data:any, index) => (
            <Link to={`/${index}`} key={data.title} style={{cursor:'pointer'}}>    
                <Card 
                title={data.title}
                author={data.author}
                src={data.urlToImage}
                />
            </Link>
          ))
        }
      </div>
    </div>
  )
}
