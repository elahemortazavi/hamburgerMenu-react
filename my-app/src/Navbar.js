import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
 list-style: none;
 display: flex;
 justify-content: right;
 margin: 20px 50px;
 z-index: 15;
 li{
   padding: 18px 30px;
 }`


const Navbar = () => {
    return (
      <Ul>
        <li>Home</li>
        <li>About us</li>
        <li>Docs</li>
        <li>Contact</li>
      </Ul>
    );
};

export default Navbar;