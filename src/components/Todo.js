import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "../actions/actions";
export default function Todo() {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.reducer.list);
  const dispatch = useDispatch();
  
  useSelector((state)=>{
    console.log(state.reducer.list);
  })
  return (
    <>
      <div className="main-div">
        <h1 className="heading">
          To-Do <span>App 📝</span>
        </h1>
        <div className="addItems">
          <input
            type="text"
            className="col-sm-6 offset-sm todo_input"
            autoFocus
            placeholder="✍️  Add your task.."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i
            className="material-icons"
            title="Add Task"
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
          >
            &#xe146;
          </i>                   
        </div>
        <div className="showItems">
          {list.map((elem,index) => {
            return (
              <div className="eachTask " key={index}>
                <div className="task-item" key={index}>
                  {elem.data}
                  <div className="task-actions">
                    <i
                      className="material-icons listiconedit"
                      title="Edit Task"

                      onClick={() => dispatch(editTodo(elem.id),)}
                    >
                      &#xe22b;
                    </i>
                    <i
                      className="material-icons listicondelete"
                      title="Delete Task"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    >
                      &#xe872;
                    </i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
