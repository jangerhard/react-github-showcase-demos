import React from 'react';

const style = {
    textAlign: "left",
    color: "#9CC9E3",
    background: "#2c334d",
    textDecoration: "none",
    padding: "16px"
};

const DarkTheme = ({children}) => (
    <div style={style}>
        {children}
    </div>
);

export default DarkTheme;