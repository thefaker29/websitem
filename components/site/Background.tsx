export const Background = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
    {/* soft radial glows (champagne + sapphire) */}
    <div className="absolute inset-0 bg-[radial-gradient(1100px_600px_at_80%_-20%,rgba(212,175,55,0.12),transparent),radial-gradient(900px_500px_at_15%_30%,rgba(46,88,148,0.14),transparent)]" />
    {/* faint grid with vignette */}
    <div className="absolute inset-0 bg-grid-vignette" />
    {/* blur */}
    <div className="absolute inset-0 backdrop-blur-[1.5px]" />
  </div>
);
