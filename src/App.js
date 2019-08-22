import React from 'react';
import Header from './common/header';
import {GlobalStyled} from './style';
import {IconGlobalStyled} from './static/iconfont/iconfont';
import './static/iconfont/iconfont';

function App() {
  return (
    <div className="App">
      <GlobalStyled/>
      <IconGlobalStyled/>
      {/* 头部组件 */}
      <Header />
    </div>
  );
}

export default App;
