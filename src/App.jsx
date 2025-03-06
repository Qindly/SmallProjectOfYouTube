import TodoList from "./componments/TodoList/TodoList";
import RandomColor from "./componments/randomColor/RandomColor";
import StarOfRating from"./componments/StarOfRating/StarOfRating";
function App() {
  return (
    <>
      <TodoList />
      <RandomColor />
      <StarOfRating num={10} />
    </>

  )

}

export default App;
