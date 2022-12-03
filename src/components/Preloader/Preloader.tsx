import React from 'react';
import Spinner from '../Spinner';

import './Preloader.scss';
import Label from "../Label";

const Preloader = ({msg} : {msg: string}) => {
  return <div className="Preloader-wrapper">
    <Spinner/>
    <Label>{msg}</Label>
  </div>;
}

export default Preloader;
