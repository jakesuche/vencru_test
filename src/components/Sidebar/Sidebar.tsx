import {
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLogo,
  SSidebar,
} from "./styles";

import { linksArray, linksArray2 } from "./local-util";
import useMicsStore from "../../store/miscellaneous";
import Logo from "components/icons/logo";
import Input from "components/input";
import Stack from "components/stack";
import Search from "components/icons/search";
import CardBox from "components/card-box";
import Divider from "components/divider";
import AvartaLabel from "components/avarta-label";
import Typography from "components/Typography";
import { Color } from "utils/constants/color";

const Sidebar = () => {
  const { openSidebar } = useMicsStore();

  return (
    <SSidebar isOpen={openSidebar}>
      <SLogo>
        <SLink href="#" style={!openSidebar ? { width: `fit-content` } : {}}>
          <SLinkIcon>
            <Logo />
          </SLinkIcon>
          <Typography weight="500" size="1.2rem" color={Color.grey700}>
            Untitled UI
          </Typography>
        </SLink>
      </SLogo>
      <Stack justifyContent="center" alignItems="center">
        <Input placeholder="Search" maxWidth="200px" icon={<Search />} />
      </Stack>
      {linksArray.map(({ icon, label, id, show }) => (
        <SLinkContainer key={id}>
          {show && <span className="bagde">10</span>}
          <SLink href="#" style={!openSidebar ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
          </SLink>
        </SLinkContainer>
      ))}
      <br />
      {linksArray2.map(({ icon, label, id }) => (
        <SLinkContainer key={id}>
          <SLink href="#" style={!openSidebar ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            <SLinkLabel>{label}</SLinkLabel>
          </SLink>
        </SLinkContainer>
      ))}
      <Stack justifyContent="center" alignItems="center">
        <CardBox />
      </Stack>
      <Divider gap="1.4rem 10px" />
      <Stack justifyContent="center" alignItems="center">
        <AvartaLabel />
      </Stack>
    </SSidebar>
  );
};

export default Sidebar;
