import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      maxWidth: 130,
      margin: 2,
      backgroundColor: theme.palette.secondary.light,
      border: '1px solid #2F5D62'
    },
    image: {
      width: 130,
      height: 130,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    tekst: {
        width: '140px',
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    text2: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '12px',
        flexDirection: 'column',
        padding: 5,
    },
    imagebox: {
        display: 'flex',
        flexDirection: 'column',
        height:'100%',
        fontSize: '1.3rem'
    },
    status: {
        fontSize: '0.9rem',
        fontWeight: 700,
        display: 'flex',
        justifyContent: 'center'
    },
    rating: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '15px'
    },
    plats: {
    
            width: '100%',
            display: 'flex',
            fontSize: '12px',
            flexDirection: 'column',
            padding: 5,
            minHeight: '80px'
    }
  }),
);

const MyGame = ({
    wanttoplay,
    inprogress,
    popularity,
    played,
    name,
    rate,
    image,
    platforms,
    info, 
    from, 
    to,
    status,
    platformList
  }: {
    wanttoplay: boolean;
    inprogress: boolean;
    popularity: number;
    played: boolean;
    name: string;
    rate: number;
    image: any;
    platforms: any;
    info: string;
    from: string;
    to: string;
    status: string;
    platformList: string[];
  }) => {
  const classes = useStyles();

 const updateStatus = () => {
     console.log('update status')
 }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
                <div className={classes.imagebox} >
                 <div className={classes.rating}>
                    SCORE: {rate}
                        </div>
              <img className={classes.img} alt="complex" src={image}/>
              <Typography className={classes.status} variant="body2" color="textSecondary">
               {status}
                </Typography>
                </div>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography className={classes.tekst} gutterBottom variant="subtitle1">
                  {name}
                </Typography>
                <Typography className={classes.text2} variant="body2" gutterBottom>
                  <div>Start: {from}</div> <div>Finish: {to}</div>
                </Typography>
                <Typography className={classes.plats} variant="body2" gutterBottom>
                {platformList.map((el)=>{
                   return <div>
                       🔹{el}
                   </div>
                })}
                </Typography>
              </Grid>
              <Grid item>
                <Typography onClick={updateStatus} variant="body2" style={{ display: 'flex', cursor: 'pointer' }}>
                  Update Status
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}


export default MyGame;