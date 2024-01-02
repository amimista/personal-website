import Image from "next/image";
import { Button } from "@nextui-org/button";
import PersonalAvatar from "@/../public/avatar.jpg";
import { Skeleton } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faGithub, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faClock, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="h-100 flex justify-center py-3">
      <div className="w-1/2 px-6">
        <h1 className="text-xl">Marcus Walker</h1>
        <p className="text-sm text-slate-400">
          I'm a university student while learning web-developement
        </p>
        <div className="flex flex-row p-4 gap-3">
          <Image
            src={PersonalAvatar}
            alt="Avatar"
            height={100}
            width={100}
            className="rounded-full"
          />
          <div className="flex flex-col gap-3 h-3/4 flex-grow ">
            <div className="flex flex-row flex-grow gap-3 items-center text-2xl">
              <FontAwesomeIcon icon={faGithub} />
              <Skeleton className="h-4 w-1/2 rounded-md" />
            </div>
            <div className="flex flex-row flex-grow gap-3 items-center text-2xl">
              <FontAwesomeIcon icon={faYoutubeSquare} />
              <Skeleton className="h-4 w-1/2 rounded-md" />
            </div>
            <div className="flex flex-row flex-grow gap-3 items-center text-xs text-slate-400">
              <FontAwesomeIcon icon={faClock} />
              <p>Mountain Daylight Time (UTC/GMT -7 hours)</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-300 text-wrap">
          I'm a university student majoring in Software Development. I love
          photography and learning more about the computer science professional
          field. I also make youtube videos occasionally. Its gaming for now,
          but I hope to make more lifestyle and tech-centric videos in the
          future.
        </p>
        <div className="flex gap-3 py-3 text-slate-500 text-xs">
          <div>
            <FontAwesomeIcon icon={faPlus} /> Email Me
          </div>
          <div>
            <FontAwesomeIcon icon={faPlus} /> More ways to find me
          </div>
        </div>
      </div>
    </div>
  );
}
