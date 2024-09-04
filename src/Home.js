import React from "react";

const Home = (props) => {
  return (
    <div>
      <h1>Hello World</h1>
      <table>
        <tr>
          <th>Name</th>
          <td>props.Name</td>
        </tr>
        <tr>
          <th>Age</th>
          <td>props.Age</td>
        </tr>
      </table>
    </div>
  );
};

export default Home;
