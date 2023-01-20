import Button, { ButtonGroup } from "components/button";
import Divider from "components/divider";
import {  Container} from "components/grid";
import NavBar from "components/nav-bar";
import Stack from "components/stack";
import Typography from "components/Typography";
import { Color } from "utils/constants/color";
import TabList from "utils/dummies/tab-list";
import BillingHistory from "./section/billing-history";
import CardDetails from "./section/card-details";
import ContactEmail from "./section/contact-email";

const DashboardContainer = () => {
  return (
    <Container>
      <Stack gap="5px" margin="1rem 0">
        <Typography color={Color.grey900} as="h2" weight="500">
          Settings
        </Typography>
        <Typography color={Color.grey500} weight="400" size="16px" as="span">
          Manage your team and preferences here.
        </Typography>
      </Stack>
      <ButtonGroup margin="10px 1px">
        {TabList.map((tab, i) => (
          <Button key={i} borderRadius={tab.radius}>
            {tab.title}
          </Button>
        ))}
      </ButtonGroup>

       <Stack margin="19px 0" gap="5px">
        <Typography size="18px" color={Color.grey900} as="p" weight="500">
          Payment method
        </Typography>
        <Typography color={Color.grey500} weight="400" size="14px" as="span">
          Manage your team and preferences here.
        </Typography>
      </Stack> 
      <Stack margin="19px 0" gap="5px">
        <Divider />
      </Stack>
      <ContactEmail />
      <Stack margin="19px 0" gap="5px">
        <Divider />
      </Stack>
      <CardDetails />
      <BillingHistory />
    </Container>
  );
};

export default DashboardContainer;
