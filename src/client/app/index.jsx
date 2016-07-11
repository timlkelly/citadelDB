import React from 'react';
import {render} from 'react-dom';
// import MyTable from './table.jsx';

const {Table, Column, Cell} = require('fixed-data-table');

class MyTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myTableData: [
        {name: 'Rylan'},
        {name: 'Amelia'},
        {name: 'Estevan'},
        {name: 'Florence'},
        {name: 'Tressa'},
      ],
    };
  }

  render() {
    return (
      <Table
        rowsCount={100}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
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