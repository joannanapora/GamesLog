import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const GLButton = ({onClick, label}:{onClick:any, label:string}) => {
    
    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    dark: {
        borderRadius: '3px',
        fontSize: '16px',
        width: '200px',
        fontFamily: 'Monda',
        height: '50px',
        padding: '0 30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '20px',
          },
    },
    box: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center'
    }
}));


const classes = useStyles();

return (
  <div className={classes.box} >
      <Button onClick={onClick} type="button" className={classes.dark}>
        {label}
      </Button>
  </div>
    )

}


export default GLButton;