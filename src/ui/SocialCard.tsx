'use client';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Card, CardFooter, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type SocialCardProps = {
  banner: StaticImageData;
  href: string;
  handle: string;
}

export const SocialCard = ({banner, href, handle}:SocialCardProps,) => {
  return <Card isFooterBlurred radius="lg" className="border-none">
    <Image
      src={banner}
      className="object-cover"
      height={200}
      width={200}
      alt="Github banner"
    />
    <CardFooter className="justify-start before:bg-white/10 border-white/20 border-1 overflow-hidden p-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <Link href={href}>
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
      <p className="text-tiny text-white/80 font-mono px-1">{' '}{handle}</p>
    </CardFooter>
  </Card>;
};