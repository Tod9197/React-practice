import "../src/stories/button.css";

export default function MyButton({
  primary = false,
  backgroundColor = null,
  size = "medium",
  label = "Button",
  ...props
}) {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["story-button", `storybook-button--${size}`, mode].join("")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}
