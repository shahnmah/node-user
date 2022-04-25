import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  useEffect( ()=>{
    fetch('http://localhost:5000/users/')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  const handelAddUser = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = {name , email}
    
  }
  return (
    <div className="App">
      <h1>My own Data {users.length}</h1>
      <form onSubmit={handelAddUser}>
        <input type="text" name="name" placeholder='Your Name' required/> <br />
        <input type="email" name="email" placeholder='Your Email' required/> <br />
        <input type="submit" value="Add User" />
      </form>
      <ul>
        {
          users.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
