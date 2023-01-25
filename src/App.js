import { useState } from 'react'
import './App.css'
import TodoItems from './TodoItems';


const App = () => {

  const [data, setData] = useState(" ");
  const [items, setItems] = useState([]);

  const listOfItems = () =>{
    setItems((some) => [...some, data])
    return setData("");
  }
 
 const handlerFunc = (e) => {
    setData(e.target.value)
  }

   const deleteFunc = (id) => {
     console.log("deleter")
     setItems((some) => {
       return some.filter((ar, index) => {
         return index !== id;
       })
     })
     
  }
  return (
    <div className='main-container'>
      
      <div className='sub-container'>
      <h1>Toddoo list</h1>
      <input type="text" onChange={handlerFunc} value={ data} />
        <button onClick={listOfItems}>Add</button>
        
          <ul>
            {items.map( each => 
              (<TodoItems key={each.id } item ={each} onSelect={deleteFunc} />
            ))}
           
        
          </ul>
          
        </div>
        
    </div>

  )
}


export default App