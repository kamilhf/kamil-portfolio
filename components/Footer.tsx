export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-8 text-orange-100">

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">

        <div className="rounded-2xl border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <p className="text-sm">
            © {year}{" "}
            <span className="font-semibold text-white">
              Kamil Hayyunaji Fabriano
            </span>
          </p>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <p className="text-xs text-orange-100">
            Geodesy & Geomatics Engineering · Institut Teknologi Bandung
          </p>
        </div>

      </div>
    </footer>
  );
}