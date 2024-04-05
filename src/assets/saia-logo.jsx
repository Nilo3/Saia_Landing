import React from "react";
import PropTypes from "prop-types";

export const SaiaLogo = ({ width , height }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 300 53"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
    >
   <g id="a"/><g id="b"><g id="c"><g><path className="d" d="M0,53.85l5.49-3.07c5.68,12.49,14.98,16.69,28.85,16.69,15.82,0,22.99-5.43,22.99-14.54,0-10.95-10.24-11.98-26.34-12.29-10.05-.2-29.78-.31-29.78-19.14,0-13.21,9.77-21.5,31.83-21.5,12.19,0,22.52,2.56,28.48,13.92l-5.68,3.28c-3.07-4.61-7.35-11.26-24.57-11.26-13.77,0-24.29,4.3-24.29,15.36,0,14.54,18.15,13.92,28.66,14.23,17.59,.41,27.55,2.97,27.55,16.89s-10.33,21.29-28.94,21.29c-19.73,0-29.69-7.78-34.25-19.86Z"/><path className="d" d="M118.47,54.16h-42.16l-8.19,18.53h-6.42L93.72,1.02h6.98l32.85,71.66h-6.7l-8.38-18.53h0Zm-2.61-5.72L97.25,7.06l-18.33,41.36h36.94Z"/><path className="d" d="M138.37,72.7h11.4c1.7,0,3.09-1.38,3.09-3.09V1.02h-11.4c-1.7,0-3.09,1.38-3.09,3.09V72.7Z"/><path className="d" d="M202.25,1.12h-17.32l-27.24,71.59h10.35c2.56,0,4.85-1.58,5.76-3.97l21.98-57.73,13.83,35.49h-27.85l7.08,8.44c1.17,1.4,2.9,2.2,4.73,2.2h20.15l4.51,11.63c.92,2.37,3.21,3.94,5.75,3.94h10.56L207.99,5.03c-.93-2.36-3.21-3.92-5.74-3.92h0Z"/></g></g></g>
    </svg>
);

SaiaLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
}