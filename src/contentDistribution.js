import React from 'react';
import './bootstrap.min.css';
import MainHeader from './medHead';
import MainFooter from './medFooter';
import HomeContent from './mainContent'


export default function ContentDistributer() {
    return(
        <><div class="container-fluid p-0">
            <MainHeader/>
       
        <div>
            <HomeContent/>

        </div>
          <MainFooter/>
        </div>
        </>
    );
};