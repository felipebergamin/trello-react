import { combineReducers } from 'redux';

import lists from './modules/lists/reducer';
import tasks from './modules/tasks/reducer';

export default combineReducers({
  lists,
  tasks,
});
