import React from 'react';
import {GlobalStyled} from './style';

import Header from './common/header';


function App() {
  return (
    <div className="App">
      {/* 样式文件 */}
      <GlobalStyled/>
      {/* 头部组件 */}
      <Header />
    </div>
  );
}

export default App;
