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

export default function MainNavbar() {
  return (
      <nav className="mx-auto px-4 md:px-6 lg max-w-[500px] flex justify-between items-center gap-3 select-none">
        <div>
          <Link href="/" className="text-xs p-2">
            <FontAwesomeIcon icon={faM}/>
          </Link>
        </div>
        <ul className="flex gap-3">
          <li>
            <Link href="/../about" className="text-xs text-slate-500 hover:text-inherit transition-colors">About</Link>
          </li>
          <li>
            <Link href="#" className="text-xs text-slate-500 hover:text-inherit transition-colors">Projects</Link>
          </li>
          <li>
            <Link href="#" className="text-xs text-slate-500 hover:text-inherit transition-colors">Resume</Link>
          </li>
        </ul>
        <div className="flex flex-row gap-3 text-xs p-2">
          <a href="https://github.com/amimista"  target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-inherit transition-colors">
            <FontAwesomeIcon icon={faGithubAlt}/>
          </a>
          <Link href="/../youtube" className="text-slate-500 hover:text-inherit transition-colors">
            <FontAwesomeIcon icon={faYoutube}/>
          </Link>
        </div>
      </nav>
  );
}
