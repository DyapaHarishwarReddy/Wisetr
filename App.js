import React,{Component} from "react";
import "./App.css";
import List from "./List";
import "tachyons";
const App=(props)=>{
  class App extends Component{
    render(){
      return(
        <div className="mainpage">
          <h1>ProfilePage</h1>
          {arrayavatarcard}
        </div>
      )
    }
  }
  const Listarray=[
    {
      id:1,
      name:"Harishwar",
      email:"harishwar72@gmail.com"
    },
    {
      id:2,
      name:"abhishek",
      email:"abhishek@gmail.com"
    }
    {
      id:3,
      name:"sandeep",
      email:"sandeep@gmail.com"
    }
    {
    id:4,
    name:"chandu",
    email:"chandu@gmail.com"
    }
  ]
  const arrayavatarcard= Listarray.map((avatarcard,i)=>{
    return <List id={Listarray[i].name}
                        name={Listarray[i].name}
                        email={Listarray[i].email}/>
  })
}
export default Avatar;
