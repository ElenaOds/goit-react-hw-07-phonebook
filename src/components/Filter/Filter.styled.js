import styled from '@emotion/styled';

export const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: left;

`;

export const Label = styled.label`
display: block;
align-items: center;
  font-size: 20px;
  text-align: left;
  width: 30%;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  display: block;
  padding: 10px;
  width: 30%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;


  &:focus,
  &:hover {
   border: 3px solid #89CFF0;
   outline: inherit;
`;