import React from 'react'
import "./Header.scss"
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

export default function Header({addTask,state}) {
    const [input1,setInput1]=React.useState("");
React.useEffect(()=>{
  
    setInput1(state.name[state.edit])   
  
},[state.edit])

  return (
    <div>
        <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Mini Project
            </a>
          </li>
          <li className="nav-item">
          <div className="form-outline">
            <input value={input1} type="text" id="form12" className="form-control" placeholder='New Task' onChange={(e)=>setInput1(e.target.value)}/>
            {/* <label class="form-label" for="form12" id="form12">Example label</label> */}
            </div>
          </li>
          <li className="nav-item">
          <button type="button" className="btn btn-outline-success" data-mdb-ripple-color="dark" onClick={()=>{addTask({type:"add",valueInput:input1});setInput1("")}}>{(state.edit!="edit")?"Save":"Add"}</button>
          </li>
        </ul>
      </div>
     
    </div>
  </nav>
</>

    </div>
  )
}
