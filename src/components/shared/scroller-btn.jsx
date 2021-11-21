import React from 'react';
import ScrollTop from 'react-scrolltop-button';

export const ScrollerBtn = () => {
    return (
        <ScrollTop
            text={<i className="fa fa-arrow-up" />}
            distance={90}
            className="scroll-btn"
            style={styledProps}
        />
    );
}

const styledProps = {
    backgroundColor: "#479c18",
    borderRadius: "0px",
    border: "0px solid #1ea04c",
    color: "white",
    zIndex: 100,
    fontSize: "18px"
}