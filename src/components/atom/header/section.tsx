// this type of configuration for important tags like h1 , section and etc is better cause we can customize them and add functionality to them for future and create cleaner code!
const HeaderSection: FC<PropsWithChildren<HTMLHeadingElement>> = ({
  children,
}) => {
  // we can use functional css passing approach for class but for now i use just template strings!
  return <header className="bg-blue-400">{children}</header>;
};

export default HeaderSection;
