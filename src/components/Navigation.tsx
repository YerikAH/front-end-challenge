// styles
import {
  HeaderStyle,
  HeadlinePrincipal,
  ImageLogo,
  NavStyle,
  TextDecoration,
} from "../styles/navigation_style";

// images
import logo from "../assets/logo.svg";

export default function Navigation() {
  return (
    <HeaderStyle>
      <NavStyle>
        <ImageLogo src={logo} />
        <HeadlinePrincipal>Challenge Completed</HeadlinePrincipal>
        <TextDecoration> by Harvey Yerik</TextDecoration>
      </NavStyle>
    </HeaderStyle>
  );
}
