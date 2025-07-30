import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="mb-8 text-4xl font-bold tracking-tighter text-white md:text-5xl">
            About Me
        </h2>
        <Card className="bg-dark-bg border-subtle-border text-left">
            <CardHeader>
                <CardTitle>A Passionate Builder</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg leading-relaxed text-gray-300">
                <p>
                A Computer Science student, building full-stack systems that are both efficient and elegant. My journey has taken me through developing complex trading platforms, creating compliant maritime reporting systems, and exploring the depths of computer vision.
                </p>
                <p>
                I thrive on clean architecture, real-time data challenges, and finding robust solutions to technical problems. I'm currently focused on deepening my expertise in distributed systems and database optimization to build the next generation of resilient web applications.
                </p>
            </CardContent>
        </Card>
    </section>
  );
}