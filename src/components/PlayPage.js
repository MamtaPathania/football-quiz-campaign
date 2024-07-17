import React from 'react';

function PlayPage() {
  return (
    <div className='flex justify-center items-center lg:h-screen '>
      <div className='border-4 border-black lg:m-4 m-9 sm:m-8 w-full sm:w-3/4 md:w-1/2 lg:w-[700px] p-4 sm:p-6 mx-4 sm:mx-8 text-center'>
        <h1 className='text-3xl font-bold mb-4'>
          How To Play
        </h1>
        <p className='font-bold text-md sm:text-base text-justify'>
        1.	Subscribe by sending an SMS with "FQD" for daily @N100  or "FQW" for weekly @N200  to 20782.<br/>
2.	Get 10 points automatically upon subscription and renewal every day.<br/>
3.	Play multiple times with an on-demand subscription of N50 per game.<br/>
4.	Ensure entries are submitted before 6 pm daily to qualify for the draw.<br/>
5.	To unsubscribe send stop FQD or Stop FQW<br/>


        </p>
      </div>
    </div>
  );
}

export default PlayPage;
