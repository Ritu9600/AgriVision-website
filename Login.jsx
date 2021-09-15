import axios from 'axios';
import { Container, Button} from '../components/global/Global';
import styled from 'styled-components';
import GoogleLogin from 'react-google-login';
import { Link } from "react-router-dom";
import { Divider } from '@material-ui/core';



axios.defaults.baseURL = 'http://localhost:3001/v1';
const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 5
      }}
  />
);
const LoginPageContainer = styled(Container)`

  display: flex;
  align-items: center;
  height: 100vh;
  .carousel {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: left;
    justify-content: center;
    img {
      width: 92%;
      height: auto;
    }
  }
  .login{
    position: absolute;
    width: 93px;
    height: 41px;
    left:55%;
    top: 10%;
  }
  
  .tab{
    width: 50%;
    height:6%;
    
    border: 2px solid black;
    box-sizing: border-box;
border-radius: 8px;
  }
  .divider{
    background-color black;

  }
  .button{
    display: flex;
flex-direction: row;
background: #0E6656;
border-radius: 8px;
margin: 10% 0% 10% 0%;
padding: 2% 44% 2% 44%;
  }
  .label1{
    margin: 10% 0% 1% 0%;
    font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 22px;
color: #000000;
  }
  .sub{
    font-family: Inter;
    
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    margin: 3% 0%;
    color: black;
  }
  .sub2{
    font-family: Inter;
    font-weight: normal;
  }
  #sub1{
    margin: 1% 0% !important;
    font-size:13px;
  }
  .acc{
    margin: 0% 2%;
    color: #0E6656;
  }
  
  
   @media only screen
   and (min-device-width : 320px)
   and (max-device-width : 480px){ #mobileHide { display: none;},
   .login-section{
     margin: 0% 0% 0% 2%;
   }}
  .sub_text{
    margin: 0% 2%;
  }

  .pass{
    margin: 0% 16%;
    width: 136px;
height: 19px;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
color: #0E6656;
  }

  .button1{
    width:360px;
    height: 43px;
    font-size:14px;
    font-weight:bold;
    background: #FFFFFF;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: inset 0px -1px 5px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    margin: 4% 0% 0%;
    padding:2% 1% 2% 1%;
  }
  #button{
    margin: 10% 0% 0%;
  }
  .input{
    position: static;
width:360px;
height: 35px;
background: #FFFFFF;
border: 1px solid #000000;
box-sizing: border-box;
box-shadow: inset 0px -1px 5px rgba(0, 0, 0, 0.12);
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;
margin: 0% 0% 0% 0%;
  }
  .login-section {
    width: 48%;
    height: 100%;
    padding: 5% 10% 0% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Button1 = styled(Button)`
  margin-top: 1rem;
`;
function Login() {
  function responseGoogle(response) {
    console.log(response);
  }

  function googleSuccess(response) {
    axios
      .post('/user/oauth/google', {
        access_token: response.accessToken,
      })
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <LoginPageContainer className='flex'>
      <div className='carousel' >
        <img  id ='mobileHide'src='/images/002.svg' alt='' />
      </div>
     <Divider id ='mobileHide'orientation="vertical"  />
    
      <div className='login-section'>
        <h1 className = 'login'>Login</h1>
      
      <GoogleLogin 
          clientId='323252919231-9gbdfcc3o2ennhrvthupucj5en8rei5r.apps.googleusercontent.com'
          buttonText='SignUp with Google'
          onSuccess={googleSuccess}
          onFailure={responseGoogle}
          render={renderProps => (
            <button className= 'button1' id='button' onClick={renderProps.onClick} disabled={renderProps.disabled}>SignIn with Google</button>
          )}
        />
       
       
       <Link to="/xyz">
            <button className = 'button1' primary>SignIn with LinkedIn</button>
      </Link>
        
        
        <ColoredLine color="red" />
        <Link to="/xyz" className ='sub2' id='sub1'>
            <label>SignIn with Email </label>
          </Link>
       <div>
        <form>
          <p className ='label1'>Email</p>
      <input className ='input'
        type='text'
        name='email'
      />
     
      <p className ='label1'>Password</p>
      <input className ='input'
        name='password'
      />
      <div className ='sub'>
     
          <input className='sub_text'
            name="isGoing"
            type="checkbox"
            />
            <label>Remember me
          </label>
        <span>
        
          <Link to="/xyz" className ='pass'>
              Forgot Password?
          </Link>
        </span>
      </div>
      <Link to="/homepage">
            <Button className = 'button' primary>LOGIN</Button>
      </Link>
      <div className ='sub'>
            <label>Not registered yet? </label>
        <span>
          <Link to="/xyz" className ='acc'>
              Create Account
          </Link>
        </span>
      </div>
         
      </form>
       </div>
    
      </div>
        
    </LoginPageContainer>
  );
}

export default Login;
