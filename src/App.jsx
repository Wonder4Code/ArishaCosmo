import {createGlobalStyle} from "styled-components";



import {Block1} from "./container/block1";
import {Block2} from "./container/block2";
import {Block3} from "./container/block3";
import {Block4} from "./container/block4";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 48px 8px;
    font-family: "Roboto", sans-serif;
    background: #c9bed4;
  }
  
  hr {
    border-color: gray;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Block1 />
      <hr/>
      <Block2 />
      <hr/>
      <Block3 />
      <hr/>
      <Block4/>
    </div>
  );
}

export default App;
