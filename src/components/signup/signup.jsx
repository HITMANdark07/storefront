import React, { useState } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { signup, authenticate, isAuthenticated } from "../../auth";
import Alert from '@material-ui/lab/Alert';
import Checkbox from '@material-ui/core/Checkbox';
import { CircularProgress } from '@material-ui/core';
import './signup.css';


const SignupForm = () => {

  const [refer, setRefer] = React.useState(false);
  const [values, setValues] = useState({
    name:'',
    phone:'',
    password:'',
    confirm:'',
    referal:'',
    error:'',
    loading:false,
    success:false,
    redirectToReferrer:false
});

const { name, phone, password, confirm, error, loading,referal, redirectToReferrer} = values;

const handleChange = name => event => {
  setValues({...values, error: false, loading:false, [name]: event.target.value});
  console.log(values);
};

const clickSubmit = (event) => {
  event.preventDefault();
  if(password===confirm){
    setValues({...values,loading:true, error:false});
  if(!referal || referal==='' ){
    signup({name, phone, password})
  .then(data => {
      if(data.error){
          setValues({...values,loading:false, error: data.error, success: false});
      }else {
             authenticate(data, () => {
              setValues({...values,
                name:'',
                phone:'',
                password:'',
                confirm:"",
                error:'',
                loading:false,
                redirectToReferrer:true
        });
             });
          }
      }).catch(() => setValues({...values, error:'Network Error'}))
  }else{
    signup({name, phone, password, referal})
  .then(data => {
      if(data.error || !data){
          setValues({...values,loading:false, error: data.error || 'Error', success: false});
      }else {
             authenticate(data, () => {
              setValues({...values,
                name:'',
                phone:'',
                password:'',
                confirm:"",
                error:'',
                referal:'',
                loading:false,
                redirectToReferrer:true
        });
             });
          }
      })
      .catch((error) => setValues({...values, error:error}))
  }
    }else{
      setValues({...values,loading:false, error:'please confirm password'});
    }
  };

  const showError = () => (
    <div style={{display:error ? '' : 'none', alignItems:'center'}}>
      <Alert severity="error">{error}</Alert>
    </div>
    );
    const showLoading = () => 
        loading && (
        <CircularProgress />
        );


      // const handleClickShowPassword = () => {
      //   setValues({ ...values, showPassword: !values.showPassword });
      // };
    
      // const handleMouseDownPassword = event => {
      //   event.preventDefault();
      // };
      const redirectUser = () => {
        if(redirectToReferrer) {
          return <Redirect to="/profile" />
        }
        if(isAuthenticated()){
            return <Redirect to="/" />;
        }
    };
  

  return (
    <form className="form-signin">
      {redirectUser()}
      <p className="text-center">
        <img src="https://i.ibb.co/FhJ1BSx/undraw-Mobile-application-mr4r.png" height="180px" width="224px" alt="another"/>
      </p>
      <div className="input-group-login sombreado-input">
        <div className="input-group-prepend-login">
          <span className="input-group-text fondo-icon">
            <i className="fas fa-user"></i>
          </span>
        </div>
        <br />
        <input
          type="input"
          className="border-0-login form-control-login input-border-none"
          placeholder="Name"
          onChange={handleChange('name')}
            value={name}
        />
      </div>
      <br/>
      <div className="input-group-login sombreado-input">
        <div className="input-group-prepend-login">
          <span className="input-group-text fondo-icon">
          <i class="fa fa-mobile" ></i>
          </span>
        </div>
        <br />
        <input
          type="input"
          className="border-0-login form-control-login input-border-none"
          placeholder="Phone"
          onChange={handleChange('phone')}
            value={phone}
        />
      </div>
      <br/>
      <div className="input-group-login sombreado-input">
        <div className="input-group-prepend-login">
          <span className="input-group-text fondo-icon">
            <i className="fas fa-lock"></i>
          </span>
        </div>
        <input
          type="password"
          className="border-0-login form-control-login input-border-none"
          placeholder="Password"
          onChange={handleChange('password')}
            value={password}
        />
      </div>
      <br />
      <div className="input-group-login sombreado-input">
        <div className="input-group-prepend-login">
          <span className="input-group-text fondo-icon">
            <i className="fas fa-lock"></i>
          </span>
        </div>
        <input
          type="password"
          className="border-0-login form-control-login input-border-none"
          placeholder="Confirm-Password"
          onChange={handleChange('confirm')}
            value={confirm}
        />
      </div>
      <FormControlLabel
        control={
          <Checkbox
            checked={refer}
            onChange={() => setRefer(!refer)}
            name="checkedB"
            color="primary"
          />
        }
        label="I Have Referal"
        style={{marginLeft:70}}
      />
      <div className="input-group-login sombreado-input" style={{display: refer ? null : 'none' }}>
        <div className="input-group-prepend-login">
          <span className="input-group-text fondo-icon">
          <i class="fa fa-gift" aria-hidden="true"></i>
          </span>
        </div>
        <input
          type="input"
          className="border-0-login form-control-login input-border-none"
          placeholder="Referal-Code"
          onChange={handleChange('referal')}
            value={referal}
        />
      </div>
      <br />
      {showError()}
      <p className="text-center">
      <div style={{alignItems:'center'}}>
      {showLoading()}
      </div>
        <button className="button-signup fondo-color-signup" onClick={clickSubmit}>
          <b>SIGNUP</b>
        </button>
      </p>
      <p className="text-center">Alredy have an Account? </p>
      <p style={{textAlign:'center'}}>
      <Link to="/login" style={{textDecoration:'none', color:'black'}} >Sign in</Link></p>
    </form>
  );
}

export default withRouter(SignupForm);
