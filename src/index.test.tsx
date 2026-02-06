import { expect, test, vi } from "vitest";
import { render } from "vitest-browser-react";
import ScrollInto from "./index";
import React from "react";

test("ScrollInto renders with children", async () => {
  const { getByText } = await render(
    <ScrollInto selector="test">
      <div>Child node</div>
    </ScrollInto>,
  );
  await expect.element(getByText("Child node")).toBeInTheDocument();
});

test("ScrollInto renders with custom className", async () => {
  const { getByText } = await render(
    <ScrollInto selector="test" className="custom-class">
      CSS styled
    </ScrollInto>,
  );
  await expect.element(getByText("CSS styled")).toHaveClass("custom-class");
});

test("ScrollInto renders with custom styles", async () => {
  const { getByText } = await render(
    <ScrollInto selector="test" style={{ display: "inline" }}>
      Inline styled
    </ScrollInto>,
  );
  await expect
    .element(getByText("Inline styled"))
    .toHaveStyle("display: inline");
});

test("ScrollInto renders with custom styles and className", async () => {
  const { getByText } = await render(
    <ScrollInto
      selector="test"
      style={{ display: "inline", color: "red" }}
      className="pinky"
    >
      CSS and inline styled
    </ScrollInto>,
  );

  await expect.element(getByText("CSS and inline styled")).toHaveClass("pinky");
  await expect
    .element(getByText("CSS and inline styled"))
    .toHaveStyle({ display: "inline", color: "red" });
});

test("Uses provided callback function", async () => {
  const mockFn = vi.fn();
  const { getByText } = await render(
    <ScrollInto selector="test" onClick={mockFn}>
      Clickable
    </ScrollInto>,
  );
  expect(mockFn).toBeCalledTimes(0);

  await getByText("Clickable").click();

  expect(mockFn).toBeCalled();
  expect(mockFn).toBeCalledTimes(1);
});
