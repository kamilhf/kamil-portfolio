export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-sky-950 text-sky-300 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm">
          © {year}{" "}
          <span className="font-semibold text-sky-200">Kamil Hayyunaji Fabriano</span>
        </p>
        <p className="text-xs text-sky-500">
          Geodesy & Geomatics Engineering · Institut Teknologi Bandung
        </p>
      </div>
    </footer>
  );
}
