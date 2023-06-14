import Image from 'next/image'
import React from 'react'

const ServiceCard = ({card}) => {
  return (
    <div
    class="mb-8 w-[275px] h-[485px] rounded border-[#20D5FF] border bg-[#00ADEA] text-white group hover:bg-primary transition-colors duration-300 p-4 relative"
  >
    <span className="absolute h-[165px] w-[134px] bg-card-background bg-cover right-0 top-0 z-10">
    </span>
    <div class="h-full flex flex-col z-20 ">
      <div class="card-top-content">
        <Image width={152} height={152} alt={card.title} class="card-img" src={card.image} className='ml-10 z-20 relative'/>

        <h4 class="card-title text-bold text-center text-2xl">
          {card.title}
        </h4>
      </div>

      <div class="flex-grow  flex flex-col justify-between text-transparent group-hover:text-white  transition-colors duration-300">
        <p class="card-text ">
          {card.text}
        </p>

        <div class="text-center">
          <a
            href={card.path}
            class="bg-transparent px-3 py-2  rounded border border-transparent group-hover:bg-secondary w-full hover:border-white block hover:shadow-[rgb(0,118,143)_0_0_2px] transition-colors duration-300"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ServiceCard