import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { ThemeToggle } from "@/components/theme-toggle";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words = ["amazing", "revolutionary", "incredible", "awesome"];

  return (
    <div className="font-sans flex items-center justify-center min-h-screen relative overflow-hidden">
      <BackgroundRippleEffect />
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>
      <main className="text-center relative z-10">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          A
          <FlipWords words={words} /> <br />
          app is coming soon
        </div>
      </main>
    </div>
  );
}
