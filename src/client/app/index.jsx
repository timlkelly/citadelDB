import React from 'react';
import {render} from 'react-dom';
// import MyTable from './table.jsx';

const {Table, Column, Cell} = require('fixed-data-table');

class MyTextCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    );
  }
}

class MyLinkCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    const link = data[rowIndex][field];
    return (
      <Cell {...props}>
        <a href={link}>{link}</a>
      </Cell>
    );
  }
}


class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {name: 'Rylan', email: 'fdasf@fdas.com'},
        {name: 'Amelia', email: 'sdafjjsdafjkl'},
        {name: 'Estevan', email: 'jfdk'},
        {name: 'Florence', email: 'fjsajklfsklj;asfkljsdf;jkj'},
        {name: 'Tressa', email: 'fdasjhklcc3233'}
      ],
      citadels: [
        {system: "YHN-3K", region: "Catch", citadel_type: "Astrahus", corporation: "Grass Fed Cannibals", alliance: "Legio De Mortem", killed_at: null},
        {system: "7RM-N0", region: "Pure Blind", citadel_type: "Astrahus", corporation: "Pandemic Horde Inc.", alliance: "Pandemic Horde", killed_at: null}
      ]
    };
  }

  render() {
    return (
      <Table
        rowsCount={this.state.myTableData.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>Name</Cell>}
          cell={
            <MyTextCell
              data={this.state.myTableData}
              field="name"
            />
          }   
          width={200}
        />
        <Column
          header={<Cell>Email</Cell>}
          cell={
            <MyLinkCell
              data={this.state.myTableData}
              field="email"
            />
          }
          width={200}
        />
      </Table>
    );
  }
}
class App extends React.Component {
  render () {
    return (
      <div>
        <p> hiii there </p>
        <MyTable />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));