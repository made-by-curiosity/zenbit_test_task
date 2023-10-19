import { Container } from 'components/Container/Container';
import { Section, SectionTitle } from './DealsSection.styled';
import { Grid } from 'components/Grid/Grid';
import { deals } from 'mockdata/deals';
import { DealCard } from 'components/DealCard/DealCard';

export const DealsSection = () => {
  return (
    <Section>
      <Container>
        <SectionTitle id="deals-section">Open Deals</SectionTitle>
        <Grid>
          {deals.map(deal => (
            <li key={deal.id}>
              <DealCard dealInfo={deal} />
            </li>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
