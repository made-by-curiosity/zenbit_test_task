import styled from 'styled-components';

export const PageHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: 80px;
  padding: 18px 0;

  display: flex;
  align-items: center;

  background-color: #172234;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.06),
    0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const HeaderWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;
