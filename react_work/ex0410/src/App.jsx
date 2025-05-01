import { useState } from 'react'
import './App.css'
import { Carousel,Image } from 'antd';
import Mylist from './components/Mylist';

const  contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function App() {


    const onChange = currentSlide => {
      console.log(currentSlide);
    };
  return (
    <>
    <h1 className='text-5xl underline'>HelloWorld</h1>
    <Mylist/>
    <div style={{width:"500px"}}>
        <Carousel className='m-3' arrows infinite={true} afterChange={onChange} autoplay>
      <div className={'w-full h-[400px] bg-gray-200 p-3'}>
        <h3 className={'text-4xl underline flex justify-center items-center'} >1</h3>
        <p>문장을 넣으십쇼. 캐로셀이라니까 오히려 낯설어요.. 그냥 영어표기로만 보는게 익숙..</p>
        <Image src="https://zgrjjnifqoactpuqolao.supabase.co/storage/v1/object/public/images//0d0307fe-0a2a-45fd-bd02-533d9fd205e1.jpg" width={300} alt=""/>
      </div>
      <div className={'w-full h-[400px] bg-gray-200 p-3'}>
        <h3 className={'text-4xl underline flex justify-center items-center'} >2</h3>
        <p>문장을 넣으십쇼. 캐로셀이라니까 오히려 낯설어요.. 그냥 영어표기로만 보는게 익숙..</p>
        <Image src="https://zgrjjnifqoactpuqolao.supabase.co/storage/v1/object/public/images//0d0307fe-0a2a-45fd-bd02-533d9fd205e1.jpg" width={300} alt=""/>
      </div>
      <div className={'w-full h-[400px] bg-gray-200 p-3'}>
        <h3 className={'text-4xl underline flex justify-center items-center'} >3</h3>
        <p>문장을 넣으십쇼. 캐로셀이라니까 오히려 낯설어요.. 그냥 영어표기로만 보는게 익숙..</p>
        <Image src="https://zgrjjnifqoactpuqolao.supabase.co/storage/v1/object/public/images//0d0307fe-0a2a-45fd-bd02-533d9fd205e1.jpg" width={300} alt=""/>
      </div>
      <div className={'w-full h-[400px] bg-gray-200 p-3'}>
        <h3 className={'text-4xl underline flex justify-center items-center'} >4</h3>
        <p>문장을 넣으십쇼. 캐로셀이라니까 오히려 낯설어요.. 그냥 영어표기로만 보는게 익숙..</p>
        <Image src="https://zgrjjnifqoactpuqolao.supabase.co/storage/v1/object/public/images//0d0307fe-0a2a-45fd-bd02-533d9fd205e1.jpg" width={300} alt=""/>
      </div>
    </Carousel>
    </div>
      <h1 className='text-5xl underline'>asdsad</h1>
    </>
  )
}

export default App
