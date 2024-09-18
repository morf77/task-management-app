export interface IDropdown {
  name: string;
  disabled?: boolean;
  onSelect?: (_value: string | number) => void;
  closeOnSelect?: boolean;
  contentData: {
    label: ReactNode;
    value: string | string[] | number;
  }[];
  label?: ReactNode;
  footerData?: ReactNode;
  setIsOpen?: Setter<boolean>;
  placeholder?: ReactNode;
  selectClassName?: string;
}
