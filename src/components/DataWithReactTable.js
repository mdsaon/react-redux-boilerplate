import React from "react";
import data from "../data/MockData.json";
import ReactTable from "react-table";
import 'react-table/react-table.css'

const DataWithReactTable = () => {
  console.log(data.userinfo)
  const columns = [
    {
      Header: "Name",
      accessor: "name"
    },
    {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Country",
        accessor: "country"
      },
  ];
  return (
    <div>
      <h1>React Table Example</h1>
      <ReactTable  data={data.userinfo} columns={columns}/>
    </div>
  );
};
export default DataWithReactTable;
