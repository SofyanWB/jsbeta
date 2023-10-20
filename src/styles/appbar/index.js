import styled from 'styled-components';

export const Nav = styled.nav`
   width: 94%;
   max-width: 1500px;
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

export const NavFix = styled.nav`
   backdrop-filter: blur(10px);
   color: black;
   background: rgba(255, 255, 255, 0.5);
   box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
   width: 95%;
   max-width: 1500px;
   margin-top: 20px;

   @media screen and (max-width: 500px) {
      margin-top: 10px;
   }

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
   padding: 12px;
`;

export const NavContainerFix = styled.div`
   align-items: center;
   display: flex;
   justify-content: space-between;
   z-index: 1;
   width: 100%;
   padding: 15px;
   // max-width: 1500px;

   .MuiToggleButtonGroup-grouped {
      border-radius: 20px;
      color: black;
      width: 40px;
      height: 40px;
   }
  
   .MuiToggleButtonGroup-root {
      .Mui-selected,
      .Mui-selected:hover {
         background-color: #ED783E;
         color: white;
         font-weight: bold;
      }
   }
`;

export const NavItem = styled.li`
   margin-right: -17px;
`;

export const NavLinks = styled.div`
   font-size: 1em;
   height: 100%;
   // color: black;
`;