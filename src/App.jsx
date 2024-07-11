import { useEffect, useState } from "react"
import Board from "./Components/Board.jsx"
import Keyboard from "./Components/KeyBoard/Keyboard.jsx"
import {valid,invalid} from './assets/wordList.json'
import { FaPause } from "react-icons/fa6";
  import { useDispatch,useSelector } from "react-redux";
  import { addGuess,addCurrentGuess,addCurrentGuessArray, incrementcounter, resetgame,invalidWord} from "./redux/guessSlice.js";
import GameWin from "./Components/GameWin.jsx";
import GamePause from "./Components/GamePause.jsx";
import Nav from "./Components/Nav.jsx";
import { Toaster, toast } from 'sonner'
function App() {

// *** not using useState to persist game data  ***
// const [guesses,setGuesses]=useState()
// const [currentguessarray,setcurrentguessarray]=useState()
// const [currentGuess,setcurrentguess]=useState()
// const [guesscount,setGuessCount]=useState()


let [isOpen, setIsOpen] = useState(false)

let[pause,setpause]=useState(false)
const dispatch=useDispatch()

const guesses=useSelector((state)=>state.guess.guesses)
const currentGuess=useSelector((state)=>state.guess.currentguess)
const currentguessarray=useSelector((state)=>state.guess.currentguessarray)
const guesscount=useSelector((state)=>state.guess.guesscount)
const word=useSelector((state)=>state.guess.word)
const [win,setWin]=useState(guesses[guesscount-1]==word)
const [gameOver,setGameover]=useState(guesses[guesscount-1]==word || (guesscount>=5 && guesses[guesscount-1]!=word))

function open() {
  setpause(true)
  console.log(gameOver,win)
}


const reset=()=>{
  dispatch(resetgame())
  setpause(false)
  if(win==false)
    localStorage.setItem('streak',0)
  setWin(false)
  setGameover(false)
}

const submitGuess=()=>{
  if(!valid.includes(currentGuess.toLowerCase())){
    toast.warning("Word invalid")
    dispatch(invalidWord(guesscount))
  }
  else{
  if(currentGuess==word){
    setWin(true)
    setGameover(true)
    setpause(true)
    toast.success("You win!!")
    let streak=localStorage.getItem('streak');
    localStorage.setItem('streak',Number(streak)+1);
  }

  dispatch(incrementcounter(guesscount+1))
  dispatch(addGuess({ index: guesscount, guess: currentGuess }));
  
  if(guesscount==5 && currentGuess!=word ){
    setWin(false)
    toast.warning("You lose")
    setGameover(true)
    setpause(true)
   
  }
  dispatch(addCurrentGuess(''))
}  
}
const buttonClick=(value)=>{

  if(value=="enter"){
    submitGuess()
  }
  else if(value=="delete"){
    let letter=currentGuess
    letter=letter.substring(0,letter.length-1);
    
    // setcurrentguess(letter)
    // setcurrentguessarray(prev_guesses)

    dispatch(addCurrentGuess(letter))
    dispatch(addCurrentGuessArray({ index: guesscount, guess: letter}))
}
else{
  if(currentGuess.length<5){
  let letter=currentGuess
  letter= letter+value;
  
  // setcurrentguess(letter)
  // setcurrentguessarray(prev_guesses)

  dispatch(addCurrentGuess(letter))
   dispatch(addCurrentGuessArray({ index: guesscount, guess: letter }))
  }
  else{
    toast.warning('Words should be of length 5')
  }
}
  
}

  return (
    <>
    <div className="text-center bg-black w-screen overflow-hidden">
       <Nav open={open}/>
        <div className="md:mt-10 mt-5 ">
        <Board guesses={guesses} word={word} currentGuess={currentguessarray} guesscount={guesscount}/>
        <Keyboard buttonClick={buttonClick} word={word} guesses={guesses} />
 

        <GamePause close={()=>setpause(false)} pause={pause} reset={reset} win={win} gameOver={gameOver} word={word} streak={localStorage.getItem('streak')}/>
        
        </div>
        <footer className='bg-white w-screen'>
    <div className='flex items-center justify-center space-x-2 bg-black'  >
      <h1 className='text-xl text-gray-200'>More Games: </h1>
      <a href='https://tictactoeunlimited.netlify.app/' target='blank' className='text-xl text-green-400 font-bold'> TicTacToe</a>
    </div>
  </footer>
    </div>
    <Toaster position="top-center" richColors/>
      </>
    
  )
}

export default App
