import { configureStore } from '@reduxjs/toolkit';
import propertiesSlice from './features/cars/propertiesSlice';
export const store = configureStore({
    reducer: {
      cars: propertiesSlice,
   
    },
  });