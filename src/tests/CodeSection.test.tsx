import { render, screen } from "@testing-library/react";
import React from "react";
import CodeSection from "../components/CurrencyCard/CardDetails/CodeSection";
import { rgbToHex } from "./utils";

describe("background color", () => {
  test("sets background color on first render", () => {
    render(<CodeSection code="btc" />);

    const colors = ["#D61F69", "#7E3AF2", "#FF5A1F", "#32C48D"];

    const component = screen.getByTestId("code-section");
    const style = window.getComputedStyle(component);

    expect(colors).toContain(rgbToHex(style.backgroundColor));
  });

  function getBackgroundColorHex(component: HTMLElement): String {
    return rgbToHex(window.getComputedStyle(component).backgroundColor);
  }

  test("keeps the first set background after re-render", () => {
    const { rerender } = render(<CodeSection code="btc" />);

    const bgColor1 = getBackgroundColorHex(screen.getByTestId("code-section"));
    rerender(<CodeSection code="btc" />);
    const bgColor2 = getBackgroundColorHex(screen.getByTestId("code-section"));

    expect(bgColor1).toEqual(bgColor2);
  });
});
