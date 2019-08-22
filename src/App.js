import React from 'react';
import Header from './common/header';
import {GlobalStyled} from './style';
import {IconGlobalStyled} from './static/iconfont/iconfont';
import './static/iconfont/iconfont';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <GlobalStyled/>
      <IconGlobalStyled/>


      {/* 头部组件 */}
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
