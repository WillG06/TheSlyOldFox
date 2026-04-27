export default function SiteMap() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 460 }}>
      <div className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--ink), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--ink), transparent)" }} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.256974031408!2d-1.8995330233216412!3d52.47448277204924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc89ebc5b7d9%3A0xc3b4312b726754f0!2sThe%20Sly%20Old%20Fox!5e0!3m2!1sen!2suk!4v1776618003812!5m2!1sen!2suk"
        width="100%" height="100%"
        style={{ border: "none", filter: "invert(90%) hue-rotate(185deg) saturate(0.3) brightness(0.7) contrast(0.95)" }}
        allowFullScreen loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="The Sly Old Fox — 54-56 Hurst Street, Birmingham B5 4TD"
      />
    </div>
  );
}
