// This is a Server Component. No "use client" needed.
export default function HeroSection() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-32 text-center md:py-40">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Hi, I'm Sheikh Abdullah
        </h1>
        <h2 className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl">
        20, Full-Stack Dev, i break things, learn fast, and make stuff happen.
        </h2>
        <p className="mx-auto max-w-2xl leading-relaxed text-gray-400">
          From real-time trading to casualty reporting systems, I build robust, scalable, and efficient solutions that solve real-world problems.
        </p>
      </div>
    </section>
  );
}
