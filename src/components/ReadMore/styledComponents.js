import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 8px 5px 0px #ffffff;
`
export const ReactHeading = styled.h1`
  color: #1e293b;
  font-size: 20px;
  font-family: 'Roboto';
`
export const Text = styled.p`
  color: #334155;
  font-size: 12px;
  font-family: 'roboto';
`
export const ReactImage = styled.img`
  height: 300px;
  width: 500px;
`
export const ReactText = styled.p`
  color: #334155;
  font-size: 12px;
  font-family: 'roboto';
  text-align: center;
  align-self: center;
  width: 500px;
`
export const ReactBtn = styled.button`
  color: #fff;
  border-radius: 5px;
  border: none;
  padding: 10px;
  font-size: 12px;
  background-color: #1f81ff;
  @media screen and(max-width:576px) {
    align-self: left;
  }
`
