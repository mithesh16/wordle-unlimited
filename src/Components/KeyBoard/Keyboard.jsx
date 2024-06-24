import React from 'react'
import Key from './Key'
import { IoBackspaceOutline } from "react-icons/io5";
const Keyboard = ({buttonClick,guesses, currentGuess, word}) => {

  const top_row=['Q','W','E','R','T','Y','U','I','O','P']
  const middle_row=['A','S','D','F','G','H','J','K','L']
  const bottom_row=['Z','X','C','V','B','N','M']

  const getBgCol = (letter) => {
    if (!letter) return 'bg-[#818384] border-2 border-[#3a3a3c]'; // Default color for empty input
  
    let color = 'bg-[#818384] border-2 border-[#3a3a3c]'; // Default color for not in word
  
    guesses.forEach((guess) => {
      guess.split('').forEach((char, index) => {
        if (letter === char) {
          if (letter === word[index]) {
            color = 'bg-[#538E4E]'; // Green for correct position
          } else if (word.includes(letter)) {
            if (color !== 'bg-[#538E4E]') { // Ensure green is not overwritten
              color = 'bg-[#B49F3B]'; // Yellow for present in word but incorrect position
            }
          } else {
            if (color !== 'bg-[#538E4E]' && color !== 'bg-[#B49F3B]') { // Ensure green and yellow are not overwritten
              color = 'bg-[#3a3a3d] border-2 border-[#3a3a3c]'; // Gray for not in word
            }
          }
        }
      });
    });
  
    return color;
  }

  return (
    <div className='mt-5'>
      
      <div className='flex mx-auto mt-0 mb-2 w-full items-center justify-center gap-2'>
      {top_row.map((ele,ind)=>{
          return(
<Key value={ele} key={ind} size={'sm'} buttonClick={buttonClick} element={ele} getbg={getBgCol}/>
          )
        }
        )}
      </div>
      <div className='flex mx-auto mt-0 mb-2 w-full items-center justify-center gap-2'>
      {middle_row.map((ele,ind)=>{
          return(
<Key value={ele} key={ind} size={'sm'} buttonClick={buttonClick} element={ele} getbg={getBgCol}/>
          )
        }
          
        )}
      </div>
      <div className='flex mx-auto mt-0 mb-2 w-full items-center justify-center gap-2'>
        <Key element={'Enter'} value="enter" size={'lg'} buttonClick={buttonClick} getbg={getBgCol}/>
      {bottom_row.map((ele,ind)=>{
          return(
      <Key value={ele} key={ind} size={'sm'} element={ele}  buttonClick={buttonClick} getbg={getBgCol} />
          )
        }
      
        )}
          <Key element={<IoBackspaceOutline size={25} style={{backgroundColor:'transparent'}}  />} value='delete' size={'lg'} buttonClick={buttonClick} getbg={getBgCol}/>
      </div>
    </div>
  )
}

export default Keyboard
