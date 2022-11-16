import Image from "next/image";
import { Typography } from "../Typography";
import guyInComputer from "../../styles/assets/guy-in-computer.svg";

export function Home() {
  return (
    <div className="flex justify-around flex-col p-5 pb-0 min-h-screen">
      <Typography>will.coding</Typography>
      <section className="flex justify-center items-center flex-col text-center gap-5 text-2xl pt-24">
        <Typography className="max-w-sm">
          Working to build{" "}
          <span className="text-brand-secondary">top-notch</span> software,
          using programming
          <span className="text-brand-secondary"> best practices.</span>
        </Typography>
        <a href="https://www.instagram.com/will.coding/">
          <button className="bg-brand-secondary hover:bg-brand rounded-lg pr-8 pl-8 pt-2 pb-2 text-lg line">
            Instagram
          </button>
        </a>
      </section>
      <Image
        width="384"
        src={guyInComputer}
        alt="3d model of guy in computer"
        className="self-center"
      />
    </div>
  );
}
