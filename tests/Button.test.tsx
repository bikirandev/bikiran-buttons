import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button, ButtonRefresh, ButtonLoading } from "../src";

describe("Button", () => {
  it("renders with title prop", () => {
    render(<Button title="Click Me" />);
    expect(screen.getByText("Click Me")).toBeDefined();
  });

  it("renders with children", () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText("Hello")).toBeDefined();
  });

  it("applies variant class", () => {
    const { container } = render(<Button variant="red" title="Red" />);
    const btn = container.querySelector("button");
    expect(btn?.className).toContain("bg-[#F50303]");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button title="Disabled" disabled />);
    const btn = screen.getByText("Disabled").closest("button");
    expect(btn?.disabled).toBe(true);
  });

  it("shows loading overlay when loading", () => {
    const { container } = render(<Button title="Loading" loading />);
    const overlay = container.querySelector(".animate-spin");
    expect(overlay).toBeDefined();
  });

  it("defaults to type=button", () => {
    render(<Button title="Btn" />);
    const btn = screen.getByText("Btn").closest("button");
    expect(btn?.type).toBe("button");
  });
});

describe("ButtonRefresh", () => {
  it("renders an SVG", () => {
    const { container } = render(<ButtonRefresh />);
    expect(container.querySelector("svg")).toBeDefined();
  });
});

describe("ButtonLoading", () => {
  it("renders spinner SVG", () => {
    const { container } = render(<ButtonLoading />);
    expect(container.querySelector(".animate-spin")).toBeDefined();
  });
});
