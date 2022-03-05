export default function OutputField({ children, cName }) {
  return (
    <div
      className={`w-full p-3 text-2xl font-bold text-right bg-gray-100 rounded-lg text-verydarkcyan ${cName}`}
    >
      {children}
    </div>
  );
}
