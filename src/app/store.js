import { configureStore } from '@reduxjs/toolkit';
import { userApiSlice } from '../features/apiSlice'; // Импортируйте apiSlice
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    // Добавляем сгенерированный reducer как определенный срез верхнего уровня
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  // Добавление промежуточного программного обеспечения API позволяет кэшировать, делать недействительными, опросить,
  // и другие полезные возможности `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApiSlice.middleware),
});

// необязательно, но необходимо для поведения refetchOnFocus/refetchOnReconnect
// см. документацию `setupListeners` — принимает необязательный обратный вызов в качестве второго аргумента для настройки
setupListeners(store.dispatch)
