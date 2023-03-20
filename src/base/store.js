import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import personalHomepageReducer from "../PersonalHomepage/Portfolio/personalHomepageSlice";
import themeSwitchReducer from "../PersonalHomepage/Header/ThemeSwitch/themeSwitchSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {        
        personalHomepage: personalHomepageReducer,
        themeSwitch: themeSwitchReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
