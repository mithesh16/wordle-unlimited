import React from 'react'

const Key = ({value,size,buttonClick,element,getbg}) => {
    let width= ''

    switch(size){
        case 'lg':
            width='w-[58px] text-[16px]';
            break;
        case 'sm':
            width='w-[48px] text-[20px]';
            break;
    }
  return (
    <button className={`flex items-center justify-center ${getbg(element)} ${width} lg:h-[58px] h-[48px] text-white  font-semi-bold rounded-md`} onClick={()=>buttonClick(value)}>
      {element}
    </button>
  )
}

export default Key
