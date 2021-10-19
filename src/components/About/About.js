import React from 'react';
import './About.css';
import img from '../../images/letest1.jpg';

const About = () => {
    return (
        <div className="container responsive">
            <div className="medical">
                <h2 className="color">THE MEDICAL SOLUTION</h2>
                <p>IEI Integration Corp. builds up the business as a leading industrial computer provider, and turns to artificial intelligence and networking edge computing. IEI's products are applied in computer-based applications such as factory automation, computer telephony integration, networking appliances, security, systems, and in fields like AI, IoT (Internet of Things), national defense, police administration, transportation, communication base stations and medical instruments. IEI continues to promote its brand products as well as serving ODM vertical markets to offer complete and professional services.

                    IEI is alliance with Intel, Microsoft, Amazon to offer a complete intelligent system with various options, including kinds of hardware devices, different operating systems, multiple applications, private/hybrid/public cloud computing, and data storage and security for developing integrated solutions, collaborating new applications, and expanding the markets.

                    IEI strives to achieve the ultimate aim of IoT and AI, and to create comfortable and convenient living spaces for human beings by using advanced technologies.</p>

                <h2 className="color">The Human Solution</h2>
                <p>At normal physiological conditions, organisms regulate their internal environments and maintain stable, constant conditions despite influences from the outside environment. Internally, many mechanisms allow for a constant environment, but often, when a person becomes sick or incapacitated, the homeostatic environment becomes disrupted. To assist in the treatment and recovery process, medical scientists and doctors often introduce electrolytic solutions into the body. The solutions must be of proper osmolality and concentrations, otherwise irreversible damage can be caused. These electrolytic solutions share the same colligative properties as chemical solutions.</p>

                <h2 className="color">Saline Solutions</h2>

                <p>Medical solutions are important for treating dehydration and for cleaning and treating wounds. One class of medical solutions is known as saline solutions. These solutions are composed of water and sodium chloride. Saline solutions are typically used for rinsing contact lenses, nasal irrigation, and cleaning new piercings. Saline solutions can vary in their concentrations. <br /> <br /> <br />

                    Typically, saline is found at a 0.90% w/v of NaCl in water. Referred to as “normal saline,” this type of electrolytic solution is used frequently in intravenous drips for patients who have lost a lot of water and are at risk for dehydration. Normal saline is also used to treat decreased blood volume. The saline solution is expected to restore the salinity levels in the blood. Most commonly, saline is used in intravenous (IV) therapy, which provides water and electrolytes to a patient. Normal saline has low osmolality, which can introduce problems, so IV solutions generally have glucose added to maintain a safe osmolality.
                </p>

                <h2 className="color">Electrolytes in Solutions</h2>

                <p>As mentioned before, humans maintain a homeostatic internal environment. The electrolyte-water ratio that regulates many of the body’s functions is part of this. Plasma osmolarity is the measure of the body’s electrolyte-water balance. Its name is derived from osmosis, which is the net movement of solvent molecules through a partially permeable membrane; the molecules travel from a region of higher solute concentration to a region with lower solute concentration. There are two common measurements used to determine the amount of electrolyte in a solution.Osmolality is affected by changes in water content, whereas osmolarity is affected by temperature and pressure. These two values are slightly different; osmolarity is slightly less than osmolality because it does not take into account the weight of the solutes. The normal range of osmolality in human blood plasma is 270-310 milli-osmoles/kg.</p>
            </div>


            <div className="row d-flex flex-row-reverse mt-5">
            <div className=" col-sm-12 col-md-6  col-lg-6">
                <img className="images" src={img} width="90%"  alt=""></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 color">
                <h1 className="">OPARATION THEATRE</h1>
                <p className="">As with every medical procedure, specific equipment is required for each surgical operation. Some equipment is reusable (most instruments fall into this category), whilst other equipment is single-use only. With few exceptions, all equipment used in operations is sterile and so will be packed, therefore it must only be touched by those who are scrubbed. Common examples of ‘disposables’ you will see in theatre are cutting-staplers, ‘energy devices’, drains and swabs – which we will discuss later.</p>
            </div>
        </div>
        </div>
    );
};

export default About;