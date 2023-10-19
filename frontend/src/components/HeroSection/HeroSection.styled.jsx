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
  font-size: 64px;
  font-weight: 700;
  line-height: 1.25;

  color: #fff;
`;

export const Text = styled.p`
  width: 822px;
  margin-bottom: 30px;

  text-align: center;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  line-height: 1.33;
  letter-spacing: -0.48px;

  color: #fff;
`;
