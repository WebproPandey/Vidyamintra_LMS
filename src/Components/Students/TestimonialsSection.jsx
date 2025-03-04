import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className='pb-12 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testimonials</h2>
      <p className='text-sm md:text-base text-gray-500  mt-3'>
        Real experiences from students who transformed their careers with us!
      </p>
      <div className='grid grid-cols-3 gap-8 mt-14 px-8 md:px-32'>
        {dummyTestimonial.map((testimonial ,index) =>(
          <div key={index} className='text-sm  text-left border  border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px _4px _15px_0px] overflow-hidden  shadow-black/5'>
            <div className='flex items-center  gap-4 px-5 py-4 bg-gray-500/10'>
               <img className='h-12 w-12 rounded-full' src={testimonial.image}  alt="" />
          
            <div>
              <h1 className='text-lg font-medium text-gray-800 '>{testimonial.name}</h1>
              <p className='test-gray-800/80'>{testimonial.role}</p>
            </div>
            </div>
            <div className='p-5 pb-7 '>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i)=> (
                  <img key={i} className='h-4' src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank } alt="" />
                ) )}
              </div>
              <p className='test-gray-500 mt-5'>{testimonial.feedback}</p>
            </div>
            <a href="" className='text-blue-500  underline px-5'>Read More</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection