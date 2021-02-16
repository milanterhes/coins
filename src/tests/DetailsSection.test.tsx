import React from "react";
import { render, screen } from "@testing-library/react";
import { Currency } from "../types";
import DetailsSection from "../components/CurrencyCard/CardDetails/DetailsSection";
import Theme from "../components/Theme";

const testCurrencyWithSupport: Currency = {
  code: "btc",
  isSupportedInUS: true,
  supportsTestMode: true,
  name: "Bitcoin",
};

const testCurrencyNoSupport: Currency = {
  code: "ada",
  isSupportedInUS: false,
  supportsTestMode: false,
  name: "ADA",
};

describe("when support data are true", () => {
  beforeEach(() => {
    render(
      <Theme>
        <DetailsSection currency={testCurrencyWithSupport} />
      </Theme>
    );
  });

  test("renders title correctly", () => {
    const component = screen.getByTestId("details-title");
    expect(component.textContent).toBe(testCurrencyWithSupport.name);
  });

  test("renders US supported status text correctly", () => {
    const component = screen.getByTestId("us-text");

    expect(window.getComputedStyle(component).color).toEqual("green");
    expect(component.textContent).toBe("Yes");
  });

  test("renders test mode supported status text correctly", () => {
    const component = screen.getByTestId("test-mode-text");

    expect(window.getComputedStyle(component).color).toEqual("green");
    expect(component.textContent).toBe("Yes");
  });
});

describe("when support data are false", () => {
  beforeEach(() => {
    render(
      <Theme>
        <DetailsSection currency={testCurrencyNoSupport} />
      </Theme>
    );
  });

  test("renders title correctly", () => {
    const component = screen.getByTestId("details-title");
    expect(component.textContent).toBe(testCurrencyNoSupport.name);
  });

  test("renders US supported status text correctly", () => {
    const component = screen.getByTestId("us-text");

    expect(window.getComputedStyle(component).color).toEqual("red");
    expect(component.textContent).toBe("No");
  });

  test("renders test mode supported status text correctly", () => {
    const component = screen.getByTestId("test-mode-text");

    expect(window.getComputedStyle(component).color).toEqual("red");
    expect(component.textContent).toBe("No");
  });
});
