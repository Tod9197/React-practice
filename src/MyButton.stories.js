import MyButton from "./MyButton";

export default {
  title: "MyApp/MyButton",
  component: MyButton,
};

export const Index = {
  render: () => (
    <MyButton
      primary
      size="medium"
      label="ボタン"
      onClick={() => console.log("Hello, Storybook!!")}
    />
  ),
};

export const white = {
  render: () => <MyButton size="small" label="ボタン" backgroundColor="#fff" />,
};
