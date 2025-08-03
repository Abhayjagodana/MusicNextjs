import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect"

function UpcominWebinar() {

    const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
    return (
        <div className='py-12 bg-gray-900'>
            <div className="text-center">
                <h2 className="text-2xl font-bold uppercase text-teal-500">
                    Feature webinars
                </h2>
                <p className='font-bold text-4xl text-white mt-2'>Enhance your musical journey</p>

                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={projects} />
                </div>

                <div className='mt-20'>
                    <Link
                        href={"/course"}
                        className="bg-white text-black px-4 py-2 font-semibold rounded inline-block"
                    >
                        View All Webinars
                    </Link>
                </div>
            </div>


        </div>
    )
}
export default UpcominWebinar