import react from "react";
import db from "./../../firebase";
const AddEditTodoForm = (props) => {
  var [userInfo, setUserInfo] = react.useState({});
  const handelOnChange = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  react.useEffect(() => {
    if (props.todo === null) setUserInfo({});
    else setUserInfo(props.todo.selectedTodo);
  }, [props.todo]);
  const handelFormSubmit = (e) => {
    e.preventDefault();
    if (props.todo)
      db.child(`todolist/${props.todo.selectedTodoId}`).set(userInfo, (err) =>
        console.log(err)
      );
    else db.child("todolist").push(userInfo, (err) => console.log(err));
  };

  return (
    <div className="card ">
      <div className="card-body">
        <form autoComplete="false">
          <div className="form-row align-items-center">
            <div class="form-group">
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">Name</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="personName"
                  placeholder="Person Name "
                  value={userInfo.personName}
                  onChange={handelOnChange}
                />
              </div>
            </div>
            <div class="form-group">
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">Todo Title</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  name="todoTitle"
                  placeholder="Todo Title"
                  value={userInfo.todoTitle}
                  onChange={handelOnChange}
                />
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Todo Description</label>
              <textarea
                class="form-control"
                name="todoDescription"
                onChange={handelOnChange}
                value={userInfo.todoDescription}
                rows="3"
              ></textarea>
            </div>
            <div class="form-group ">
              <div className="input-group mt-2 mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">Complete before</div>
                </div>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="todoEndTime"
                  min={new Date()}
                  placeholder="Todo Title"
                  value={userInfo.todoEndTime}
                  onChange={handelOnChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <button
                  type="button"
                  class="btn btn-success "
                  onClick={handelFormSubmit}
                >
                  {props.todo ? "Update" : "Save"}
                </button>
              </div>
              {props.todo && (
                <div className="col-md-6">
                  <button
                    type="button"
                    class="btn btn-info "
                    onClick={props.clearData}
                  >
                    Add New
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditTodoForm;
