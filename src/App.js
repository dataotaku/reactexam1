//import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

import MyHeader from "./MyHeader";
//import MyFooter from './MyFooter';

function App() {

  // let name = "장운호"

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 6,
  }

  return (
    <div className="App">
      <MyHeader/>
      <Counter {...counterProps} />
    </div>
  );
};

export default App;
