import React, {useState} from 'react';
import {useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustator', price:'$60.99'},
    {name: 'PDF Reader', price: '$6.99'}
  ]

  
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>

        <Users>Dynamic User</Users>
        
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        
        <Person name="Rubel Nayok" nayika="Moushumi"></Person>
        <Person name="Joshim" nayika="Sahabana"></Person>
        <Person name="Annoto" nayika="Borsha"></Person>
        <Person name="Zyad" nayika="Pori"></Person>
      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    fload: 'left'
  }
  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )

}
function Person(props){
  const personStyle ={
    border: '2px solid red',
    margin: '10px'
  }
  return (
  <div style={personStyle}>
    <h1>Naiok : {props.name}</h1>
    <h3>Nayika: {props.nayika}</h3>
  </div>
  ) 
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
