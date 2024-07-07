import React from 'react'
import { FaPause } from 'react-icons/fa6'

const Nav = ({open}) => {
  return (
    <div>
    <nav class="pr-3">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-5">
            <div class="flex-grow text-center">
                <span class="self-center text-3xl lg:text-4xl font-bold text-green-400">Wordle <span className='text-yellow-300'>Unlimited</span></span>
            </div>
            <div class="flex items-center space-x-6 rtl:space-x-reverse">
                <button onClick={open}><FaPause color='white' size={30}/></button>
            </div>
        </div>
        <hr/>
    </nav>
</div>
  )
}

export default Nav
