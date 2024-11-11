import "../styles/banderole.css"
import {useState} from 'react';

export default function Banderole({ banderoleType }) {


    function typeBanderole() {
        if(banderoleType === 1) {
            return (
                <div className="banderole banderole1">
                    <h1 className="banderole-title">Chez vous, </h1><h1 className="banderole-title">partout et ailleurs</h1>
                </div>
                )
        } else {
            return (
                <div className="banderole banderole2"></div>
            )
        }
    }
    return (
        <div className="banderole-width">
        {typeBanderole()}
        </div>
    )
}