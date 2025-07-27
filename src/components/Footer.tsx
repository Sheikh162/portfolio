// This is a Server Component.
export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Sheikh Abdullah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
