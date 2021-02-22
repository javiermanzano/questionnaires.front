import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 700px;
`;

export const Title = styled.h2`
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 30px;
  background-color: #a2ded0;
  cursor: pointer;
`;

export const FormLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FormRow = styled.div`
  font-size: 16px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${props => props.horizontal && 'flex-direction: row;'}
`;

export const Label = styled.label`
  margin-bottom: 10px
`;

export const Input = styled.input`
  height: 30px;
  width: 400px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const ErrorLabel = styled.span`
  color: red;
`;