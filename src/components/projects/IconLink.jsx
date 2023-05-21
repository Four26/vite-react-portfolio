import React from 'react';

function IconLink(props) {
    const { link, title, icon } = props;
    const linkStyle = {
        color: '#526D82', // Set the desired color for the link text
        textDecoration: 'none', // Optional: Add text decoration as needed
    };
    const iconStyle = {
        color: '#526D82', // Set the desired color for the icon
        marginRight: '0.5rem', // Optional: Adjust the spacing between the icon and text
    };
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            <i className={icon} style={iconStyle} /> {title}
        </a>
    );
}

export default IconLink;
