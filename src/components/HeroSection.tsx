export default function HeroSection() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col justify-center py-24 text-left md:py-32">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl">
          Hi, I'm Sheikh Abdullah
        </h1>
        <h2 className="font-mono text-xl text-muted-foreground md:text-2xl">
          20, Full-Stack Dev, i break things, learn fast, and make stuff happen.
        </h2>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          From real-time trading to casualty reporting systems, I build robust, scalable, and efficient solutions that solve real-world problems.
        </p>
      </div>
    </section>
  );
}