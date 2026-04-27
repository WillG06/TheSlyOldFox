import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-ink flex flex-col items-center justify-center text-center px-6">
      <span className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-hazel mb-6">404 — Not Found</span>
      <h1 className="font-serif text-cream leading-tight tracking-tight mb-6" style={{ fontSize: "clamp(2.5rem,7vw,6rem)" }}>
        You've wandered <em className="text-hazel-gradient">off the beaten path</em>
      </h1>
      <p className="font-sans font-light text-cream-dim text-base mb-10 max-w-sm">
        This page doesn't exist — but the bar is still open.
      </p>
      <Link href="/" className="btn btn-primary">Back to the Fox</Link>
    </div>
  );
}
