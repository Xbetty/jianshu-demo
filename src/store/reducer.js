import { combineReducers } from 'redux-immutable';
// ES6语法 为防止重名，给reducer起别名headerReducer
import { reducer as headerReducer } from '../common/header/store';

// 生成immutable对象
const reducer = combineReducers({
    header: headerReducer
});

export default reducer;