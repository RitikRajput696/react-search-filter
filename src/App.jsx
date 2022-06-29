import { useState } from 'react';
import './App.css';
import {Users} from "./users";

function App() {

  const [query, setQuery] = useState("");

  console.log(query)
  return (
    <div className="app">
      <input type="text" placeholder='search' className='search' onClick={e=> setQuery(e.target.value)}/>
      <ul>
        {Users.map((user)=>(
        <li key={user.id} className="listItem">
          {user.first_name}
        </li>))}
        
      </ul>
    </div>
  );
}

export default App;
74