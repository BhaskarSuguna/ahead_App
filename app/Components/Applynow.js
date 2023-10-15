// Box.js
import React from 'react';

const ExpandableCard = ({ color, miniHeading, text, miniHeading2, text2, text3, button }) => (
    <div classname='m-4' style={{ backgroundColor: color, padding: '10px', width: '300px', height: '180px', borderRadius: '20px' }}>
        
        <h4 className="text-black text-lg mb-2 font-semibold">{miniHeading}</h4>
        <p className="text-black mb-2 text-xs">{text}</p>
        <p className="text-black mb-2 text-xs">{text3}</p>
        <h4 className="text-white text-lg mb-2 font-semibold">{miniHeading2}</h4>
        <p className="text-black mb-2  text-xs">{text2}</p>
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 m-4">Appply now{button}</button>
    </div>
);

export default ExpandableCard;