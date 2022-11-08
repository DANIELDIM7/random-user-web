/* eslint-disable react/no-typos */
import React from "react";
import "./styles/Title.css";
import PropTypes from 'prop-types'

const Title = ({text}) => {
  
  return <h1 className="title">{text}</h1>;
};

 Title.PropTypes = {
  text: PropTypes.string.isRequired //con isRequired hago que esta propiedad sea obligatoria
}

Title.deFaultProps = {
  text: 'Mi título por defecto'
}

export default Title;
