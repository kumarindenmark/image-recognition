import React from 'react';
import Tilt from 'react-tilt';
import rajat from './rajat.png';
import './Nav.css';

const Nav = ({onRouteChange, isSignedIn}) => {
{/*
         <div className="w-10 logo">
              <Tilt className="Tilt pa3" options={{ max : 80 }} style={{width:70, height:40, padding: 5}}>
                  <img alt="rajat" src={rajat} />
              </Tilt>   
         </div>

*/}
          if(isSignedIn) {
            return(
         <div className="w-90">
              <div style={{display:'flex', justifyContent:'flex-end'}}>
                  <p onClick={ () => onRouteChange('signOut')} className="dim pl3-ns pr3-ns button"> Signout</p>
              </div>   
         </div>
         )
         } else {
          return(
          <div className="w-90">
              <div style={{display:'flex', justifyContent:'flex-end'}}>
                  <p onClick={ () => onRouteChange('signin')} className="dim pl3-ns pr3-ns button"> Sigin</p>
                  <p onClick={ () => onRouteChange('Register')} className="dim pl3-ns pr3-ns button"> Register</p>
              </div>   
         </div>
            )
         }
        }

export default Nav;