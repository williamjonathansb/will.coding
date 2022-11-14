import Image from "next/image";
import { Typography } from "../Typography";
import guyInComputer from "../../styles/assets/guy-in-computer.svg";

export function Home() {
  return (
    <div className="flex justify-around flex-col">
      <Typography>will.coding</Typography>
      <section className="flex justify-center items-center flex-col text-center gap-5 text-xl pt-24 pb-12">
        <Typography>
          Working to build{" "}
          <span className="text-brand-secondary">top-notch</span> software,
          using programming
          <span className="text-brand-secondary"> best practices.</span>
        </Typography>
        <button className="bg-brand rounded-lg pr-8 pl-8 pt-2 pb-2 text-xs line">
          Instagram
        </button>
      </section>
      <Image src={guyInComputer} alt="3d model of guy in computer" />
    </div>
  );
}
