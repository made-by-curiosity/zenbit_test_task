import { useEffect, useState } from 'react';
import { Notify } from 'notiflix';

import { Section, SectionTitle } from './DealsSection.styled';

import { Container } from 'components/Container/Container';
import { Grid } from 'components/Grid/Grid';
import { DealCard } from 'components/DealCard/DealCard';

import { getAllDeals } from 'services/realEstateApi';
import { Loading } from 'components/Loading/Loading';

export const DealsSection = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const adverts = await getAllDeals();

        setDeals(adverts);
      } catch (error) {
        Notify.failure('Ops...Something went wrong. Please try again.');
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
      {!deals.length && <Loading />}
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
    </>
  );
};
