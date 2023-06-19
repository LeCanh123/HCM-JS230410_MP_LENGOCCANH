import React from 'react'
import "./Body.scss"

export default function Body({ listTask, edit }) {
const [del,setDel]=React.useState("a");
  return (
    <div>
      <div className='Container1'>
        <table>
<tbody>
          {listTask.name.map((a, b) =>

            <tr key={b}>
              <td>
                <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  onClick={()=>del==b?setDel("a"):setDel(b)}
                />
              </div></td>
              <td>
              {del==b?<del>{a}</del>:<div>{a}</div>}
                
                
                
                </td>
              <td><button type="button" className="btn btn1 btn-primary" onClick={() => edit({ type: "edit", valueEdit: b })}>Edit</button>
                <button type="button" className="btn btn1 btn-primary" onClick={() => edit({ type: "delete", valueDelete: b })}>Delete </button></td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
