import Link from "next/link";
import { Spotlight } from "./Spotlight";
import { Button } from "./moving-border";

function HeroSection() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
            <Spotlight
                className="-top-32 left-0 md:-top-20 md:left-60"
                fill="white"
            />
            <div className="p-4 relative z-10 w-full text-center ">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold  bg-gradient-to-b from-neutral-50 to-neutral-400  bg-clip-text text-transparent">
                    Master the art of music
                </h1>
                <p className="text-base font-normal mt-2 sm:text-lg md:text-xl lg:text-2xl dark:text-gray-200 max-w-3xl mx-auto leading-relaxed text-center px-4">
                    Dive into our comprehensive music courses and Transform .<br />
                    your musical journey today. Whether you&#39;re a beginner or<br />
                    looking to refine your skills. Join us to unlock your true<br />
                    potential.
                </p>


            </div>

            <div className="mt-4">
                <Link href={"/course"}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-black dark:bg-slate-900 text-white dark:text-white border-neutral-900 dark:border-slate-800"
                    >
                        Explore Course
                    </Button>
                </Link>
            </div>
        </div>
    )
}
export default HeroSection;