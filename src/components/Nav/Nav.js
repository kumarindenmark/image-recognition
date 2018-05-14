import React from 'react';
import Tilt from 'react-tilt';
import rajat from './rajat.png';
import './Nav.css';

const Nav = ({onRouteChange}) => {
	return(
         <div className="w-100 bg-white pa1">

         <div className="w-10 logo">
              <Tilt className="Tilt pa3" options={{ max : 80 }} style={{width:70, height:40, padding: 5}}>
                  <img alt="rajat" src={rajat} />
              </Tilt>   
         </div>

         <div className="w-90">
              <div style={{display:'flex', justifyContent:'flex-end'}}>
                  <p className="pr3-ns"> link</p>
                  <p className="pr-3-ns"> link</p>
                  <p onClick={ () => onRouteChange('signin')} className="dim pl3-ns pr3-ns button"> Signout</p>
              </div>   
         </div>

         </div>
		  )
        }

export default Nav;