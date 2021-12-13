import React from "react";
import Todolist from "./component/Todolist";
import Header from "./component/Header";
import "./scss/App.scss";
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <section className="todolist-main">
        <Todolist />
      </section>
    </div>
  );
}

export default App;
