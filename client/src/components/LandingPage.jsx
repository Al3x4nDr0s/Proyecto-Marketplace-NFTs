import React from 'react';
import Button from './shared/Button';
import {Link} from 'react-router-dom'

function LandingPage() {
    return (
        <div>
            <h1 style={{fontFamily: 'Kanit'}}>Welcome!</h1>
            <Link to="/home" style={{fontFamily: 'Kanit', textDecoration: 'none', color: '#065A60'}}>Click Here</Link>
            {/* <Button title="aceptar"/> */}
        </div>
    );
}

export default LandingPage;