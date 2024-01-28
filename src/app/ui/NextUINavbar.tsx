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
import { faM } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { faGithubAlt, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function NextUINavbar() {
  return (
      <Navbar isBordered>
        <NavbarBrand>
          <Link href="/" className="text-xs p-2">
            <FontAwesomeIcon icon={faM}/>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3" justify="center">
          <NavbarItem>
            <Link href="/../about" className="text-sm text-slate-500 hover:text-inherit transition-colors">About</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-sm text-slate-500 hover:text-inherit transition-colors">Projects</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-sm text-slate-500 hover:text-inherit transition-colors">Resume</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <a href="https://github.com/amimista"  target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-inherit transition-colors">
            <FontAwesomeIcon icon={faGithubAlt}/>
          </a>
          <Link href="/../youtube" className="text-slate-500 hover:text-inherit transition-colors">
            <FontAwesomeIcon icon={faYoutube}/>
          </Link>
        </NavbarContent>
      </Navbar>
  );
}
