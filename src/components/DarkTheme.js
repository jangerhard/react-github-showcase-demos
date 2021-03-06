import React from 'react';

const style = {
    textAlign: "left",
    color: "#d9d9d9",
    background: "#484848",
    textDecoration: "none",
    padding: "16px"
};

const DarkTheme = ({children}) => (
    <div style={style}>
        {children}
    </div>
);

export default DarkTheme;