import React, { useState  } from 'react'

function App() {
   
  const [data, setData] = useState({
    username: " ",
    password: " "
  });
  const { password, username } = data
  
  const  inputHandler = (e) => {
   setData( e.target.name)
  } 

  const inputHannd = (e) => {
    setData(  e.target.value)
    
  }

    const  submitHandler = (e) => {
    e.preventDefault()
    console.log(data)
  }
  
  return (
    <diV>
      <center>
        <h1>dax</h1>
      <form onSubmit={submitHandler}>
        <input type="text" value={username} name="username" onChange={inputHandler} />
        <br />
        <input type="password" value={password} name ="password" onChange={inputHannd}/><br />
        <input type="submit" name ="sumit"/>
      </form>
    </center>
    </diV>
   )
  }
export default App 
        
        
      
    
  
  




