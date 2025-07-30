// src/components/EducationSection.tsx
import { education } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";

export default function EducationSection() {
  return (
    <section id="education" className="mx-auto w-full max-w-7xl py-12 md:py-16">
        <h2 className="mb-8 font-mono text-sm uppercase tracking-wider text-muted-foreground">
            Education
        </h2>
        <Card>
          <CardHeader>
            <div className="flex flex-col justify-between md:flex-row md:items-center">
              <div>
                <CardTitle>{education.university}</CardTitle>
                <CardDescription>{education.degree}</CardDescription>
              </div>
              <p className="mt-2 font-mono text-sm text-muted-foreground md:mt-0">{education.duration}</p>
            </div>
          </CardHeader>
          <CardContent>
            <h4 className="mb-2 font-mono text-sm text-muted-foreground">Relevant Coursework:</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
                {education.courses.join(', ')}
            </p>
          </CardContent>
        </Card>
    </section>
  )
}