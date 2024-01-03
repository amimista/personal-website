import Image from "next/image";
import { Button } from "@nextui-org/button";
import PersonalAvatar from "@/../public/avatar.jpg";
import GithubBanner from "@/../public/gihub-banner.png";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Radio,
  RadioGroup,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faBoltLightning,
  faEllipsis,
  faFire,
  faHeart,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="h-dvh static flex flex-col gap-3 justify-center items-center bg-gradient-to-br from-slate-950 via-sky-950 to-indigo-800 ">
      <div className="flex justify-center gap-3">
        <Avatar
          src={PersonalAvatar.src}
          size="lg"
          className="hidden md:inline"
        />
        <Card
          isBlurred
          className="w-3/4 md:w-1/2 border-none bg-background/60 dark:bg-default-100/50 hover:text-zinc-50"
        >
          <CardBody className="inline-block text-center text-xl">
            Hello and welcome! I{"'"}m a student at the University of Utah
            studying Software Development. Go ahead and take a look at my work
            through the tabs.{" "}
            <FontAwesomeIcon
              icon={faHeart}
              className="hover:text-rose-500 transition-colors"
            />
          </CardBody>
        </Card>
      </div>
      <div className="flex gap-3">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            src={GithubBanner}
            className="object-cover"
            height={200}
            width={200}
            alt="Github banner"
          />
          <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden p-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <Link href="https://github.com/amimista">
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </Button>
            </Link>
            <p className="text-tiny text-white/80 font-mono px-1"> @amimista</p>
          </CardFooter>
        </Card>
        <Card
          isBlurred
          radius="lg"
          className="w-3/4 bg-background/60 dark:bg-default-100/50 border-none"
        >
          <CardHeader>Where did you come from? 🤔</CardHeader>
          <Divider />
          <CardBody>
            <RadioGroup>
              <Radio value="referral">Heard of me from somewhere</Radio>
              <Radio value="resume">Checking my resume</Radio>
              <Radio value="random">Just browsin&apos; around</Radio>
            </RadioGroup>
          </CardBody>
        </Card>
      </div>
      <footer className="absolute bottom-0 flex flex-col justify-center text-slate-500">
        <FontAwesomeIcon icon={faEllipsis} />
        <div className="flex align-center gap-2">
          <a
            href="https://github.com/amimista/personal-website"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition-colors"
          >
            Repo <FontAwesomeIcon icon={faBoltLightning} />
          </a>
          <p>
            Made with the powers of{" "}
            <Link
              href="https://nextjs.org"
              className="hover:text-orange-500 transition-colors"
            >
              Next.js <FontAwesomeIcon icon={faFire} />
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
