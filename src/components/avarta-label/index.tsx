import Logout from "components/icons/logout";
import Stack from "components/stack";
import Typography from "components/Typography";
import { Color } from "utils/constants/color";
import { IconWrapper, LabelWrapper } from "./avarta-label-style";

export const AvartaLabel = () => {
  return (
    <LabelWrapper>
      <img src="/assets/images/avarta.svg" alt="profile" />
      <Stack gap="5px"  >
        <Typography weight="500" size="14px" color={Color.grey900}>
          Olivia Rhye
        </Typography>
        <Typography weight="400" size="14px" color={Color.grey500}>
          olivia@untitledui.com
        </Typography>
      </Stack>
       <IconWrapper>
            <Logout />
      </IconWrapper>
    </LabelWrapper>
  );
};

export default AvartaLabel;
