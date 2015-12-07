import * as React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import AppBar from 'material-ui/lib/app-bar';
import Paper from 'material-ui/lib/paper';
import Table from 'material-ui/lib/table/table';
import TableHeader from 'material-ui/lib/table/table-header';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableBody from 'material-ui/lib/table/table-body';
import TableRow from 'material-ui/lib/table/table-row';
import TableRowColumn from 'material-ui/lib/table/table-row-column';

const samples = [
  'StarWars',
  'Movies'
];

const SampleComponent : any = (props : { sample: string, key?: string}) => {
  const columns = _(['JavaScript', 'JavaScript-ES6', 'TypeScript'])
    .map(column => (
      <TableRowColumn key={ _.uniqueId('sample-flavor') } style={{textAlign: 'center'}}>
        <a href={`${props.sample.toLowerCase()}/${column.toLowerCase()}`}>{column}</a>
      </TableRowColumn>
    )).value();
  return (
    <TableRow>
      <TableRowColumn>{props.sample}</TableRowColumn>
      {columns}
    </TableRow>
  );
}

const MainComponent : any = (props : { samples: string[] }) => {
  const sampleRows = _(samples)
    .map(sample => <SampleComponent key={ _.uniqueId('sample-row') } sample={ sample } />)
    .value();
  return (
    <div>
      <AppBar title="React with TypeScript samples" showMenuIconButton={false}/>
      <Paper className="table-paper">
        <Table selectable={false}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Sample</TableHeaderColumn>
              <TableHeaderColumn colSpan="3" style={{ textAlign: 'center' }} >Flavor</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            { sampleRows }
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

render(<MainComponent samples={samples} />, document.getElementById('content'));
