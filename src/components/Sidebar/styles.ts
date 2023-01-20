import styled from "styled-components";
import { Color } from "utils/constants/color";
import { variables } from "utils/constants/size";

type Props = {
  isOpen?: boolean;
  isActive?: boolean;
  margin?: string;
};

export const SSidebar = styled.div<Props>`
  width: ${variables.sidebarWidth};
  background: ${Color.base};
  overflow: auto;
  height: 100%;
  top: 0;
  // padding: ${variables.lgSpacing} ${variables.mdSpacing};
  transition: width 0.5s;
  position: fixed;
  bottom: 0;
  z-index: 999;
  transition: transform 0.2s;
  border-right: 1px solid ${Color.grey100};
  @media (max-width: ${variables.breakpoints}) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
  };
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none; 
  ::-webkit-scrollbar{
    display: none; 
  }
`;


export const SLogo = styled.div`
  padding: ${variables.smSpacing} ${variables.smSpacing};
  padding-left: 15px;
  padding-top: ${variables.xlSpacing};
  cursor: pointer;
  // margin-top: 10px;
  position: relative;
`;

export const SSearch = styled.div`
  color: white
  display: flex;
  margin: 3rem 0.4rem;
  flex-direction: column;
  gap: 10px;
`;

export const SSearchIcon = styled.button`
  padding: calc(${variables.mdSpacing} - 2px) ${variables.mdSpacing};
  display: flex;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`;

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${variables.lgSpacing} 0;
`;
export const SLinkLabel = styled.span<Props>`
  display: block;
  flex: 1;
  margin-left: 0px;
  color: ${Color.grey700};
  font-size: 0.9rem;
  font-weight: 500;
`;
export const SLinkIcon = styled.div<Props>`
  padding: ${variables.smSpacing} ${variables.mdSpacing};
  display: flex;
  width: 53px;
  // height: 40px;
  border-radius: 10px;
  align-items: center;
`;
export const SLinkContainer = styled.div<Props>`
 
  border-radius: ${variables.borderRadius};
  padding: 0 ${variables.smSpacing};
  animation: 1s smooth;
  position: relative;
  margin: ${({ margin }) => (margin ? margin : "0.5rem 0.5rem")};
  :hover {
    background-color:${Color.grey50};
    
  };
  .bagde{
   height: 20px;
    width: 31px;
    position: absolute;
    right: 14px;
    top: 9px;
    font-size: 12px;
    background: ${Color.grey100};
    color: ${Color.grey900};
    weight:500;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 16px;
    
  }

`;

export const SLink = styled.a<Props>`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  border-radius: 5px;
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  background-color: ${({ isActive }) =>
    isActive && "rgba(255, 255, 255, 0.1);"};
  // padding: calc(${variables.smSpacing} - 2px) 0;
`;

export const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${variables.smSpacing} / 2) ${variables.smSpacing};
  border-radius: calc(${variables.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  color: white;

  margin-right: ${variables.mdSpacing};
`;

export const CloseButton = styled.div`
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border-radius: 50%;

  right: 10px;
  top: 10px;
  display: flex;
  cursor: pointer;
  transition: all 0.2s;
  

`;
