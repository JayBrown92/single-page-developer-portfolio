type Props = {
  children: React.ReactNode;
  className: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={`container relative overflow-hidden lg:max-w-screen-lg ${className}`}
    >
      {children}
    </div>
  );
}
