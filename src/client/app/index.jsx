var React = require('react');
import ReactDOM from 'react-dom';
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

var citadels = [
  {id: 1, system: "YHN-3K", region: "Catch", citadel_type: "Astrahus", corporation: "Grass Fed Cannibals", alliance: "Legio De Mortem", killed_at: null},
  {id: 2, system: "7RM-N0", region: "Pure Blind", citadel_type: "Astrahus", corporation: "Pandemic Horde Inc.", alliance: "Pandemic Horde", killed_at: null},
  {id: 3, system: "J165058", region: "D-R00022", citadel_type: "Astrahus", corporation: "Repo Industries", alliance: null, killed_at: null},
  {id: 4, system: "J172350", region: "B-R00006", citadel_type: "Astrahus", corporation: "RGSU", alliance: "Goonswarm Federation", killed_at: 123123124435},
  {id: 5, system: "YHN-3K", region: "Catch", citadel_type: "Astrahus", corporation: "Grass Fed Cannibals", alliance: "Legio De Mortem", killed_at: null},
  {id: 6, system: "7RM-N0", region: "Pure Blind", citadel_type: "Astrahus", corporation: "Pandemic Horde Inc.", alliance: "Pandemic Horde", killed_at: null},
  {id: 7, system: "J165058", region: "D-R00022", citadel_type: "Astrahus", corporation: "Repo Industries", alliance: null, killed_at: null},
  {id: 8, system: "J172350", region: "B-R00006", citadel_type: "Astrahus", corporation: "RGSU", alliance: "Goonswarm Federation", killed_at: 123123124435},
  {id: 9, system: "YHN-3K", region: "Catch", citadel_type: "Astrahus", corporation: "Grass Fed Cannibals", alliance: "Legio De Mortem", killed_at: null},
  {id: 10, system: "7RM-N0", region: "Pure Blind", citadel_type: "Astrahus", corporation: "Pandemic Horde Inc.", alliance: "Pandemic Horde", killed_at: null},
  {id: 11, system: "J165058", region: "D-R00022", citadel_type: "Astrahus", corporation: "Repo Industries", alliance: null, killed_at: null},
  {id: 12, system: "J172350", region: "B-R00006", citadel_type: "Astrahus", corporation: "RGSU", alliance: "Goonswarm Federation", killed_at: 123123124435},
  {id: 13, system: "YHN-3K", region: "Catch", citadel_type: "Astrahus", corporation: "Grass Fed Cannibals", alliance: "Legio De Mortem", killed_at: null},
  {id: 14, system: "7RM-N0", region: "Pure Blind", citadel_type: "Astrahus", corporation: "Pandemic Horde Inc.", alliance: "Pandemic Horde", killed_at: null},
  {id: 15, system: "J165058", region: "D-R00022", citadel_type: "Astrahus", corporation: "Repo Industries", alliance: null, killed_at: null},
  {id: 16, system: "J172350", region: "B-R00006", citadel_type: "Astrahus", corporation: "RGSU", alliance: "Goonswarm Federation", killed_at: 123123124435}
];

ReactDOM.render(
  <BootstrapTable data={citadels} striped={true} hover={true} pagination={true} search={true}>
      <TableHeaderColumn isKey={true} dataField="id">Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="system">System</TableHeaderColumn>
      <TableHeaderColumn dataField="region">Region</TableHeaderColumn>
      <TableHeaderColumn dataField="citadel">Citadel</TableHeaderColumn>
      <TableHeaderColumn dataField="corporation">Corporation</TableHeaderColumn>
      <TableHeaderColumn dataField="alliance">Alliance</TableHeaderColumn>
      <TableHeaderColumn dataField="killed_at">Destroyed</TableHeaderColumn>
  </BootstrapTable>,
    document.getElementById("app")
);

//////////////////////////////////////////////

// import React from 'react';

// import ReactBsTable from 'react-bootstrap-table'
// import {BoostrapTable, TabelHeaderColumn} from 'react-bootstrap-table';


// var citadels: [
//         {id: 1, system: "YHN-3K", region: "Catch", citadel_type: "Astrahus", corporation: "Grass Fed Cannibals", alliance: "Legio De Mortem", killed_at: null},
//         {id: 2, system: "7RM-N0", region: "Pure Blind", citadel_type: "Astrahus", corporation: "Pandemic Horde Inc.", alliance: "Pandemic Horde", killed_at: null},
//         {id: 3, system: "J165058", region: "D-R00022", citadel_type: "Astrahus", corporation: "Repo Industries", alliance: null, killed_at: null},
//         {id: 4, system: "J172350", region: "B-R00006", citadel_type: "Astrahus", corporation: "RGSU", alliance: "Goonswarm Federation", killed_at: 123123124435}
//       ]


// ReactDOM.render(
//   <BootstrapTable data={citadels} striped={true} hover={true} pagination={true}>
//       <TableHeaderColumn isKey={true} dataField="id">Product ID</TableHeaderColumn>
//       <TableHeaderColumn dataField="system">System</TableHeaderColumn>
//   </BootstrapTable>,
//     document.getElementById("app")
// );

// ReactDOM.render(
//   <BootstrapTable data={citadels} striped={true} hover={true}>
//     <TableHeaderColumn dataField="system">System</TableHeaderColumn>
//     <TableHeaderColumn dataField="region">Region</TableHeaderColumn>
//   </BootstrapTable>,
//   document.getElementById("app")
// );

//////////////////////////////////////////////

// const {Table, Column, Cell} = require('fixed-data-table');

// class SystemCell extends React.Component {
//   render() {
//     const {rowIndex, field, data, ...props} = this.props;
//     return (
//       <Cell {...props}>
//         {data[rowIndex][field]}
//       </Cell>
//     )
//   }
// }
// class RegionCell extends React.Component {
//   render() {
//     const {rowIndex, field, data, ...props} = this.props;
//     return (
//       <Cell {...props}>
//         {data[rowIndex][field]}
//       </Cell>
//     )
//   } 
// }
// class CitadelCell extends React.Component {
//   render() {
//     const {rowIndex, field, data, ...props} = this.props;
//     return (
//       <Cell {...props}>
//         {data[rowIndex][field]}
//       </Cell>
//     )
//   }
// }
// class CorporationCell extends React.Component {
//   render() {
//     const {rowIndex, field, data, ...props} = this.props;
//     return (
//       <Cell {...props}>
//         {data[rowIndex][field]}
//       </Cell>
//     )
//   }
// }
// class AllianceCell extends React.Component {
//   render() {
//     const {rowIndex, field, data, ...props} = this.props;
//     return (
//       <Cell {...props}>
//         {data[rowIndex][field]}
//       </Cell>
//     )
//   }
// }
// class DestroyedCell extends React.Component {
//   render() {
//     const {rowIndex, field, data, ...props} = this.props;
//     return (
//       <Cell {...props}>
//         {data[rowIndex][field]}
//       </Cell>
//     )
//   }
// }


// class CitadelTable extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       citadels: [
//         {system: "YHN-3K", region: "Catch", citadel_type: "Astrahus", corporation: "Grass Fed Cannibals", alliance: "Legio De Mortem", killed_at: null},
//         {system: "7RM-N0", region: "Pure Blind", citadel_type: "Astrahus", corporation: "Pandemic Horde Inc.", alliance: "Pandemic Horde", killed_at: null},
//         {system: "J165058", region: "D-R00022", citadel_type: "Astrahus", corporation: "Repo Industries", alliance: null, killed_at: null},
//         {system: "J172350", region: "B-R00006", citadel_type: "Astrahus", corporation: "RGSU", alliance: "Goonswarm Federation", killed_at: 123123124435}
//       ],
//     };
//   }

//   render() {
//     return (
//       <Table
//         rowsCount={this.state.citadels.length}
//         rowHeight={50}
//         headerHeight={50}
//         width={1000}
//         height={500}>
//         <Column
//           header={<Cell>System</Cell>}
//           cell={
//             <SystemCell
//               data={this.state.citadels}
//               field="system"
//             />          
//           }
//           width={100}
//         />
//         <Column 
//           header={<Cell>Region</Cell>}
//           cell={
//             <RegionCell 
//               data={this.state.citadels}
//               field="region"
//             />
//           }
//           width={150}
//         />
//         <Column 
//           header={<Cell>Citadel Type</Cell>}
//           cell={
//             <CitadelCell 
//               data={this.state.citadels}
//               field="citadel_type"
//             />
//           }
//           width={150}
//         />
//         <Column 
//           header={<Cell>Corporation</Cell>}
//           cell={
//             <CorporationCell 
//               data={this.state.citadels}
//               field="corporation"
//             />
//           }
//           width={150}
//         />
//         <Column 
//           header={<Cell>Alliance</Cell>}
//           cell={
//             <AllianceCell 
//               data={this.state.citadels}
//               field="alliance"
//             />
//           }
//           width={150}
//         />
//         <Column 
//           header={<Cell>Destroyed</Cell>}
//           cell={
//             <DestroyedCell 
//               data={this.state.citadels}
//               field="killed_at"
//             />
//           }
//           width={150}
//         />
//       </Table>
//     );
//   }
// }
// class App extends React.Component {
//   render () {
//     return (
//       <div>
//         <CitadelTable />
//       </div>
//     )
//   }
// }

// render(<App/>, document.getElementById('app'));
