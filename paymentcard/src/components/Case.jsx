import React from 'react'
import style1 from "./style.module.css"


const Case = (props) => {
  return (
    <div>
      <h1 className={style1.case}>{props.type}</h1>
    </div>
  )
}

export default Case
