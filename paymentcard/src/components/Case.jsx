import React from 'react'
import style1 from "./style.module.css"


const Case = ({type}) => {
  return (
    <div>
      <h1 className={style1.case}>{type}</h1>
    </div>
  )
}

export default Case
