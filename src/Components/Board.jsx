// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// const Board = () => {

//  // const [guessword,setguessword]=useState('')
//   //const rows=[0,0,0,0,0,0]
//   const cols=[0,0,0,0,0]

// //    const [guesses,setGuesses]=useState(['','','','','',''])
// // const [currentGuess,setcurrentguessarray]=useState(['','','','','',''])
//   const guesses=useSelector((state)=>state.guess.guesses)
//   const currentGuess=useSelector((state)=>state.guess.currentguessarray)
//   const word=useSelector((state)=>state.guess.word)

// const getBgCol=(letter,ind)=>{
//   if(letter===word[ind])
//     return 'bg-[#538E4E]'
//   else if(word.includes(letter))
//     return 'bg-[#B49F3B]'
//   else
//   return 'bg-transparent border-2 border-[#3a3a3c]'
// }

// // useEffect(()=>{
// // console.log(currentGuess)
// // },[currentGuess])

//   return (
//     <div className='flex flex-col gap-1'>
//     {guesses.map((i,j)=>(
//  <div className='text-white flex gap-1 items-center justify-center ' key={j}>
//  {
//        cols.map((x,y)=>{
//         let bg=getBgCol(guesses[j][y],y)
//         return(
//          <div className={`flex items-center justify-center md:w-16 md:h-16 w-14 h-14 text-center uppercase text-2xl font-extrabold ${bg}`} key={y}>
//         {currentGuess[j][y]}
//         </div>
//       )})}
// </div>
//     ))}
//    </div>
    
//   )
// }

// export default Board

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Board = () => {
  const cols = [0, 0, 0, 0, 0];
  const guesses = useSelector((state) => state.guess.guesses);
  const currentGuess = useSelector((state) => state.guess.currentguessarray);
  const word = useSelector((state) => state.guess.word);

  const getBgCol = (letter, ind) => {
let colour="bg-transparent border-2 border-[#3a3a3c]"
    if(letter==undefined) return 'bg-transparent border-2 border-[#3a3a3c]'
    else if (letter === word[ind]) colour = 'bg-[#538E4E]';
    else if (word.includes(letter)) { 
      if (colour !== 'bg-[#538E4E]') { 
      colour = 'bg-[#B49F3B]'; 
    }}
    else {
      if (colour !== 'bg-[#538E4E]' && colour !== 'bg-[#B49F3B]') { // Ensure green and yellow are not overwritten
        colour = 'bg-[#3a3a3d] border-2 border-[#3a3a3c]'; // Gray for not in word
      }
    }
    return colour;
  };
  const [flipped, setFlipped] = useState(
    Array(guesses.length).fill(Array(cols.length).fill(false))
  );

  useEffect(() => {
    // Flip animation logic
    const newFlipped = flipped.map((row, rowIndex) =>
      row.map((flip, colIndex) =>
        guesses[rowIndex][colIndex] ? true : flip
      )
    );
    setFlipped(newFlipped);
  }, [guesses]);

  
  return (
    <div className='flex flex-col gap-1'>
      {guesses.map((row, rowIndex) => (
        <div className='text-white flex gap-1 items-center justify-center' key={rowIndex}>
          {cols.map((col, colIndex) => {
            const bg = getBgCol(guesses[rowIndex][colIndex], colIndex);
            const flipClass = flipped[rowIndex][colIndex] ? 'animate-flip' : '';

            return (
              <div
                className={`flex items-center justify-center md:w-16 md:h-16 w-14 h-14 text-center uppercase text-2xl font-extrabold ${bg} ${flipClass}`}
                key={colIndex}
              >
                {currentGuess[rowIndex][colIndex]}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Board;

