import React from 'react';

const GoogleMapEmbed = () => {
    window.scrollTo(0, 0);
  return (
    <div className="w-full">
       <iframe
        title="Google Map"
        width="100%"
        height="400"
        className="border-0 w-full"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&q=UGA%2039%2C%20Galaxy%20Diamond%20Plaza%2C%20Haibatpur%2C%20Sector%204%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201009&maptype=roadmap&zoom=14"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
