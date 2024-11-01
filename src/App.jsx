import React, { useEffect } from 'react'
import Card from './components/Card'

const App = () => {
  
  const images = [
    {
      title:'Data Structures',
      img:'/images/1.png',
    },    
    {
      title:'Machine Learning',
      img:'/images/2.png',
    },    
    {
      title:'Web Development',
      img:'/images/3.png',
    },    
    {
      title:'Cybersecurity',
      img:'/images/4.png',
    },    
    {
      title:'Artificial Intelligence',
      img:'/images/5.png',
    },    
    {
      title:'Machine Learning',
      img:'/images/6.png',
    },    
  ]

  return (
    <div className='w-full text-white dark:bg-slate-800 py-[15vh]  dark:bg-slate-800 flex  flex-col items-center justify-center gap-5 '>
      {
        images.map((image, index) => (
          <Card key={index} image={image.img} title={image.title}    />
        ))
      }
    </div>
  )
}

export default App