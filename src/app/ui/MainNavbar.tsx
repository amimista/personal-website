import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Switch,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faMoon, faUser } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons/faSun";

export default function MainNavbar() {
  return (
    <div>
      <Navbar isBordered>
        <NavbarBrand>
          <p className="font-bold text-inherit">MW</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#" unselectable="on">
              About Me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Contact Me
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <FontAwesomeIcon icon={faUser} />
        </NavbarContent>
      </Navbar>
    </div>
  );
}
