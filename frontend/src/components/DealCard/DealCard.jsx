import { beautifyPrice } from 'utils/helpers/beautifyPrice';
import {
  CardInfoContainer,
  CardInfoItem,
  CardLink,
  CardTitle,
} from './DealCard.styled';

export const DealCard = ({ dealInfo }) => {
  const { building, sold, ticket, dhs, profitability, daysLeft, img } =
    dealInfo;

  return (
    <CardLink
      href="https://www.linkedin.com/in/vadym-agienko"
      target="_blank"
      rel="noreferrer"
      $bg_img={img}
    >
      <CardTitle>{building}</CardTitle>
      <CardInfoContainer>
        <CardInfoItem>{beautifyPrice(dhs)} Dhs</CardInfoItem>
        <CardInfoItem>Yield {profitability}</CardInfoItem>
        <CardInfoItem>Sold {sold}</CardInfoItem>
        <CardInfoItem>Ticket - {beautifyPrice(ticket)} Dhs</CardInfoItem>
        <CardInfoItem>Days left {daysLeft}</CardInfoItem>
      </CardInfoContainer>
    </CardLink>
  );
};
