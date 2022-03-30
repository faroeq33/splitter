export default function PercentInput(props) {
  // if extendedClassName prop is available use it, if not use empty string
  const extendedClassnames = props.extendClassname
    ? props.extendedClassnames
    : "failed exclassname ";

  return (
    <>
    <button
      className={`bg-verydarkcyan rounded-md p-2 text-3xl font-bold text-white focus:bg-darkgrayishcyan focus:text-verydarkcyan ${props.extendClassname}`}
    onClick={props.onClick}
    >
      {props.children}
    </button>
    </>

  );
}
