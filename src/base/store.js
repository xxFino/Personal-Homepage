import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import personalHomepageReducer from "../PersonalHomepage/Portfolio/personalHomepageSlice"

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
