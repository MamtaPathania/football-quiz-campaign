import React from 'react'
import img from '../assets/img5.png'
function HomePage() {
  return (
    <div>
<div className='flex flex-col justify-center gap-32 items-center lg:flex-row lg:items-center lg:text-left lg:h-[600px] h-[550px]'>
  <img src={img} alt="football quiz" className='lg:h-[600px] lg:w-[700px] h-[400px] w-[600px]' />
  <div className="text-center lg:text-left">
    
    <h1 className='lg:text-7xl text-5xl font-bold font-sans '>To Win Big</h1>
    <h1 className='lg:text-7xl text-5xl font-bold text-red-700'>On Football Quiz</h1>
  </div>
</div>

      <div className='bg-black text-white'>
        <h2 className='flex justify-center lg:text-4xl text-2xl font-mono items-center font-bold'> About Football Quiz</h2>
        <div class="w-[250px] lg:w-[700px] md:w-[300px] mx-auto p-6">
  <p class="text-left lg:text-3xl text-sm">
  Join Football Quiz, the ultimate game for football enthusiasts! Test your football knowledge, 
  earn points, and stand a chance to win incredible prizes, including a trip to watch the EPL finals, cash prizes, 
  and airtime. With a subscription price of N100 per day and N200 per week, enjoy multiple plays for an added fee of 
  N50 per game. All MTN Nigeria customers with valid mobile numbers are eligible to participate. Subscribers receive 10 
  points daily, automatically qualifying them for the daily draw. Unleash your passion for football and embark on an
   exciting journey with Football Quiz today!


</p>
</div>

      </div>
    </div>
  )
}

export default HomePage
