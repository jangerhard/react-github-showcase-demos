import React from 'react';

const style = {
    textAlign: "left",
    color: "white",
    background: "#505050",
    textDecoration: "none"
};

const DarkTheme = ({children}) => (
    <div style={style}>
        {children}
    </div>
);

export default DarkTheme;