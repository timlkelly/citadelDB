// // const React = require('react');

// var MyTable = React.createClass({
//   render: function() {
//     return (
//       <div className="citadel">
//         <h2 className="citadelSystem">
//           Stuff
//         </h2>
//       </div>
//     );
//   }
// });

// // const React = require('react');
// // const {Table, Column, Cell} = require('fixed-data-table');

// class MyTable extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       myTableData: [
//         {name: 'Rylan'},
//         {name: 'Amelia'},
//         {name: 'Estevan'},
//         {name: 'Florence'},
//         {name: 'Tressa'},
//       ],
//     };
//   }

//   render() {
//     return (
//       <Table
//         rowsCount={this.state.myTableData.length}
//         rowHeight={50}
//         headerHeight={50}
//         width={1000}
//         height={500}>
//         <Column
//           header={<Cell>Name</Cell>}
//           cell={props => (
//             <Cell {...props}>
//               {this.state.myTableData[props.rowIndex].name}
//             </Cell>
//           )}
//           width={200}
//         />
//       </Table>
//     );
//   }
// }

// <Table
//   rowsCount={this.state.myTableData.length}
//   rowHeight={50}
//   headerHeight={50}
//   width={1000}
//   height={500}>
//   <Column
//     header={<Cell>Name</Cell>}
//     cell={props => (
//       <Cell {...props}>
//         {this.state.myTableData[props.rowIndex].name}
//       </Cell>
//     )}
//     width={200}
//   />
// </Table>