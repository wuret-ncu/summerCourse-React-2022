import Edit from "./components/Edit";
import List from "./components/List";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [todos, setTodos] = useState([
    {title:"學react", content:"看官方文檔", id:nanoid()},
    {title:"學js", content:"看Fetch", id:nanoid()},
    {title:"開會", content:"明天跟老師開會", id:nanoid()},
  ])

  return (
    <div className="App">
      <h1> Todo List</h1>
      <Edit addData={setTodos}/>
      <List data={todos} deleteData={setTodos}/>
    </div>
  );
}

export default App;
