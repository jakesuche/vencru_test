
import CheckMark from "components/icons/checkmark";
import Stack from "components/stack";
import Typography from "components/Typography";
import { Color } from "utils/constants/color";
import CardDetailsList from "utils/dummies/card-details-list";
import { DetailContent, DetailWrapper, PaymentIcon } from "./card-detail-style";

const CardDetail = () => {
  return (
    <>
      {CardDetailsList.map((Item) => (
        <DetailWrapper key={`${Item.type}`}>
        <span className="check_mark">
        <CheckMark />
        </span>
          <DetailContent>
            <PaymentIcon>{Item.icon}</PaymentIcon>
            <Stack gap="3px">
              <Typography
                className="card-type"
                color={Color.grey700}
                as="p"
                weight="500"
                size="14px"
              >
                Visa ending in 1234
              </Typography>
              <Typography color={Color.grey500} className="expire-date" weight="400" size="14px">
                Expiry 06/2024
              </Typography>
             <Stack gap="9px" direction="row">
             <Typography color={Color.grey500}  className="as-default" margin="6px 0" weight="500" size="14px">
                Set as default
             </Typography>
             <Typography color={Color.primary700} margin="6px 0" weight="500" size="14px">
               Edit
             </Typography>
             </Stack>
            </Stack>
          </DetailContent>
        </DetailWrapper>
      ))}
    </>
  );
};

export default CardDetail;
