import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const GLButton = ({onClick, label}:{onClick:any, label:string}) => {
    
    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    dark: {
      background: theme.palette.primary.main,
        borderRadius: '3px',
        fontSize: '16px',
        width: '100%',
        maxWidth: '300px',
        border: 0,
        height: '48px',
        padding: '0 30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '20px',
          },
    },
}));


const classes = useStyles();

return (
      <Button onClick={onClick} type="button" className={classes.dark}>
        {label}
      </Button>
    )

}


export default GLButton;