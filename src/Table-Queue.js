import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import DeleteForever from '@material-ui/icons/DeleteForever';
import CircularIndeterminate from './ProgressIcon.js';
import Refresh from '@material-ui/icons/Refresh';
import Link from '@material-ui/icons/Link';
import './Material.css';
import { inject, observer } from 'mobx-react';
import StoreFunctions from './utils/StoreFunctions.js';
import DatabaseFunctions from './utils/DatabaseFunctions.js';
import Button from '@material-ui/core/Button';

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  },
});

class TablePaginationActions extends React.Component {

  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 200,
  },
  tableButton: {
    minWidth: '3rem',
    width: '3rem'
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  button: {
    width: '3rem'
  }
});

@inject('QueueStore', 'SearchStore')
@observer
class CustomPaginationActionsTable extends React.Component {

  handleChangePage = (event, page) => {
    StoreFunctions.changeStoreValue({
      storeKey: "page",
      value: page,
      store: "QueueStore"
    });
  };

  handleChangeRowsPerPage = event => {
    StoreFunctions.changeStoreValue({
      storeKey: "rowsPerPage",
      value: event.target.value,
      store: "QueueStore"
    })
  };

  handleDeleteClick(rows, _id) {
    const { QueueStore } = this.props;
    let rowDelete = rows.findIndex(x => x._id===_id)
    QueueStore["rows"].splice(rowDelete, 1);
    DatabaseFunctions.deleteSongFromQueue(_id)
  };

  displayLinkIcon(link){
    if ( link ) {
        return <a href={link} target="Chorus"><Link className="material-icons md-link"/></a>
    }
  }

  reloadButtonContent(){
    const { SearchStore } = this.props;
    if ( SearchStore.search === false ) {
      return <Refresh/>
    }

    else if ( SearchStore.search === true ) {
      return <CircularIndeterminate/>
    }
  }

  reloadButton(){
    const { classes } = this.props;
    return  <Button
              onClick={e => DatabaseFunctions.getQueue(e)}
              variant="contained"
              color="primary"
              className={classes.button}
            > {this.reloadButtonContent()}
            </Button>
  }

  render() {
    const { classes, QueueStore } = this.props;
    const { rows, rowsPerPage, page } = QueueStore;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Lien</TableCell>
                <TableCell>Artiste</TableCell>
                <TableCell>Chanson</TableCell>
                <TableCell>User</TableCell>
                <TableCell className={classes.tableButton}>{this.reloadButton()}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                  <TableRow key={row._id}>
                    <TableCell>{this.displayLinkIcon(row.link)}</TableCell>
                    <TableCell>{row.artist}</TableCell>
                    <TableCell>{row.song}</TableCell>
                    <TableCell>{row.user}</TableCell>
                    <TableCell><DeleteForever className="material-icons md-delete" onClick={e => this.handleDeleteClick(rows, row._id)}/></TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

CustomPaginationActionsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomPaginationActionsTable);
