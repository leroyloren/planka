import { takeLatest } from 'redux-saga/effects';

import { logoutService } from '../services';
import EntryActionTypes from '../../../constants/EntryActionTypes';

export default function* loginWatchers() {
  yield takeLatest(EntryActionTypes.LOGOUT, () => logoutService());
}
