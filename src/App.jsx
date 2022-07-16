import { useState } from "react";
import './App.css';

function App() {

  const [Text, setText] = useState('');

  const [Todos, setTodos] = useState([]);

  var [numberOfItems, setNumberOfItems] = useState(0);

  var [numberOfCompleted, setNumberOfCompleted] = useState(0);
  
  var [Id, setId] = useState(0);


  function handleSubmit(e) {
    e.preventDefault();

    if(text){
      e.target.reset();
      add();
    }
  }

  function add(){
    setId((id += 1));

    setTodos(prevState) => {
      return [{title:Text, Id:Id++, completed: false,
      },
    ];
    }
  }
}

setNumberOfItems((prevState) => {
  return prevState + 1;
}
);

  setText("");


  function handlechange(e) {
    setText(e.target.value);

  }

  function handleClick(todo) {
    todo.completed = !todo.completed;
    todo.completed ? setNumberOfCompleted(prevState) => {
      return prevState + 1;
    }}
    : setNumberOfCompleted{(prevState) => {
      return prevstate - 1;
    }};
    
    function deleteItem(todo) {
      setTodos(Todos.filter((t) => t !== todo));

      if (Todos.length <= numberOfItems) {
        setNumberOfItems((prevState) => {
          return prevState - 1;
        });
      }
      if (Todos.length <= numberOfCompleted) {
        setNumberOfCompleted((prevState) => {
          return prevState - 1;
        });
      }
    }


  return (
    <div className='container'>
      <h1>
        Add a <b>To-do</b> Item
      </h1>

      <form onSubmit={handleSubmit}>
        <input type="text" 
        autoFocus
        onChange={handlechange}
        placeholder="add a to-do"
        />
        <button type="submit">Add</button>
      </form>

    <div className="list-container">
      <header>
        <h2>List</h2>
        <span>{{numberOfItems}} Items added</span>
        <span>{{numberOfCompleted}} completed</span>
      </header>

      <div className="lsit">
        {numberOfItems > 0 ? null : (
          <h5>Added items will be displayed here</h5>
        )}

        {Todos.map{(todo) => (
          <div className="item" key={todo.id}>
            <h3 className={`uncheck ${todo.completed && "check"}`}>
            - {todo.title}{""}</h3>

        <div className="control">
          <input type="checkbox" onChange={() => {
            handleCheck{todo};
          }}
          />

          <div className="delete"
          onClick={() => {
            deleteItem(todo);
          }}></div>
        )}
      </div>
    </div>
    </div>
  )
}


export default App;