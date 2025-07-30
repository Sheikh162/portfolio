import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-7xl py-12 md:py-16">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-wide-xl text-muted-foreground">
        Technical Proficiency
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {skills.map((skillCategory) => (
          <Card key={skillCategory.category}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-mono text-base text-card-foreground">
                <skillCategory.icon size={18} />
                {skillCategory.category}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skillCategory.items.map((item) => (
                <Badge key={item} variant="secondary">{item}</Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}