import CardDetail from "components/card-detail";
import { Column, Row } from "components/grid";
import Plus from "components/icons/plus";
import Stack from "components/stack";
import Typography from "components/Typography";
import { Color } from "utils/constants/color";

const CardDetails = () => {
  return (
    <Row>
      <Column md="30%">
        <Stack margin="19px 0" gap="5px">
          <Typography size="14px" color={Color.grey900} as="p" weight="500">
            Card details
          </Typography>
          <Typography color={Color.grey500} weight="400" size="14px" as="span">
            Select default payment method.
          </Typography>
        </Stack>
      </Column>
      <Column md="70%">
       <CardDetail />
       <Stack alignItems="center" gap="10px" direction="row">
        <Plus/>
        <Typography weight="500" size="14px" color={Color.grey500}>
        Add new payment method
        </Typography>
       </Stack>
      </Column>
    </Row>
  );
};

export default CardDetails;
