"use client";
import Link from 'next/link';
import coursedata from '../Data/Music_course.json';
import { BackgroundGradient } from './ui/background-gradient';
interface Courses {

    id: string,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,


}
function FeatureCourse() {
    const featuredcourse: Courses[] = coursedata.courses.filter((course: Courses) => course.isFeatured
    ); return (
        <div className='py-12 bg-gray-900'>
            <div className="text-center">
                <h2 className="text-2xl font-bold uppercase text-teal-500">
                    Feature Course
                </h2>
                <p className='font-bold text-4xl text-white mt-2'>Learn with the best</p>

                <div className='mt-10 p-8 '>
                    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center  '>
                        {featuredcourse.map((course: Courses) => (
                            <BackgroundGradient key={course.id} className='flex flex-col rounded-[22px] bg-black dark:bg-zinc-900 overflow-hidden h-full max-w'>
                               
                                <p className="text-base text-white-700 text-center mt-4 px-4 text-2xl">{course.title}</p>
                                <p className='text-base text-white-700 text-center mt-4 px-4 text-xl'>{course.description}</p>
                                
                                <Link
                                            href={`/course/${course.slug}`}
                                            className=" text-white px-4 py-4 font-semibold rounded inline-block"
                                        >
                                            Leran More
                                        </Link>
                            </BackgroundGradient>
                        ))}
                    </div>
                </div>

                <div className='mt-20'>
                    <Link
                        href={"/course"}
                        className="bg-white text-black px-4 py-2 font-semibold rounded inline-block"
                    >
                        View All Courses
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FeatureCourse;
