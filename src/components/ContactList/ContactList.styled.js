import styled from '@emotion/styled';

export const List = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
`;

export const ListItem = styled.li`
margin-bottom: 20px;
`;

export const Button = styled.button`
display: inline-block;
margin-left: 10px;
padding: 5px;
background-color: #fff;
font-size: 14px;
width: 70px;
box-shadow: 3px 6px 20px rgba(0.12, 0.12, 0.12, 0.12), 
1px 3px 4px rgba(0, 0, 0, 0.14), 
0px 0px 2px rgba(0, 0, 0, 0.2);
border-radius: 5px;
border: inherit;
cursor: pointer;


&:focus,
&:hover {
    border: 3px solid #89CFF0;
    outline: inherit;
}
`;