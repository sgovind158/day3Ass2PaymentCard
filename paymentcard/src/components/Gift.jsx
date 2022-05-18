import React from 'react'
import style1 from "./style.module.css"
const Gift = ({gift}) => {
  return (
    <div>
      <h1 className={style1.pay}>{gift}</h1>
    </div>
  )
}

export default Gift
