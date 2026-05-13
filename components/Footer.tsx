export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-orange-900 text-orange-300 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm">
          © {year}{" "}
          <span className="font-semibold text-orange-200">Kamil Hayyunaji Fabriano</span>
        </p>
        <p className="text-xs text-orange-400">
          Geodesy & Geomatics Engineering · Institut Teknologi Bandung
        </p>
      </div>
    </footer>
  );
}
