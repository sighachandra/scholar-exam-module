import React from 'react';
import './App.css';
import './bootstrap.min.css';
import rectangle from "./images/Rectangle.png";
import medicalCollege from "./images/medicalcollege.png";
import nmch from "./images/nmch.png";
import imch from "./images/imch.png";
import superSpeciality from "./images/superspeciality.png";
import icd from "./images/icd.png";
import pharmacy from "./images/pharmacy.png";
import vision from "./images/Vector.png";
import historyImg from "./images/image 19 (7).png";
import prof1 from "./images/image 19 (6).png";
import prof2 from "./images/image 20.png";

export default function HomeContent(){
    return (
        <>
        <div class="image-m" id="mainHeader">
            <img class="main-image" src={rectangle} alt="rect" />
            {/* <!-- <img src="assets/images/png 1.png"/> --> */}
            <div class="desc-style ">
                <p>GOVERNMENT MEDICAL COLLEGE KOZHIKODE</p>
            </div>
        </div>
        <div class="container">
                <div class="text-insti institution-p">
                    <h4 class="h4-insti">Institutions</h4>
                </div>
                <div class="row">
                    <div class="col-md-4 wrap-div">
                        <div class="inner-image-div">
                            <a href="/home"><img class="admin-image" src={medicalCollege} alt="medicalCollege" /></a>
                        </div>
                        <div class="inner-div">
                            <p>Medical College</p>
                        </div>
                    </div>
                    <div class="col-md-4 wrap-div">
                        <div class="inner-image-div">
                            <a href="/home"><img class="admin-image" src={nmch} alt="nmch" /></a>
                        </div>
                        <div class="inner-div">
                            <p>NMCH</p>
                        </div>
                    </div>
                    <div class="col-md-4 wrap-div">
                        <div class="inner-image-div">
                            <a href="/home"><img class="admin-image" src={imch} alt="imch" /></a>
                        </div>
                        <div class="inner-div">
                            <p>IMCH</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 wrap-div">
                        <div class="inner-image-div">
                            <a href="/home"><img class="admin-image" src={superSpeciality} alt="superSpeciality" /></a>
                        </div>
                        <div class="inner-div">
                            <p>Super Speciality</p>
                        </div>
                    </div>
                    <div class="col-md-4 wrap-div">
                        <div class="inner-image-div">
                            <a href="/home"><img class="admin-image" src={icd} alt="icd" /></a>
                        </div>
                        <div class="inner-div">
                            <p>ICD</p>
                        </div>
                    </div>
                    <div class="col-md-4 wrap-div">
                        <div class="inner-image-div">
                            <a href="/home"><img class="admin-image" src={pharmacy} alt="pharmacy" /></a>
                        </div>
                        <div class="inner-div">
                            <p>Pharmacy</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid p-0">
        	<div class="vision vision-mission-p">
        		<div class="vision-desc">
        			<div class="mission">
        		      <h4 class="vision-h4">Vision</h4>
                   <div class="align_adm">
        		         <p class="desc-vision">To be a premier Medical college in the country providing socially committed medical graduates to the society</p>
                  </div>
        		  </div>
        	   </div>
        		<img class="vector-img" src={vision} alt="vision" />
        	</div>
        	<div class="container mission">
        		 <h4 class="mission-h4">Mission</h4>
             <div class="align_adm">
        		     <p class="desc-kkd">To discover and translate new knowledge in the fileld of medical sciences to provide cutting-edgr, interdisciplinary and compassionate care of the highest quality to improve the health of the people we serve..</p>
              </div>
        	</div>
        </div>
        <div class="container align_adm history-spacing">
           <div class="wrap-div">
              <div class="his-image">
                <img class="admin-image admmm" src={historyImg} alt="historyImg"/>
              </div>
              <div class="history-bg row">
                  <div class="col-md-5"></div>
                  <div class="col-md-7">
                    <h4 class="h-styling-history">History</h4>
                    <p class="p-styling-history p-mobile">Govt.Medical College, Kozhikode( Calicut medical College) is a premier medical college located in the city of Kozhikode in Kerala. It was established in 1957 as the second medical college in Kerala. Since then the institution has grown into a premier centre of medical education in the state. The vast and sprawling Medical College campus is spread over an extensive area of 270 acres (1.1 km²) and is located about 8 km east from the heart of Kozhikode city. It was formerly affiliated to the University of Calicut and now to the Kerala University for Health Sciences (KUHS). This college and allied institutions serve 40% of the population of Kerala.</p></div>
                  <div class="col-md-12">
                    <div><p class="p-styling-history p1-mobile">The foundation stone of the college was laid on 29 May 1957 by the then Governor of Kerala, Dr. B. Ramakrishna Rao. The College was formally inaugurated on 5 August 1957 by the then minister of Health, Kerala state Dr. A. R. Menon, whose initiative and zeal were responsible for the establishment of the institution. Dr. K. N. Pisharoty, the first principal, was responsible for the task of organizing the college.</p></div>
                  </div>
              </div>
          </div>   
         </div> 
         <div class="container">
          <div class="align-head administration-p">
             <p class="h1-sizing">Government Medical College, Kozhikode</p>
             <p class="h2-sizing">Administration</p>
          </div>
          <div class="row admn-mem">
              <div class="col-md-6 wrap-div align_adm align-2">
                 <div class="adm_img">
                    <img class="admin-image prof-image" src={prof1} alt="prof1" />
                 </div>
                 <div class="adm_bg">
                   <div class="text-align-name">
                     <p class="p1-name">Principal</p>
                     <p class="p2-name">Prof. Dr. V. R. Rajendran</p>
                   </div>
                 </div>
              </div>
              <div class="col-md-6 wrap-div align_adm align-2">
                 <div class="adm_img">
                    <img class="admin-image prof-image" src={prof2} alt="prof2" />
                 </div>
                 <div class="adm_bg">
                   <div class="text-align-name">
                     <p class="p1-name">Vice Principal</p>
                     <p class="p2-name">Prof. Dr. Prathap Somnath</p>
                   </div>
                 </div>
              </div>
          </div>
        </div> 
            </>
    );
}