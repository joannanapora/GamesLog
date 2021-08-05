/* eslint-disable @typescript-eslint/no-use-before-define */
import {Games} from '../Data';
import { DataGrid } from '@material-ui/data-grid';


const CardsList = () => {
  return (
    <div style={{ height: '800px', padding:'50px', width: '100%' }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  )
}


const data = Games;
const platforms = data.map((el)=>{
  // console.log(el.platformFinished) // LISTA  LIST
  return el.platformFinished
})


function renderPlatforms(params : any) {
  console.log(params.row.platformFinished)
  return  (
    <div>
      {
         params.row.platformFinished.map((p: any) => <span>{p} | </span>)
      }
    </div>
  )
  
 
};

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 180,
  },
  {
    field: 'rate',
    headerName: 'Score',
    width: 120,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 140,
  },
  {
    field: 'from',
    headerName: 'Start',
    width: 120,
  },
  {
    field: 'to',
    headerName: 'Finish',
    width: 120,
  },
  {
    field: 'platformsList',
    headerName: 'Platforms',
    renderCell: renderPlatforms,
    width: 300,
  },
];



export default CardsList;