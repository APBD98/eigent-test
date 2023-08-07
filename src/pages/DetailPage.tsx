import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Typography, Space, Image } from 'antd'

type Detail = {
  title:string,
  author:string,
  source:{
    name:string
  },
  content:string,
  publishedAt:string,
  urlToImage:string

}
const { Title, Paragraph } = Typography

export default function DetailPage() {
    const [detailData, setDetailData] = useState<Detail>()
    const navigate = useNavigate()

    const {id} = useParams()
    useEffect(() => {
        fetchData(id)
    },[])

    const fetchData =async (id:any) => {
        const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=45b59b156ecd493b8f481bbb5e4801b3')
        const data = res.data.articles[id];

        console.log(data)
        setDetailData(data)
        
    }
    
  return (
    <div style={{width:'100%', height:'100vh'}}>
        
        <div className='content-detail'>
          <Button type='link' onClick={() => navigate('/')} style={{marginLeft:'-10px'}}>Back home</Button>
          <Title>{detailData?.title}</Title>
          <Title level={4}>{detailData?.source.name}</Title>
          <Title level={5} type='secondary'>{detailData?.publishedAt.substring(0,10)}</Title>
          <Space size={12}>
            <Image
              width={800}
              height={400}
              src={detailData?.urlToImage}
            />
          </Space>
          <Paragraph>
            <Title level={5}>{detailData?.content}</Title>
            <Title level={5} type='secondary'>Author: {detailData?.author}</Title>
          </Paragraph>
        </div>
        
    </div>
  )
}
