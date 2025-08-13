import styled from "styled-components";
import { flexCenter, flexCenterColumn } from "../../styles/common";
import theme from "../../styles/theme";

const S = {}

  S.Box = styled.div`
    border: solid 1px black;
  `;

  S.P = styled.p`
    font-size: 14px;
  ` ;

  S.Div03 = styled.div`
    width: 300px;
    height: 300px;
    background-color: blue;
  `;

  S.Button03 = styled.button`
    font-size: 30px;
    border: solid 2px red;
  `;

  S.P04 = styled.p`
    color: ${(props) => props.fontColor};
  `;

  S.H104 = styled.h1`
    color: ${(props) => props.color};
  `;

  S.Box05 = styled.div`
    width: 300px;
    height: 300px;
    border: solid 1px blue;
    ${flexCenter}
  `;

  S.Ul05 = styled.ul`
    ${flexCenter};
  `;

  S.Form06 = styled.form`
    ${flexCenterColumn};

    & input{
      width: 200px;
      height: 52px;
    }
  `;

  S.Wrap06 = styled.div`
    ${flexCenterColumn}

    & > span{
      font-weight: 800;
    }
  `;

  S.Test = styled.p`  
    font-family: 'WantedSansStd-ExtraBlack';
    font-weight: 950;
  `;

  S.ThemeButton = styled.button`  
    background-color: ${(props) => props.theme.PALLETE.primary.main};
    font-size: ${({theme}) => theme.FONT_SIZE["h1"]};
    line-height: ${({theme}) => theme.FONT_LINE["h1"]};
  `;

  S.InputTextColor = styled.input`
    color: ${({theme}) => theme.PALLETE.secondary};
    background-color: ${({theme}) => theme.PALLETE.secondary.gray};
  `;
export default S;