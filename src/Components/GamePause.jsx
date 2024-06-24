import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState } from 'react'

export default function GamePause({ pause,close,gameOver,win,word,reset }) {
    
  return (
    <div className="flex h-full bg-none items-center justify-center">
   
     <Transition appear show={pause}>
        <Dialog as="div" className="relative z-20 focus:outline-none" onClose={close}>
          <div className="fixed inset-0 z-10 overflow-y-auto bg-transparent flex items-center justify-center">
            <div className="flex items-center justify-center p-4 w-3/4 md:w-1/3 rounded-2xl bg-gray-700">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform scale-95"
                enterTo="opacity-100 transform scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform scale-100"
                leaveTo="opacity-0 transform scale-95"
              >
                {gameOver?
                    win?(
                      <DialogPanel className="w-full h-full bg-transparent rounded-3xl p-6 backdrop-blur-2xl flex flex-col items-center justify-center">
                      <DialogTitle as="h3" className="text-3xl font-bold text-white bg-inherit">
                        You Won
                      </DialogTitle>
                      <p className="mt-2 text-lg text-white bg-inherit">
                        New Game?
                      </p>
                      <div className="mt-4 bg-inherit">
                        <Button
                          className="inline-flex items-center gap-2 rounded-md bg-green-400 py-1.5 px-3 text-sm font-semibold text-white  hover:bg-green-500"
                          onClick={()=>{
                            reset()
                            close()
                          }}
                        >
                        New Word
                        </Button>
                      </div>
                    </DialogPanel>
                    ):
                    (<DialogPanel className="w-full h-full bg-transparent rounded-3xl p-6 backdrop-blur-2xl flex flex-col items-center justify-center">
                      <DialogTitle as="h3" className="text-3xl font-bold text-white bg-inherit">
                        You Lost
                      </DialogTitle>
                      <p className="mt-2 text-lg text-white bg-inherit">
                        Play Again?
                      </p>
                      <div className="mt-4 bg-inherit">
                        <Button
                          className="inline-flex items-center gap-2 rounded-md bg-green-400 py-1.5 px-3 text-sm font-semibold text-white  hover:bg-green-500"
                          onClick={()=>{
                            reset()
                            close()
                          }}
                        >
                        New Word
                        </Button>
                      </div>
                    </DialogPanel>)
                  :(
                    <DialogPanel className="w-full h-full bg-transparent rounded-3xl p-6 backdrop-blur-2xl flex flex-col items-center justify-center">
                  <DialogTitle as="h3" className="text-3xl font-bold text-white bg-inherit">
                    Game Paused
                  </DialogTitle>
                  <p className="mt-2 text-lg text-white bg-inherit">
                    Continue Playing?
                  </p>
                  <div className="mt-4 bg-inherit">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-green-400 py-1.5 px-3 text-sm font-semibold text-white  hover:bg-green-500"
                      onClick={close}
                    >
                    Yes
                    </Button>
                  </div>
                </DialogPanel>
                )}
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
   
    </div>
  )
}
