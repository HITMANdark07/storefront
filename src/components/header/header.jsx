import React, {useState, useEffect} from 'react';

import clsx from 'clsx';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import List from '@material-ui/core/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { isAuthenticated, signout } from "../../auth";
import { getCart } from '../cartHelper';
import { getWish } from '../wishHelper';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
    root: {
    display: 'flex',
    },
    appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    },
    appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    },
    hide: {
    display: 'none',
    },
    drawer: {
    width: drawerWidth,
    flexShrink: 0,
    },
    drawerPaper: {
    width: drawerWidth,
    },
    drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    },
    content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    },
    contentShift: {
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0.5),
  },
  title: {
      margin:0,
      display: 'block'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 20,
    width: '40%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));



const NavBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { user } = isAuthenticated();

  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);

 useEffect(() => {
  setCart(getCart);
  setWish(getWish);
 },[]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handlechange =  (event) => {
    props.onChange(event.target.value);
  }

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{backgroundColor:'white',color:'black'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Big-Basket
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              value={props.srch}
              onChange={handlechange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
            <IconButton aria-label="show 4 new mails" color="inherit">
              {!wish.length>0 ?
              <Link to="/whishlist" style={{color:'black', textDecoration:'none'}}>
              <FavoriteBorderIcon />
              </Link>
              :
              <Link to="/whishlist" style={{color:'black', textDecoration:'none'}}>
              <Badge badgeContent={wish.length} color="secondary">
              <FavoriteBorderIcon />
              </Badge>
              </Link>
              }
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              {!cart.length>0 ?
              <Link to="/cart" style={{color:'black', textDecoration:'none'}}>
              <ShoppingBasketIcon />
              </Link>
                :
                <Link to="/cart" style={{color:'black', textDecoration:'none'}}>
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingBasketIcon />
               </Badge>
               </Link>
              }
            </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
            {!isAuthenticated() ?<Typography className={classes.title} variant="h6" noWrap style={{marginRight:30}}>
                Hi Guest
            </Typography> :
            <Typography className={classes.title} variant="h6" noWrap style={{marginRight:30}}>
               Hi {user.name}
            </Typography>
            }
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {!isAuthenticated() ? 
        <div>
            <List>
              <Link to="/login" style={{textDecoration:'none', color:'#686565'}}>
            <ListItem button key={0}>
              <ListItemIcon><PersonOutlineIcon/></ListItemIcon>
              <ListItemText primary="LOG IN" />
              </ListItem>
            </Link>
            <Typography varient="h6" style={{marginLeft:80}} nowrap>
              OR
            </Typography>
            <Link to="/signup" style={{textDecoration:'none', color:'#686565'}}>
            <ListItem button key={1}>
              <ListItemIcon><PersonAddIcon/></ListItemIcon>
              <ListItemText primary="SIGN UP" />
            </ListItem>
            </Link>
        </List>
        </div> 
        :
        <div>
         <List>
           <Link to="/profile" style={{textDecoration:'none', color:'#686565'}}>
            <ListItem button key={0}>
              <ListItemIcon><PersonOutlineIcon/></ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItem>
            </Link>
            <Link to="/orders" style={{textDecoration:'none', color:'#686565'}}>
            <ListItem button key={1}>
              <ListItemIcon><LocalShippingOutlinedIcon/></ListItemIcon>
              <ListItemText primary="My Orders" />
            </ListItem>
            </Link>
            <Link to="/whishlist" style={{textDecoration:'none', color:'#686565'}}>
            <ListItem button key={2}>
              <ListItemIcon><FavoriteBorderIcon/></ListItemIcon>
              <ListItemText primary="Whishlist" />
            </ListItem>
            </Link>
        </List>
        <Divider />
        <List>
        <Link to="/offers" style={{textDecoration:'none', color:'#686565'}}>
        <ListItem button key={3}>
              <ListItemIcon><LocalOfferOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Offers" />
            </ListItem>
          </Link>
          <Link to="/referals" style={{textDecoration:'none', color:'#686565'}}>
          <ListItem button key={4}>
            <ListItemIcon><CardGiftcardOutlinedIcon /></ListItemIcon>
            <ListItemText primary="My Referals" />
          </ListItem>
          </Link>
          <Link to="/" 
          style={{textDecoration:'none', color:'#686565'}} 
            onClick={() => signout(() => {
            props.history.push("/");
            })} >
          <ListItem button key={5}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="LOG OUT" />
          </ListItem>
          </Link>
        </List>
        </div>
        }
      </Drawer>
    </div>
  );
}

export default withRouter(NavBar);