import React from 'react';

const style = {
    textAlign: "left",
    color: "#aad7f1",
    background: "#3d4460",
    textDecoration: "none",
    padding: "16px"
};

const DarkTheme = ({children}) => (
    <div style={style}>
        {children}
    </div>
);

export default DarkTheme;