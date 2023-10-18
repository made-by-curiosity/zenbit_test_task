import { BgImg } from 'components/BgImg/BgImg';
import { Hero, Text, Title } from './HeroSection.styled';
import { Container } from 'components/Container/Container';
import { SecondaryLinkBtn } from 'components/SecondaryLinkBtn/SecondaryLinkBtn';

export const HeroSection = () => {
  return (
    <BgImg>
      <Container>
        <Hero>
          <Title>The chemical negatively charged</Title>
          <Text>
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </Text>
          <SecondaryLinkBtn href="#">Get Started</SecondaryLinkBtn>
        </Hero>
      </Container>
    </BgImg>
  );
};
