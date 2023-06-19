import React from 'react'
import Header from './component/Header/Header'
import Body from './component/Body/Body'


export default function App() {
  const reduce = (state, action) => {
    switch (action.type) {
      case "add":
        if (state.edit == "edit") {
          localStorage.setItem("listTask1", JSON.stringify({ name: [...state.name, action.valueInput], edit: "edit" }))
          return { name: [...state.name, action.valueInput], edit: "edit" }
        } else {
          const newState = [...state.name]
          newState.splice(state.edit, 1, action.valueInput);
          localStorage.setItem("listTask1", JSON.stringify({ name: [...newState], edit: "edit" }))
          return { name: [...newState], edit: "edit" }
        }

      case "edit":
        return { name: state.name, edit: action.valueEdit }

      case "delete":
        const newList = state.name.filter((a, b) => {
          return b != action.valueDelete
        })
        localStorage.setItem("listTask1", JSON.stringify({ name: [...newList], edit: "edit" }))
        return { name: [...newList], edit: "edit" }
    }
  }
  const [state, dispatch] = React.useReducer(reduce, JSON.parse(localStorage.getItem("listTask1")) || { name: [], edit: "edit" });
  return (
    <div>
      <Header addTask={dispatch} state={state}></Header>
      <Body listTask={state} edit={dispatch}></Body>
    </div>
  )
}
