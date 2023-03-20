import { all } from "redux-saga/effects";
import { personalHomepageSaga } from "../PersonalHomepage/Portfolio/personalHomepageSaga";

export default function* rootSaga() {
    yield all([
        personalHomepageSaga(),
    ]);
};
