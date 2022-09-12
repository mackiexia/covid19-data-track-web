import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table(props) {
  return (
    <div className="table">
      {props.countries.map(({ country, cases }) => (
        //tr>td*2
        <tr>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
