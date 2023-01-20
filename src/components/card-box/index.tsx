import Stack from "components/stack";
import Typography from "components/Typography";
import { Color } from "utils/constants/color";
import { BoxWrapper } from "./card-box-style";

const CardBox = () => {
  return (
    <BoxWrapper>
      <Typography  as="span" size="0.8rem" weight="500" color={Color.grey900}>
        New features available!
      </Typography>
      <Typography lHeight="1rem" as="span" size="12px" weight="400" color={Color.grey500}>
        Check out the new dashboard view. Pages now load faster.
      </Typography>
      <img src="/assets/images/picture.svg" />
      <Stack gap="10px" direction="row">
        <Typography as="span" size="14px" weight="500" color={Color.grey500}>
          Dismiss
        </Typography>
        <Typography as="span" size="14px" weight="500" color={Color.primary700}>
          What’s new?
        </Typography>
      </Stack>
    </BoxWrapper>
  );
};

export default CardBox;
