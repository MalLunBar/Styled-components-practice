import styled from "styled-components"

const ButtonStyled = styled.button`
  background-color: black;
  border-radius: 12px;
  color: white; 
  display: flex;
  width: 303px;
  height: 48px;
  align-items: center; 
  font-size: 18px;
  padding: 0 16px;
  gap: 16px; 
`

const IconStyled = styled.img`
  width: 31px;
  height: 31px;
`

const Button = ({ icon, text }) => {
  return (
    <ButtonStyled>
      <IconStyled src={icon} alt="bla">

      </IconStyled>

      <p>{text}</p>
    </ButtonStyled>
  )
}

export default Button