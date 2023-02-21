import AddEditTodoForm from "../todo/AddEditTodoForm";
import TodoList from "./../todo/TodoList";
import react from "react";
const Home = () => {
  const [selectedTodo, setSelectedTodo] = react.useState(null);

  react.useEffect(() => {
    setSelectedTodo(null);
  }, []);
  const updateTodo = (value, selectedTodoId) => {
    setSelectedTodo({ selectedTodo: value, selectedTodoId: selectedTodoId });
  };
  const clearData = (e) => {
    e.preventDefault();
    setSelectedTodo(null);
  };
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Todo APP</h1>
      </div>
      <div className="card ">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12 ">
              <div className="row">
                <div className="col-md-4 ">
                  <AddEditTodoForm todo={selectedTodo} clearData={clearData} />
                </div>
                <div className="col-md-8">
                  <TodoList updateTodo={updateTodo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
