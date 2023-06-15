import Image from 'next/image'
import React from 'react'
import FadeAnimator from '../fadeAnimator'

const ServiceCard = ({card}) => {
  return (
    <FadeAnimator>

    <div
    className={`mb-8 w-[275px] h-[500px] rounded border-[#20D5FF] border bg-primary lg:bg-[#00ADEA] text-white group lg:hover:bg-primary transition-colors duration-300  py-8 px-4 relative mx-auto`}
  >
    <span className="absolute h-[165px] w-[134px] bg-card-background bg-cover right-0 top-0 z-10">
    </span>
    <div className="h-full flex flex-col z-20 ">
      <div className="card-top-content">
        <Image width={152} height={152} alt={card.title}  src={card.image} className='ml-10 z-20 relative'/>

        <h4 className="card-title text-bold text-center text-2xl">
          {card.title}
        </h4>
      </div>

      <div className="flex-grow  flex flex-col justify-between text-center lg:text-transparent lg:group-hover:text-white  transition-colors duration-300">
        <p className="card-text mt-2 ">
          {card.text}
        </p>

        <div className="text-center ">
          <a
            href={card.path}
            className="bg-secondary lg:bg-transparent px-3 py-2  rounded border lg:border-transparent lg:group-hover:bg-secondary w-full hover:border-white block hover:shadow-[rgb(0,118,143)_0_0_2px] transition-colors duration-300"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  </div>
        </FadeAnimator>
  )
}

export default ServiceCard