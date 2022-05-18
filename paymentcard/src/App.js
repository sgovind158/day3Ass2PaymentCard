import React from "react";
import style from "./App.css"
import Date1 from "./components/Date1";
import Case from "./components/Case";
import Gift from "./components/Gift";
import Pay from "./components/Pay";
import Desktop from "./components/Desktop";
import Logo from "./components/Logo";
import style1 from "./components/style.module.css"
import Btn from "./components/Btn";

// Rearrange date value to get the order you want... also replace / with a cooler separator like ⋅
 function App() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
   
  let type = "Case Study"

  let gift = "Apple Gift"

  let pay = "Paymen"

  let desk = "Desktop - mobile"

  let logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswF4fTKssFeRCpkoZaYgdirfnVDdIHoCeVw&usqp=CAU"
  return (
    <div className="App">
      <div className={style1.div1}>
      <Date1 date1 = {date}/>
      <Logo logo = {logo}/>
      </div>
     
       <Case type = {type} />
       <Gift  gift={gift}/>
      <Pay pay = {pay}/>

      <div className={style1.div1}>
      <Desktop desk={desk}/>
      <Btn/>
      </div>
    </div>
  );
}

export default App
