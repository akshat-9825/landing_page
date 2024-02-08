function IconChevron(
  props: React.SVGProps<SVGSVGElement> & {
    direction: "left" | "up" | "down" | "right";
  }
) {
  let path;
  switch (props.direction) {
    case "left":
      path = "M15 18l-6-6 6-6";
      break;
    case "up":
      path = "M6 15l6-6 6 6";
      break;
    case "down":
      path = "M6 9l6 6 6-6";
      break;
    case "right":
      path = "M9 6l6 6-6 6";
      break;
    default:
      path = "M15 18l-6-6 6-6";
  }

  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      className={props.className}
      viewBox="0 0 24 24"
      height={props.height}
      width={props.width}
      {...props}>
      <path d={path} />
    </svg>
  );
}

export default IconChevron;
