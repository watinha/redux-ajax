import { configureStore } from '@reduxjs/toolkit';
import catReducer from '../features/cat/catSlice';

export default configureStore({
  reducer: {
      'cat': catReducer
  },
});
