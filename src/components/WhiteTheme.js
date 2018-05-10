import React from 'react';

const style = {
    textAlign: "left",
    padding: "16px"
};

const DarkTheme = ({children}) => (
    <div style={style}>
        {children}
    </div>
);

export default DarkTheme;