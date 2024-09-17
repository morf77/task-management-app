// this type of configuration for important tags like h1 , section and etc is better cause we can customize them and add functionality to them for future and create cleaner code!
const HeaderMain: FC<PropsWithChildren<HTMLHeaderProps>> = ({
  children,
  className,
  ...restProps
}) => {
  // we can use functional css passing approach for class but for now i use just template strings!
  return (
    <header
      className={`bg-blue-700  rounded-md shadow-lg mb-10 p-2 ${className}`}
      {...restProps}
    >
      {children}
    </header>
  );
};

export default HeaderMain;
