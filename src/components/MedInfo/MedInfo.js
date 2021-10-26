import React from 'react';
import './MedInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faBrain, faCapsules, faHeartbeat, faMedkit, faStethoscope } from '@fortawesome/free-solid-svg-icons';

const MedInfo = () => {
    return (
        <div className="container">
            <h1 className="color" data-aos="fade-up">MEDICAL SOLUTION</h1>
            <hr />
            <div className="medical-helth container row ">
                <div className="col-sm-12 col-md-6 col-lg-3" data-aos="fade-right">
                    <FontAwesomeIcon className="icon" icon={faBrain} size='3x' />
                    <h4>Cardio Monitoring</h4>
                    <p>Practice standards for electrocardiographic monitoring in hospital an American Heart Association</p>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3"  data-aos="fade-down">
                    <FontAwesomeIcon className="icon" icon={faStethoscope} size='3x' />
                    <h4>Medical Treatment</h4>
                    <p> Annals of internal medicine acpjournals.org that a patient randomized to treatment.</p>
                </div>
                
                <div className="col-sm-12 col-md-6 col-lg-3" data-aos="fade-up">
                    <FontAwesomeIcon className="icon" icon={faAmbulance} size='3x' />
                    <h4>Ambulance Service</h4>
                    <p>Emergency Medicine Journal is an international peer review journal covering pre-hospital.</p>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3" data-aos="fade-left">
                    <FontAwesomeIcon className="icon" icon={faMedkit} size='3x' />
                    <h4>Emergrncy Help</h4>
                    <p>A global medical journal covering pre-hospital, hospital emergency medicine.</p>
                </div>
            </div>

        </div>
    );
};

export default MedInfo;