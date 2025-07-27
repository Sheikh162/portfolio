import { skills } from '@/lib/data';

// This is the new Skills section, designed to fit the aesthetic.
// It's a Server Component, fetching data from the lib file.
export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tighter text-white md:text-5xl">
            Technical Proficiency
          </h2>
          <p className="mt-3 text-lg text-gray-400">
            My toolkit for building and shipping modern applications.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {skills.map((skillCategory) => (
            <div key={skillCategory.category} className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <skillCategory.icon className="h-8 w-8 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">{skillCategory.category}</h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-400">
                  {skillCategory.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
