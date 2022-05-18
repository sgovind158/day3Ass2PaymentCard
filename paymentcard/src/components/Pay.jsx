import React from 'react'
import style1 from "./style.module.css"
const Pay = ({pay}) => {
  return (
    <div>
     <h1 className={style1.pay}>{pay}</h1>
    </div>
  )
}

export default Pay
