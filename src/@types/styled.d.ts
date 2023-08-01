import "styled-components";
import { defaultTheme } from "../styles/theme/default";

type ThemeType = typeof defaultTheme;

export module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
