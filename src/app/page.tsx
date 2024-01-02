import Image from "next/image";
import { Button } from "@nextui-org/button";
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

export default function Home() {
  return (
    <main>
      <Navbar isBordered>
        <NavbarBrand>
          <p className="font-bold text-inherit">MW</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              About Me
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
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
          <Switch
            defaultSelected
            size="lg"
            color="success"
            startContent={<FontAwesomeIcon icon={faSun} />}
            endContent={<FontAwesomeIcon icon={faMoon} />}
          />
          <FontAwesomeIcon icon={faUser} />
        </NavbarContent>
      </Navbar>
    </main>
  );
}
