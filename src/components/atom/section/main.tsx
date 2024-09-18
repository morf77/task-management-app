// this type of configuration for important tags like h1 , section and etc is better cause we can customize them and add functionality to them for future and create cleaner code !
const SectionMain: FC<PropsWithChildren<HTMLSectionProps>> = ({
  className,
  children,
  ...restProps
}) => {
  // we can use functional css passing approach for class but for now i use just template strings!
  return (
    <section
      className={`p-3 shadow-md bg-gray-100 rounded-md ${className}`}
      {...restProps}
    >
      {children}
    </section>
  );
};

export default SectionMain;
