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
 }
 @media (max-width: 768px) {
    margin: 0px;
    flex-direction: column;
    background-color: #1565df;
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    padding-top: 3.5rem;
    li {
        color: #fff;
    }
 }`;


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