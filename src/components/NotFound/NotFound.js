import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/oops.png';

const NotFound = () => {
    return (
        <div>
            <img style={{width: "38%"}} src={notfound} alt="" />
            <br />
            <Link to="/"><button className="btn btn-primary">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;