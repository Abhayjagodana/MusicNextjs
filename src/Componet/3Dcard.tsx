"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import coursedata from '../Data/Music_course.json';
import Image from "next/image";

function Card() {
    return (
        <div>
            <div>
                <h1 className="text-center text-4xl md:text-6xl font-bold text-white my-8">
                    All Courses ({coursedata.courses.length})
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-8 m-4">
                {coursedata.courses.map((course) => (
                    <CardContainer className="inter-var" key={course.id}>
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                            <CardItem
                                translateZ={50}
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {course.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ={60}
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {course.description}
                            </CardItem>
                            <CardItem translateZ={100} className="w-full mt-4">
                                <Image
                                    src={course.image}
                                    height={240}
                                    width={480}
                                    alt={course.title}
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-10">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="#"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    Try now →
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    Sign up
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}

export default Card;
