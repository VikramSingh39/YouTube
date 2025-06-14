import React from 'react'
import Button from './utils/Button';


const ButtonList = () => {

  const list = ["All", "JavaScript", "Music", "Live", "Podcast", "AI", "Cooking", "Valentines", "Seminar", "Recently Uploaded", "Watch Later"];

  return (
    <>
    <div className=' flex justify-center mt-20'>
      <div className='flex  w-[80vw] overflow-x-auto whitespace-nowrap rounded-2xl mx-auto'>
     {list.map((item, index)=>{
      return <Button name={item} key={index}/>})}
     </div>
    </div>

    </>


  )
}

export default ButtonList;