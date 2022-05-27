import Patterns from "./patterns";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon = ({ name, size, color }: IconProps) => {
  const Pattern: any = Patterns[name];

  return Pattern ? (
    <svg
      width={size || Pattern.Size}
      height={size || Pattern.Size}
      fill={color || "#fff"}
      color={color || "#fff"}
      viewBox={Pattern.ViewBox}
    >
      <Pattern />
    </svg>
  ) : null;
};

export default Icon;
