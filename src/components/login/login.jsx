import React, { useState } from 'react';
import { Link, withRouter, Redirect } from "react-router-dom";
import { CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { signin, authenticate, isAuthenticated } from "../../auth";
import './login.css';


const LoginForm = () => {

  const [values, setValues] = useState({
        phone:'8409209072',
        password:'password123',
        error:'',
        loading:false,
        redirectToReferrer:false,
    });
    const { loading, phone, password, redirectToReferrer, error} = values;
  
    const handleChange = name => event => {
      setValues({...values, error: false, [name]: event.target.value});
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({...values, error:false, loading:true});
        signin({phone, password})
        .then(data => {
            if(data.err){
                setValues({...values, error: data.err, loading:false});
            }else {
                    authenticate(data, () => {
                        setValues({
                            ...values,
                            redirectToReferrer:true
                    });
                });

            }
        })
        .catch(() => setValues({...values, error:'Network Error'}))
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

    const redirectUser = () => {
      if(redirectToReferrer) {
              return <Redirect to="/profile" />
          }
      else if(isAuthenticated()){
          return <Redirect to="/" />;
      }
  };

  return (
    <form className="form-signin">
      {redirectUser()}
      <p className="text-center">
        <img src="https://i.ibb.co/FhJ1BSx/undraw-Mobile-application-mr4r.png" height="180px" width="224px" alt="another"/>
      </p>
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
      {showError()}
      <p className="text-center">
      <div style={{alignItems:'center'}}>
      {showLoading()}
      </div>
        <button className="button-signup fondo-color-signup"
        onClick={clickSubmit}
        >
          <b>LOGIN</b>
        </button>
      </p>
      <p className="text-center">Don't have an Account? </p>
      <p style={{textAlign:'center'}}>
      <Link to="/signup" style={{textDecoration:'none', color:'black'}} >Sign Up</Link></p>
    </form>
  );
}

export default withRouter(LoginForm);
