import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getRepos } from "./getRepos";
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccessful } from "./personalHomepageSlice";


function* fetchRepositoriesHandler() {
    try {
        yield delay(2000);
        const repositories = yield call(getRepos);
        yield put(fetchRepositoriesSuccessful(repositories));
    }
    catch (error) {
        yield put(fetchRepositoriesError());
        yield call(alert, "Wystąpił jakiś błąd, spróbuj ponownie lub sprawdź swoje połączenie z internetem")
    }
}

export function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}