import CoursesLanding from "@/components/landing/CoursesLanding";
import FaqLAnding from "@/components/landing/FaqLanding";
import Hero from "@/components/landing/Hero";
import LatestBlogs from "@/components/landing/LatestBlogs";
import LatestCourse from "@/components/landing/LatestCourse";
import LibraryLanding from "@/components/landing/LibraryLanding";
import Quotes from "@/components/landing/Quotes";
import Reason from "@/components/landing/Reason";

export default function Landing() {
  return (
    <div className="min-h-screen ">
        <Hero />
        <Reason />
        <CoursesLanding />
        <LatestCourse />
        <Quotes/>
        <LibraryLanding/>
        <LatestBlogs/>
        <FaqLAnding/>
    </div>
  );
}
