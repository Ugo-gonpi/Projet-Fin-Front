import { configureStore } from '@reduxjs/toolkit'

import { themeSlice } from './features/theme/themeSlice'

export const store = configureStore ({
  reducer: {
    themes: themeSlice,
  }
})
