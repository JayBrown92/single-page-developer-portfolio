type Props = {
  children: React.ReactNode;
  className: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={`container relative py-20 md:py-16 lg:max-w-screen-lg lg:py-20 ${className}`}
    >
      {children}
    </div>
  );
}
