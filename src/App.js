import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <External></External>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0)
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1)
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


function External() {
  const [users, setUsers] = useState([])
  // useEffect(() => { }, [])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])


  return (
    <div>
      <h2>External</h2>
      <p>{users.length}</p>
      {
        users.map(user => <SimpleUser name={user.name} email={user.email}></SimpleUser>)
      }
    </div>
  )
}


function SimpleUser(props) {
  return (
    <div style={{ border: "2px solid red", margin: '20px' }}>
      <h3>Name: {props.name}</h3>
      <p>Email : {props.email}</p>
    </div>
  )
}
export default App;
