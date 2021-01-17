import React from "react";
import "./Caret.css"
const Caret = ({asc}) => {
  const cls = asc ? "caret up" : "caret down";
  return <span className={cls}/>
}
export default Caret;