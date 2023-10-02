import styled from 'styled-components';

export const Nav = styled.nav`
   width: 94%;
   max-width: 1810px;
   margin-left: auto;
   height: 65px;
   // margin-top: 10px;
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
   padding: 12px;
`;

export const NavItem = styled.li`
   margin-right: -17px;
`;

export const NavLinks = styled.div`
   font-size: 1em;
   height: 100%;
`;