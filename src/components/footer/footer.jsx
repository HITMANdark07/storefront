import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, withRouter} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import StoreIcon from '@material-ui/icons/Store';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    zIndex:2
  },
});

const Footer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      
      <BottomNavigationAction label="Home" icon={<Link to="/" style={{color:'black', textDecoration:'none'}}><HomeIcon /></Link>} />
      
      <BottomNavigationAction label="Store" icon={<Link to="/store" style={{color:'black', textDecoration:'none'}}><StoreIcon /></Link>} />
      
      <BottomNavigationAction label="Profile" icon={<Link to="/profile" style={{color:'black', textDecoration:'none'}}><PersonIcon /></Link>} />
      
    </BottomNavigation>
  );
}
export default withRouter(Footer);
