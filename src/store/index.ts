import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist/es/constants";
import storage from "redux-persist/lib/storage";
import { default as services } from "services";
import userSlice from "store/slices/userSlice";

const reducers = Object.fromEntries(services.map((service) => [service.reducerPath, service.reducer]));
const middlewares = services.map((service) => service.middleware);
const reducersPath = services.map((service) => service.reducerPath);

type TReducers = { [k in typeof services[number]["reducerPath"]]: typeof services[number]["reducer"] };

const typedReducers = reducers as TReducers;

const rootReducer = combineReducers({
  ...typedReducers,
  user: userSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: [...reducersPath, "history"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([...middlewares]),
});

export const persistor = persistStore(store);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
