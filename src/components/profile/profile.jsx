import React from 'react';
import "./profile.scss";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Redirect } from "react-router-dom";
import moment from 'moment';
import { isAuthenticated } from "../../auth";
import Fade from '@material-ui/core/Fade';


export default function Profile() {

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
    const { user } = isAuthenticated();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const redirectUser = () => {
     if(!isAuthenticated()){
          return <Redirect to="/login" />;
      }
    };
  return (
      <div>
        {redirectUser()}
    <div className="wrapper">
    <div className="profile-card js-profile-card">
    <div className="profile-card__img">
      <img src="https://img.icons8.com/plasticine/2x/camera.png" alt="profile card" />
    </div>

    <div className="profile-card__cnt js-profile-cnt">
      <div className="profile-card__name">{user.name}</div>
      <div className="profile-card__txt">Joined - <strong>{moment(user.createdAt).fromNow()}</strong></div>
      <div className="profile-card-loc">

        <span className="profile-card-loc__txt">
         +91 {user.phone}
        </span>
      </div>

      <div className="profile-card-inf">
        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">{user.balance ? user.balance : '0'}</div>
          <div className="profile-card-inf__txt"><i className="fa fa-gift"></i> Points</div>
        </div>

        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">{user.whishlist ? user.wishlist : '0'}</div>
          <div className="profile-card-inf__txt"><i className="fa fa-heart"></i> WhishList</div>
        </div>

        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">{user.Cart ? user.Cart : '0'}</div>
          <div className="profile-card-inf__txt"><i className="fa fa-shopping-cart"></i> My Cart</div>
        </div>

        <div className="profile-card-inf__item">
          <div className="profile-card-inf__title">{user.history ? user.history : '0'}</div>
          <div className="profile-card-inf__txt"><i className="fa fa-truck"></i> My Orders</div>
        </div>
      </div>
      </div>
      <div className="profile-card-ctr">
        <button className="profile-card__button button--blue js-message-btn" onClick={handleOpen}>My Referals</button><br />
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    <br />
    <br />
      </div>
    </div>
        </div>
    </div>
  );
}
