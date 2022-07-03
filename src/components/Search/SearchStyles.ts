import styled from "styled-components";

export const SearchWrap = styled.div`
  background-color: #fff;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  border-radius: 4px;
  svg {
    width: 20px;
    height: 20px;
    align-self: center;
    margin: 0 10px;
    color: #81a7ffbf;
  }
`;
export const Wrapper = styled.div<any>`
  width: ${(props) => (props.show ? "100%" : "auto")};
  position: ${(props) => (props.show ? "fixed" : "inherit")};
  background-color: ${(props) => (props.show ? "#262434" : "transparent")};
  padding: 15px;
  z-index: ${(props) => (props.show ? "1" : "0")};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 5px;
  div${SearchWrap} {
    width: ${(props) => (props.show ? "70%" : "100%")};
    transition: 0.2s;
  }
`;
export const SearchField = styled.input`
  background-color: #fff;
  border: none;
  font-weight: 600;
  width: 100%;
  font-family: "Montserrat Alternates", sans-serif;
  padding: 10px 0;
  border-radius: 0 4px 4px 0;
  ::placeholder {
    color: rgba(0, 19, 62, 0.75);
  }
  :focus {
    outline: none;
    border: none;
  }
`;
export const IconsWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  svg {
    align-self: center;
    margin: 0 10px;
  }
`;
export const CatalogWrap = styled.button`
  border: none;
  background: transparent;
`;
