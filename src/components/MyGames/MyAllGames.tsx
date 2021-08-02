import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import Rating from '@material-ui/lab/Rating';
import { DataGrid, GridCellParams } from '@material-ui/data-grid';
import {Games} from "../Data";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


const renderEdit = (params:any) => {
    return (
      
        <IconButton color="primary" aria-label="add to shopping cart">
        <EditIcon/>
      </IconButton>
        );
}

const renderThumb = (params:any) => {
if (params.row.recommandToOthers) {
    return (
            <ThumbUpIcon/>
    )
}  else {
    return (
        <ThumbDownIcon/>
)
}
}

const InProgressList = () => {
  return (
    <div style={{ height: '600px', width: '100%', padding: 30 }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

const data = Games;

const columns = [
    {
      field: 'name',
      headerName: 'Game',
      width: 200,
    },
    {
        field: 'rate',
        headerName: 'Score',
        width: 130,
    },
    {
        field: 'from',
        headerName: 'Date from',
        width: 140,
    },
    {
        field: 'to',
        headerName: 'Date to',
        width: 140,
    },
    {
        field: 'recommandToOthers',
        renderCell: renderThumb,
        headerName: 'Recommand',
        width: 120,
    },
    {
        field: 'platformFinished',
        headerName: 'Platforms',
        width: 200,
    },
    { field: "update",
        headerName: 'Update',
        width: 130,
        renderCell: renderEdit
    },
    
];

const rows = data;

export default InProgressList;