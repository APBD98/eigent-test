
import { Image, Space, Typography } from 'antd';

type Props = {
    title:string,
    author:string,
    src:string,
}

const { Title } = Typography
const Card = (props:Props) => {
  return (
    <div className='card'>
          <div className='title'>
            <Title level={2}>{props.title}</Title>
            <Title level={5} type='secondary'>{props.author}</Title>
          </div>
          <Space size={12}>
                <Image
                  width={400}
                  src={props.src}
                />
              </Space>
        </div>
  )
}

export default Card