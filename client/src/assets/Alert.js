import React, { useEffect } from 'react'

function Alert({alert,alerttToggle, setAlerttToggle}) {

    useEffect(()=>{
        const timer = setTimeout(() => {
            setAlerttToggle(false);
        }, 1000);
        return () => clearTimeout(timer);
    },[alerttToggle])

  return (
    <div className={`${alerttToggle ? "relative" : "hidden" } w-full z-50`}>
        <div className='absolute w-full'>
            <div className='flex w-full justify-center'>
                <p className='text-base -mt-2 text-gray-700 flex self-center rounded-full shadow-lg border-[2px] py-2 px-5 bg-white'>{alert}</p>
            </div>
        </div>
    </div>
  )
}

export default Alert
