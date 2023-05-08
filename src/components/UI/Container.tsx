type Props = {
  children: React.ReactNode;
  className: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={`container mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
