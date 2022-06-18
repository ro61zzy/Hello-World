import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      <EventBind />
      {/*<ClassClick />
      <FunctionClick />
      <Counter />
      <Message />
      <Greet name="Marto" anotherName="Babe">
        <p>This is children props</p>
      </Greet>
      <Greet name="Wangu" />
      <Greet name="Msupuu" />
      <Welcome name="Marto" anotherName="Babe" />
      <Welcome name="Wangu" anotherName="Hellow" />
  <Hello />*/}
    </div>
  );
}

export default App;
