import { HeaderBottom, HeaderContainer, HeaderGroup } from "./styled";
import { User } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <HeaderGroup>
          <User size={20} />
          Develop:{" "}
          <a
            href="https://www.linkedin.com/in/ricardocastles/"
            target="__blank"
          >
            Ricardo Castle
          </a>
        </HeaderGroup>
        <HeaderGroup>❤️🛩️ Buy me a coffe</HeaderGroup>
      </div>
      <HeaderBottom>
        
        <HeaderGroup>
          <a
            href="https://github.com/ricardocastl3"
            target="__blank"
          >
            <img src="src/assets/github.png" height="20" width="20" />
            Github
          </a>
        </HeaderGroup>

        <HeaderGroup>
          <a
            href="https://www.youtube.com/@ricardocoder"
            target="__blank"
          >
            <img src="src/assets/youtube.png" height="20" width="20" />
            YouTube
          </a>
        </HeaderGroup>

        <HeaderGroup>
          <a
            href="https://www.linkedin.com/in/ricardocastles/"
            target="__blank"
          >
            <img src="src/assets/linkedin.png" height="20" width="20" />
            LinkedIn
          </a>
        </HeaderGroup>

      </HeaderBottom>
    </HeaderContainer>
  );
}
