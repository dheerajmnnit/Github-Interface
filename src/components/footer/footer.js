import React from "react";

// Footer component
const Footer = () => {
    const style = {
        background: "#24292e",
        color: "white",
        position: "fixed",
        bottom: "0",
        width: "100%",
        textAlign: "center",
        height: "30px",
    };
    const anchorStyle = {
        color: "white",
        textDecoration: "none"
    };
    return (
        <footer style={style}>
            Made by{" "}
            <a href="https://github.com/dheerajmnnit" style={anchorStyle}>
                Dheeraj Prajapati
      </a>
        </footer>
    );
};

export default Footer;
