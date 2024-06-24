import { configureStore } from '@reduxjs/toolkit'
import guessReducer from  './guessSlice.js'

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  
  import storage from 'redux-persist/lib/storage'
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
   const persistedReducer = persistReducer(persistConfig, guessReducer
  )
export const store = configureStore({
    reducer: {guess:persistedReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })


 export let persistor = persistStore(store)


// export const store = configureStore({
//   reducer: {guessReducer},
// })