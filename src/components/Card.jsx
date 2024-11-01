import React, { useEffect } from 'react'
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Card = ({image,title}) => {
    useEffect(() =>{
        
        
            gsap.utils.toArray('.card').forEach((items)=>{
                gsap.to(items,{
                    scale:0.8,
                    opacity:0,
                    scrollTrigger:{
                        trigger: items,
                        start:'top 15',
                        end:'bottom 15',
                        // toggleActions:'restart none none none',
                        markers:true,
                        scrub:true,
                        stagger:true, 
                        ease:'power2.inOut'
                    }
                })
            })
    
      },[])
  return (
    <div className='card sticky top-[15vh] text-center   px-[30px] w-[27vw] py-[10vh]     rounded-lg bg-[#383027] flex  gap-5 items-center flex-col '>
    <img src={`${image}`}  alt="" className='w-[150px]' />
    <h1 className='text-5xl font-bold '>
      The <br />{title}
    </h1>
    <p className='text-sm font-thin'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, officia.</p>
 
  </div>
  )
}

export default Card