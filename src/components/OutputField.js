export default function OutputField({ children, cName }) {
  return (
    <div
      className={`w-full p-3 text-2xl font-bold text-right  rounded-lg text-verydarkcyan ${cName}`}
    >
      {children}
    </div>
  );
}
