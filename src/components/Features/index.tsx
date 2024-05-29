// Ensure that 'lib/utils' and '@/components/magicui/grid-pattern' are properly imported
import { cn } from "utils/cn";
import GridPattern from "@/components/magicui/grid-pattern";
import { MagicCard, MagicContainer } from "../magicui/magiccard";
import Image from 'next/image';
import quality from "@/components/images/quality.png"
import trust from "@/components/images/trust.png";
import efficiency from "@/components/images/efficient.png";
import DotPattern from "@/components/magicui/dotpattern";


const Choose = () => {
  return (
    <>
    <div className="container" id="whyus">
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
      <p className="z-10 whitespace-pre-wrap text-center text-3xl lg:text-5xl font-medium tracking-tighter text-black dark:text-white">
      Why Choose Us
      </p>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
    <MagicContainer
      className={
        "flex h-auto w-full flex-col gap-4 lg:h-auto lg:flex-row justify-center items-center text-center"
      }
    >
<MagicCard className="flex lg:w-full min-h-full cursor-pointer flex-col items-center justify-center overflow-hidden p-10 shadow-2xl">
  <div className="flex flex-col items-center">
    <Image src={quality} alt="best quality" width={100} height={100} className="mb-5"/>
    <h2 className="dark:text-white text-black text-2xl font-medium mb-5 mt-5 text-center">Quality</h2>
    <p className="text-gray-400 text-center">We provide high-grade industrial fuel oil that meets top industry standards for performance and reliability.</p>
  </div>
  <div className="pointer-events-none absolute inset-0 h-full" />
</MagicCard>

<MagicCard className="flex lg:w-full min-h-full cursor-pointer flex-col items-center justify-center overflow-hidden p-10 shadow-2xl">
  <div className="flex flex-col items-center">
    <Image src={trust} alt="trustworthy" width={100} height={100} className="mb-5"/>
    <h2 className="dark:text-white text-black text-2xl font-medium mb-5 mt-5 text-center">Trustworthy</h2>
    <p className="text-gray-400 text-center">With years of experience, we are a reliable partner committed to transparency and integrity in every deal.</p>
  </div>
  <div className="pointer-events-none absolute inset-0 h-full" />
</MagicCard>

<MagicCard className="flex lg:w-full min-h-full cursor-pointer flex-col items-center justify-center overflow-hidden p-10 shadow-2xl">
  <div className="flex flex-col items-center">
    <Image src={efficiency} alt="efficiency" width={100} height={100} className="mb-5"/>
    <h2 className="dark:text-white text-black text-2xl font-medium mb-5 mt-5 text-center">Efficiency</h2>
    <p className="text-gray-400 text-center">Our efficient processes and timely deliveries keep your operations running smoothly without delays.</p>
  </div>
  <div className="pointer-events-none absolute inset-0 h-full" />
</MagicCard>


      
    </MagicContainer>

   
    {/* <MagicContainer
      className={
        "flex h-auto w-full flex-col gap-4 lg:h-auto lg:flex-row mt-10"
      }
    >
      <MagicCard className="flex lg w-full min-h-h-full cursor-pointer flex-col items-start justify-start overflow-hidden p-10 shadow-2xl">
      <div className="">
        
        <h2 className="dark:text-white text-black text-2xl font-medium mb-5 mt-5">Commitment</h2>
        <p className="text-gray-400">We are committed to our clients success, going above and beyond to deliver exceptional results on time and within budget.</p>
      </div>
        <div className="pointer-events-none absolute inset-0 h-full " />
      </MagicCard>
      <MagicCard className="flex w-full cursor-pointer flex-col items-start justify-start overflow-hidden p-10 shadow-2xl">
      <div className="">
        
        <h2 className="dark:text-white text-black text-2xl font-medium mb-5 mt-5">Trustworthy</h2>
        <p className="text-gray-400">We build trust through transparency, integrity, and reliability, fostering long-lasting relationships with our clients.</p>
      </div>
        <div className="pointer-events-none absolute inset-0 h-full " />
      </MagicCard>
      <MagicCard className="flex w-full cursor-pointer flex-col items-start justify-start overflow-hidden p-10 shadow-2xl">
      <div className="">
        
        <h2 className="dark:text-white text-black text-2xl font-medium mb-5 mt-5">Creative</h2>
        <p className="text-gray-400"> We infuse creativity and innovation into every project, delivering unique and engaging solutions that captivate audiences.</p>
      </div>
        <div className="pointer-events-none absolute inset-0 h-full " />
      </MagicCard>

      
    </MagicContainer> */}
    </div>
</>
  );
};

export default Choose;