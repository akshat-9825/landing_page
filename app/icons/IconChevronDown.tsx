const IconChevronDown = ({
  height = 16,
  width = 16,
  className,
}: {
  height?: number;
  width?: number;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={width}
      height={height}
      className={className}>
      <path
        d="M4 6l4 4 4-4"
        stroke="#424242"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconChevronDown;
