import { education } from "@/lib/data";
import { GraduationCap, BookOpen } from "lucide-react";

// New section based on resume content.
export default function EducationSection() {
  return (
    <section id="education" className="border-t border-white/10 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
                <h2 className="text-4xl font-bold tracking-tighter text-white md:text-5xl">
                    Education & Coursework
                </h2>
                <p className="mt-3 text-lg text-gray-400">
                    My academic foundation in computer science.
                </p>
            </div>

            <div className="grid gap-12 md:grid-cols-5">
                {/* Left Column: University Details */}
                <div className="rounded-lg border border-white/10 p-6 md:col-span-2">
                    <div className="mb-4 flex items-center gap-4">
                        <GraduationCap className="h-8 w-8 text-purple-400" />
                        <h3 className="text-2xl font-semibold text-white">{education.university}</h3>
                    </div>
                    <p className="text-gray-300">{education.degree}</p>
                    <p className="text-gray-400">{education.duration}</p>
                    <p className="mt-1 text-sm font-medium text-purple-400">{education.cgpa}</p>
                </div>

                {/* Right Column: Relevant Coursework */}
                <div className="rounded-lg border border-white/10 p-6 md:col-span-3">
                     <div className="mb-4 flex items-center gap-4">
                        <BookOpen className="h-8 w-8 text-purple-400" />
                        <h3 className="text-2xl font-semibold text-white">Relevant Coursework</h3>
                    </div>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-300">
                        {education.courses.map(course => (
                            <li key={course} className="flex items-center gap-2">
                                <span className="text-purple-400">&#8226;</span>
                                {course}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
