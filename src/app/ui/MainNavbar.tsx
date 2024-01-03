'use client';
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
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

export default function MainNavbar() {
  return (
    <div>
      <Navbar isBordered className="select-none">
        <NavbarBrand>
          <Link href="/" className="text-inherit text-xs">MW</Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4 text-2xs" justify="center">
          <NavbarItem>
            <Link color="foreground" className="text-xs" href="../about" >
              About Me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="text-xs" href="#">
              Projects
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="text-xs">
          <FontAwesomeIcon icon={faUser} />
        </NavbarContent>
      </Navbar>
    </div>
  );
}
