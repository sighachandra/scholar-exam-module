import React from 'react';
import './App.css';
import './bootstrap.min.css';
import picLOGO from "./images/logo.png";
import sponsered from "./images/image 37.png";
import Phone from "./images/Vector (1).png";
import email from "./images/Vector (2).png";

export default function MainFooter(){
    return (
        <div class="container-fluid footer-bg">
        <div class="row r-p root-p">
            <div class="col-md-5">

                <div class="align-footer-sec1">
                  <h4 class="footer_color footer-main-h-f">Govt.Medical College, Kozhikode</h4>
                  <div class="p-p">
                      <img class="logo-design" src={picLOGO} alt="logoDesign"/>
                  </div>
                    <p class="footer_color p-p mobile-fnt">Govt.Medical College, Kozhikode(Calicut Medical College) is a premier medical college located in the city of Kozhikode in Kerala. It was established in 1957 as the second medical college in Kerala. Since then the institution has grown into a premier centre of medical education in the state</p>
             </div>

            </div>
      <div class="col-md-1"></div>
            <div class="col-md-3">
                <h4 class="footer_color footer-main-h-f">Useful Link</h4>
                <ul class="footer_color no-bullets p-p mobile-fnt">
                    <li>Home</li>
                    <li>Office</li>
                    <li>Medical College</li>
                    <li>NMCH</li>
                    <li>IMCH</li>
                    <li>Super Speciality</li>
                    <li>ICD</li>
                    <li>Pharmacy</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div class="col-md-3 ">
                <h4 class="footer_color footer-main-h-f align-footer-sec2">Contact Information</h4>
                <div class="p-p display-f p-m">
          <div class="icomn-f-sty  font-foot-size">
          <img class="font-img-foot" src={Phone} alt="phn" />
          </div>
                    <ul class="footer_color no-bullets mobile-fnt">
                        <li>Office Phone: 91-495-2350216</li>
                        <li>Office Phone: 91-495-2350217</li>
                        <li>Fax: 91-495-2355331</li>
                    </ul>
                </div>

                <div class="p-p display-f p-m">
          <div class="icomn-f-sty font-foot-size">
          <img class="font-img-foot" src={email} alt="email"/>
          </div>
                    <ul class="footer_color no-bullets mobile-fnt">
                        <li>Email:principalmcc@gmail.com</li>
                    </ul>
                </div>

                <div class="p-p display-f p-m">
          <div class="icomn-f-sty">
            <i class="fa fa-map-marker-alt icon-lo"></i>
          </div>
                    <ul class="footer_color no-bullets mobile-fnt">
                        <li>Medical College Junction, Mavoor</li>
                        <li>Rd, Kozhikode, Kerala 673008</li>
                    </ul>
                </div>

            </div>
      <div class="col-md-12">
            <div class="sponsered-img">
                <img src={sponsered} alt="sponsered"/>
            </div>
      </div>
        </div>
    </div> 
    );
}