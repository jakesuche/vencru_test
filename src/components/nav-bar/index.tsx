import Logo from "components/icons/logo";
import Menu from "components/icons/menu";
import Stack from "components/stack";
import Typography from "components/Typography";
import useMicsStore from "store/miscellaneous";
import { Color } from "utils/constants/color";
import { Nav } from "./nav-bar-style";

function NavBar() {
  const { toggleSiderBar } = useMicsStore();
  return (
    <Nav>
      <Stack gap="10px" alignItems="center" direction="row">
        <Logo />
        <Typography weight="500" size="1.2rem" color={Color.grey700}>Untitled UI</Typography>
      </Stack>
      <a
        onClick={() => {
          toggleSiderBar();
        }}
      >
        <Menu />
      </a>
    </Nav>
  );
}

export default NavBar;
