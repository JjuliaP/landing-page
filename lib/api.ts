
import client from './sanity';
import type {HeroData} from "~/types/heroData.type.js";
import type {CourseData} from "~/types/courseData.type";
import type {BundleAccess} from "~/types/bundleAccess.type";

export async function getHeroData(): Promise<HeroData[]> {
    return await client
        .fetch(`*[_type == "hero"]{titleFirstPart, highlightedTitle, titleLastPart, paragraph, buttonText}`);
}

export async function getCoursesData(): Promise<CourseData[]> {
    return await client
        .fetch(`*[_type == "courses"]{video, courses, hours }`);
}

export async function getBundleAccessList(): Promise<BundleAccess[]> {
    return await client
        .fetch(`*[_type == "bundleAccessList"]{data, title, 'icon': icon.asset->url, showMasterclass, order}`);
}