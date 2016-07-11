import React from 'react';
import {render} from 'react-dom';

const {Table, Column, Cell} = require('fixed-data-table');

class SystemCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    )
  }
}
class RegionCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    )
  } 
}
class CitadelCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    )
  }
}
class CorporationCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    )
  }
}
class AllianceCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    )
  }
}
class DestroyedCell extends React.Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        {data[rowIndex][field]}
      </Cell>
    )
  }
}


class CitadelTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      citadels: [
        {system: "YHN-3K", region: "Catch", citadel_type: "Astrahus", corporation: "Grass Fed Cannibals", alliance: "Legio De Mortem", killed_at: null},
        {system: "7RM-N0", region: "Pure Blind", citadel_type: "Astrahus", corporation: "Pandemic Horde Inc.", alliance: "Pandemic Horde", killed_at: null},
        {system: "J165058", region: "D-R00022", citadel_type: "Astrahus", corporation: "Repo Industries", alliance: null, killed_at: null},
        {system: "J172350", region: "B-R00006", citadel_type: "Astrahus", corporation: "RGSU", alliance: "Goonswarm Federation", killed_at: '2016.06.27 00:37:37'}
      ],
    };
  }

  render() {
    return (
      <Table
        rowsCount={this.state.citadels.length}
        rowHeight={50}
        headerHeight={50}
        width={1000}
        height={500}>
        <Column
          header={<Cell>System</Cell>}
          cell={
            <SystemCell
              data={this.state.citadels}
              field="system"
            />          
          }
          width={100}
        />
        <Column 
          header={<Cell>Region</Cell>}
          cell={
            <RegionCell 
              data={this.state.citadels}
              field="region"
            />
          }
          width={150}
        />
        <Column 
          header={<Cell>Citadel Type</Cell>}
          cell={
            <CitadelCell 
              data={this.state.citadels}
              field="citadel_type"
            />
          }
          width={150}
        />
        <Column 
          header={<Cell>Corporation</Cell>}
          cell={
            <CorporationCell 
              data={this.state.citadels}
              field="corporation"
            />
          }
          width={150}
        />
        <Column 
          header={<Cell>Alliance</Cell>}
          cell={
            <AllianceCell 
              data={this.state.citadels}
              field="alliance"
            />
          }
          width={150}
        />
        <Column 
          header={<Cell>Destroyed</Cell>}
          cell={
            <DestroyedCell 
              data={this.state.citadels}
              field="killed_at"
            />
          }
          width={150}
        />
      </Table>
    );
  }
}
class App extends React.Component {
  render () {
    return (
      <div>
        <CitadelTable />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));