import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
var moment = require('moment');

var CitadelTable = React.createClass({
  render() {
    function dotlanLink(cell, row){
      return cell.link("http://evemaps.dotlan.net/system/" + cell + "/");
    }
    function destroyed(cell, row){
      if (cell){        
        return row.style.backgroundColor = "red";
      }
    }
    return (
      <BootstrapTable data={this.props.citadels} 
                      hover={true}
                      search={true}
                      striped={true}
                      pagination={true}
                      options={ {
                        sizePerPage: 10,
                        sizePerPageList: [5, 10, 20]
                      } }>
        <TableHeaderColumn isKey={true} dataField="id" hidden={true}>Citadel Id</TableHeaderColumn>
        <TableHeaderColumn dataField="system" dataFormat={dotlanLink}>System</TableHeaderColumn>
        <TableHeaderColumn dataField="region">Region</TableHeaderColumn>
        <TableHeaderColumn dataField="citadel_type">Citadel</TableHeaderColumn>
        <TableHeaderColumn dataField="corporation">Corporation</TableHeaderColumn>
        <TableHeaderColumn dataField="alliance">Alliance</TableHeaderColumn>
        <TableHeaderColumn dataField="killed_at">Destroyed</TableHeaderColumn>
      </BootstrapTable>
    )
  }
});

var App = React.createClass({
  getInitialState: function() {
    return { citadelData: [] };
  },
  componentDidMount: function() {
    var datatableData = this.datatableData;
    fetch(process.env.CITADEL_URL)
    .then(function(response) {
      return response.json();
    }).then(function(response_data) {
      response_data.citadels.map(function(c){
        if (c.killed_at) {
          c.killed_at = moment(c.killed_at, 'X').toString()
        }
      })      
      this.setState( { citadelData: response_data.citadels } )
    }.bind(this))
  },
  render () {
    return (
      <div>
        <CitadelTable citadels={ this.state.citadelData } />
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
