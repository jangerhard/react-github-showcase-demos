import React from 'react';

const style = {
    textAlign: "left"
};

const DarkTheme = ({children}) => (
    <div style={style}>
        {children}
    </div>
);

export default DarkTheme;