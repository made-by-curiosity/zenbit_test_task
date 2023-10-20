import styled from 'styled-components';

export const Hero = styled.section`
  min-height: 500px;
  height: 100vh;
  padding: 80px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 10px;

  text-align: center;
  font-family: 'Merriweather', serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.25;

  color: #fff;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 64px;
  }
`;

export const Text = styled.p`
  width: 300px;
  margin-bottom: 30px;

  text-align: center;
  font-size: 12px;
  line-height: 1.33;

  color: #fff;

  @media screen and (min-width: 768px) {
    width: 600px;
    margin-bottom: 30px;

    font-size: 18px;
    letter-spacing: -0.48px;
  }

  @media screen and (min-width: 1440px) {
    width: 822px;
    margin-bottom: 30px;

    font-size: 24px;
  }
`;
