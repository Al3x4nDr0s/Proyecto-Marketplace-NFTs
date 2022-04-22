import React from 'react';
import Button from './shared/Button';

function LandingPage() {
    return (
        <div>
            <h1>Hola</h1>
            <Button title="aceptar" onClick={() => console.log('entro')}/>
            <Button color="red" title="aceptar"/>
            <Button color="orange" icon="search" title="aceptar"/>
        </div>
    );
}

export default LandingPage;