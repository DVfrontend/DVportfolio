export const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-gray-400 py-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} DV
      </div>
    </footer>
  );
};