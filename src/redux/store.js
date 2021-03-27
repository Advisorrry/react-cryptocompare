import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

const middleware = getDefaultMiddleware()

export const store = configureStore({
    reducer: {},
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
})
