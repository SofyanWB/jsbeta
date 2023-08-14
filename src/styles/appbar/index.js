import styled from 'styled-components';

export const Nav = styled.nav`
   background: transparent;
   width: 95%;
   max-width: 1300px;
   margin-left: auto;
   height: 65px;
   margin-right: auto;
   border-radius: 30px;
   display: flex;
   justify-content: center;
   align-items: center;
   position: sticky;
   z-index: 10;
   transition-timing-function: ease-in;
   transition: 0.8s;
`;

export const NavContainer = styled.div`
   align-items: center;
   display: flex;
   justify-content: space-between;
   z-index: 1;
   width: 100%;
   padding: 15px;
   // max-width: 1000px;
`;

export const MobileIcon = styled.div`
   display: none;
  
   @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top:0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
   }
`;

export const NavItem = styled.li`
   margin-right: -17px;
`;

export const NavLinks = styled.div`
   font-size: 1em;
   height: 100%;
   cursor: pointer;
   
   &.active { 
   color: #000000; 
   }
`;