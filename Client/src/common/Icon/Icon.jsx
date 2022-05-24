import Patterns from "./patterns";

const Icon = ({ name }) => {
  const Pattern = Patterns[name];

  return Pattern ? (
    <svg>
      <Pattern />
    </svg>
  ) : null;
};

export default Icon;
