import { useEffect, useState } from 'react';

import { Section, SectionTitle } from './DealsSection.styled';

import { Container } from 'components/Container/Container';
import { Grid } from 'components/Grid/Grid';
import { DealCard } from 'components/DealCard/DealCard';

import { getAllDeals } from 'services/realEstateApi';

export const DealsSection = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    (async () => {
      const adverts = await getAllDeals();

      setDeals(adverts);
    })();
  }, []);

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
