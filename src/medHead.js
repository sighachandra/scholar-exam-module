import React from 'react';
import './App.css';
import './bootstrap.min.css';
import pic from "./images/logo.png";
// import { makeStyles } from '@material-ui/core/styles';

// import clsx from 'clsx';


// const useStyles = makeStyles((theme) => ({
  
// }));

export default function MainHeader() {
  // const classes = useStyles();

  return (
    
    <div class="nav-cover-div" id="headerMenu">
            
        <div class="logo-wrap">
           
           <img class="logo-design"  src={pic} alt="logo" />
           <p class="sticky-p" id="stickyP">Government Medical CollegeKozhikode</p>
        </div>

        <div class="nav-button">
          <button type="button" id="displayMenuBar"><i class="fas fa-bars"></i></button>
        </div>
              

        <nav class="nav-arr" id="navBarDisplay">
           <div class="cross-close-arr">
            
             <i class="fas fa-caret-down arrow-style" id="hideMenuBar"></i>
           </div>
           <div>
             <a  href="/home">Home</a>
           </div>
           <div>
             <a  href="/home">Office</a>
           </div>
           <div>
             <a href="/home">Institutions</a>
           </div>
           <div>
             <a href="/home">News</a>
           </div>
           <div>
             <a href="/home">NMC</a>
           </div>
           <div>
             <a href="/home">About</a>
           </div>
           <div>
             <a href="/home">Contact</a>
           </div>
       </nav>

    </div>
  );
}
