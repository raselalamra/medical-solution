import React from 'react';
import img from '../../images/letest2.jpg';
import './Departments.css';
import img2 from '../../images/department.png';


const Departments = () => {
    return (

        <div className="container">

            <div className=" row d-flex flex-row-reverse">
                <div className=" col-sm-12 col-md-6  col-lg-6 image">
                    <img src={img2} width="80%" alt="" />
                </div>
                <div className="peragrap col-sm-12 col-md-6 col-lg-6">
                    <h2 className="color">Departments</h2>
                    <hr />
                    <p>Findings  In this economic evaluation of representative data from 8 US school districts from 2013 to 2019, self-reported soda consumption among high school students in Philadelphia, Pennsylvania, which has a sweetened beverage tax, was compared with that of students in cities without taxes. Philadelphia’s tax was associated with a statistically significant reduction in soda consumption of 0.81 servings of soda per week 2 years after tax implementation. his economic evaluation of school district–level Youth Risk Behavior Surveillance System data from September 2013 to December 2019 compared weekly soda intake in high school students in Philadelphia, a city with a sweetened beverage tax, with that in 7 comparison cities without beverage taxes. Difference-in-differences regression modeling was used to estimate change in soda intake in Philadelphia compared with control cities.</p>
                </div>
            </div>



            <div className="row">
                <img className="col-sm-12 col-md-6  col-lg-6 p-2" src={img} alt="" />
                <div className="col-sm-12 col-md-6  col-lg-6">
                    <div className="pedlatric">
                        <h3>Pedlatric</h3>
                        <p>Fusce eget condimentum lectus, sed commodo dui. Suspendisse non vehicula ant aecenas placerat finibus metus, at finibus neque.Fusce eget condimentum lectus, sed commodo dui. Suspendisse non vehicula ant aecenas placerat finibus metus, at finibus neque.</p>
                    </div>
                    <div className="pedlatric">
                        <h3>Dental</h3>
                        <p>Dental philadelphia’s tax was associated with a statistically significant reduction in soda consumption of 0.81 servings of soda per week 2 years after tax implementation.Eget condimentum lectus, sed commodo Suspendisse non vehicula ant aecenas.</p>
                    </div>
                    <div className="pedlatric">
                        <h3>Physicians</h3>
                        <p>Physicians Difference-in-differences regression modeling was used to estimate change in soda intake in Philadelphia compared with control cities Suspendisse non vehicula ant aecenas placerat finibus Philadelphia’s tax was associated.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Departments;