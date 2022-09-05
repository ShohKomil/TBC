import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

export const Container = styled.div`
width: 70%;
  margin: auto;

header{
  display: flex;
  align-items: center;
  justify-content:space-between ;
 
}
 nav{
    display: flex;
  }
  select{
    border: none;
    margin-right:15px ;
    outline:#F9F8F6 ;
  }
  .btn{
    border-radius: 10px;
    padding: 15px;
    margin-right: 15px;
    border: none;
    background-color: #F9F8F6;
  }
  .blue-btn{
    background-color: #00A2B7;
    color: white;
    padding:15px 20px ;
    border-radius: 15px;
    border: 1px #E0DFDD solid;
    /* margin-left:10px ; */
  }
  i{
    font-size: 20px;
  }
`

export const Logo = styled(logo)`

`





