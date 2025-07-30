// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground md:px-8">
        <p>
          &copy; {new Date().getFullYear()} Sheikh Abdullah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
