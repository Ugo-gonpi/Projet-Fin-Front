import { configureStore } from '@reduxjs/toolkit'

import themeSlice from './features/theme/themeSlice'

import loginSlice from './features/login/loginSlice'

export const store = configureStore ({
  reducer: {
    themes: themeSlice,
    login: loginSlice,
  }
})
