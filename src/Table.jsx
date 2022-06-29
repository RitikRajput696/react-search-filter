import React from "react";

function Table({ data }) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>SurName</th>
        <th>Email</th>
      </tr>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
