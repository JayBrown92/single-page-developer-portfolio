type Props = {
  children: React.ReactNode;
  className: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={`container relative  py-20 lg:max-w-screen-lg ${className}`}
    >
      {children}
    </div>
  );
}
