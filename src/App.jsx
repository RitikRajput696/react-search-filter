import { useState } from "react";
import "./App.css";
import Table from "./Table";
import { Users } from "./users";

// Simple Search

// function App() {
//   const [query, setQuery] = useState("");

//   const search = (data) => {
//     return data.filter((item) => item.first_name.toLowerCase.includes(query));
//   };

//   return (
//

//     <div className="app">
//       <input
//         type="text"
//         placeholder="search..."
//         className="search"
//         onInput={(e) => setQuery(e.target.value.toLowerCase())}
//       />
//       <ul className="list">
//         {Users.filter((user) =>
//           user.first_name.toLowerCase().includes(query)
//         ).map((user) => (
//           <li key={user.id} className="listItem">
//             {user.first_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// table search
function App() {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {<Table data={search(Users)} />}
    </div>
  );
}

export default App;
