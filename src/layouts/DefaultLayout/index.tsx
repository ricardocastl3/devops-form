import { Header } from "../../components/Header";
import { LayoutContainer } from "./styled";
import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header/>
      <Outlet />
    </LayoutContainer>
  );
}
