import React from 'react';
import Iframe from 'react-iframe';

const GoogleMap = () => {
   return (
      <Iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.680845745981!2d90.39695083037563!3d23.79475530307877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0x97856381e88fb311!2sBanani%20Model%20Town%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1619975450191!5m2!1sen!2sbd"
         width="100%"
         height="100%"
         frameBorder="0"
         style={{ borderRadius:"10px" }}
         allowFullScreen=""
         aria-hidden="false"
         tabIndex="0"
      />
   );
};

export default GoogleMap;
