import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
   flex-direction: column;
    gap: 5px;
    width: 300px;
   `;

export const Item = styled.li`
    display: flex;
    gap: 10px;
    align-items: center;
    height: 30px;
`;

export const Name = styled.p`
    font-weight: 600;
`;

export const Button = styled.button`
    margin-left:auto;
    height: 20px;
   cursor: pointer;
`;