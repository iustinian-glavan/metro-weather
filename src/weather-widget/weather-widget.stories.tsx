import type { Meta, StoryObj } from "@storybook/react";

import { WeatherWidget } from "./index";

const meta = {
  title: "Weather Widget",
  component: WeatherWidget,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof WeatherWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Widget: Story = {
  args: {
    apiKey: "your-api-key",
    cityName: "cluj-napoca",
    units: "metric",
    lang: "ro",
  },
  render: (args) => (
    <div style={{ width: "400px" }}>
      <WeatherWidget {...args} />
    </div>
  ),
};
