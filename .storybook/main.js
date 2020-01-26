module.exports = {
  stories: ["./Welcome.stories.js", "../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-viewport"
  ]
};
