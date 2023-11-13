import React,{useState}from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Adduser.module.css";
const AddUser =(props)=>{
    const [enterUsername,setEnterUserName] = useState("",)
    const [enterAge,setEnterAge] = useState("")
    const usernameChangeHandler = (event)=>{
        setEnterUserName(event.target.value);
    };
    const AgeChangeHandler = (event) =>{
        setEnterAge(event.target.value)
    };
    const addUserhandler =(event)=>{
        event.preventDefalut();
        console.log(enterUsername , enterAge);
    }
    return(
        <Card className={classes.input}>
         <form onSubmit={addUserhandler}>
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" onChange={usernameChangeHandler}></input>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" onChange={AgeChangeHandler}></input>
            <Button type="submit">Add User</Button>
         </form>
        </Card>
    )
}
export default AddUser;