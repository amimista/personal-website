import { Avatar, Image } from "@nextui-org/react";
import PersonalAvatar from "@/../public/avatar.jpg";

export default function About() {
  return (
    <main className="flex flex-col gap-3 justify-center items-center">
      <div>
        <h1 className="text-xl text-slate-500 hover:text-inherit">
          Marcus Walker
        </h1>
        <h4 className="text-sm text-slate-500">
          University student studying Software Development
        </h4>
      </div>
      <div>
        <Image
          src={PersonalAvatar.src}
          className="rounded-[2rem]"
          width={200}
          isBlurred 
        />
      </div>
    </main>
  );
}
