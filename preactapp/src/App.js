import React, { useState  } from 'react'

function App() {
   
  const [data, setData] = useState({
    username: " ",
    password: " "
  });
  const { password, username } = data
  
  const  inputHandler = (e) => {
   setData({...data,[e.target.name] :[  e.target.name]})
  } 

    
  

    const  submitHandler = (e) => {
    e.preventDefault()
    console.log(data)
  }
  
  return (
    <diV>
      <center>
        <h1>daxsolo</h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={username} name="username" onChange={inputHandler} />
        <br />
        <input type="password" value={password} name ="password" onChange={inputHandler}/><br />
        <input type="submit" name ="sumit"/>
      </form>
    </center>
    </diV>
   )
  }
export default App 
        
        
      
    
  
  




