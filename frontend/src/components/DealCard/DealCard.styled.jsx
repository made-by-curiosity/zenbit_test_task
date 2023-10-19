import styled from 'styled-components';

export const CardLink = styled.a`
  width: 630px;
  height: 400px;
  padding: 0 0 20px 14px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-color: rgba(211, 211, 211, 0.5);
  background-image: url(${props => props.$bg_img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  transition: opacity 200ms ease-out;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.9;
  }
`;

export const CardTitle = styled.p`
  margin-bottom: 5px;

  font-family: 'Merriweather', serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.7;

  color: #fff;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 60px;
  row-gap: 10px;
`;

export const CardInfoItem = styled.span`
  width: 170px;

  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.22;

  color: #fff;

  &:nth-child(3) {
    width: 156px;
  }
`;
