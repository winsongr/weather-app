import React from 'react';
import Input from '@mui/material/Input';
import { Button } from '@mui/material';
import "./Inputform.css"
export default function Inputcom() {
    return <div className='inputbox' >
        <div className='inputfield ' >
            <h1> Weather App </h1>
            <p> by Winson</p>
            <img src="data:image/png;base64,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" alt="logo" />
            <form > < Input placeholder='City Name' />
                <br /> < Button variant="contained" color="success" type="submit">
                    Search </Button>
            </form>
        </div>
    </div>;
}