// Box.js
import React from 'react';

const Box = ({ color, miniHeading, text, miniHeading2, text2, emoji }) => (
    <div style={{ backgroundColor: color, padding: '10px', width: '300px', height: '180px', borderRadius: '20px' }}>
        <span role="img" aria-label="emoji" className="text-2xl block m-3">{emoji}</span>
        <h4 className="text-black text-lg mb-2 font-semibold">{miniHeading}</h4>
        <p className="text-black text-xs">{text}</p>
        <h4 className="text-white text-lg mb-2 font-semibold">{miniHeading2}</h4>
        <p className="text-white text-xs">{text2}</p>
    </div>
    /* I used two other parameters as text2 and miniHeading2 for dark backgrounds*/
);

export default Box;