import { Container } from "components/grid";
import NavBar from "components/nav-bar";
import { Sidebar } from "../components";
import { SMain } from "./layout-style";

type Iprops = {
  children: JSX.Element;
};

const Layout: React.FC<Iprops> = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <SMain>
      <NavBar /> 
        <Container margin="auto">{children}</Container>
      </SMain>
    </div>
  );
};

export default Layout;
