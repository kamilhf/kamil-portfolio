export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-orange-900 py-8 text-orange-300">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <p className="text-sm">
          © {year} <span className="font-semibold text-orange-200">Kamil Hayyunaji Fabriano</span>
        </p>
        <p className="text-xs text-orange-400">
          Geodesy & Geomatics Engineering · Institut Teknologi Bandung
        </p>
      </div>
    </footer>
  );
}
