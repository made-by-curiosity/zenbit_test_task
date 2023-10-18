import styled from 'styled-components';

export const Hero = styled.section`
  min-height: 500px;
  height: 100vh;
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 10px;

  text-align: center;
  font-family: 'Merriweather', serif;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.25;

  color: #fff;
`;

export const Text = styled.p`
  margin-bottom: 30px;

  text-align: center;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  line-height: 1.33;
  letter-spacing: -0.48px;

  color: #fff;
`;
