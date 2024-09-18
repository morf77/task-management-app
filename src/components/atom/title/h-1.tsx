// this type of configuration for important tags like h1 , section and etc is better cause we can customize them and add functionality to them for future and create cleaner code!
const H1: FC<PropsWithChildren<HTMLHeadingProps>> = ({
  children,
  className,
}) => {
  // we can use functional css passing approach for class but for now i use just template strings!
  return (
    <h1
      className={`bg-blue-300  p-3 text-center font-bold rounded-md text-blue-900  transition-transform ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1;
