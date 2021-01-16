import { FC, useMemo } from "react";
import styled from "styled-components";
import { Currency } from "../../../types";

const CodeSectionComponent = styled.div<{ bg: string }>`
  height: 100%;
  width: 30%;
  background-color: ${({ bg }) => bg};
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.28);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const CodeSection: FC<Pick<Currency, "code">> = ({ code }) => {
  const colors = ["#D61F69", "#7E3AF2", "#FF5A1F", "#32C48D"];

  const colorIdx: number = useMemo(
    () => Math.floor(Math.random() * colors.length),
    [colors.length]
  );

  return (
    <CodeSectionComponent bg={colors[colorIdx]}>{code}</CodeSectionComponent>
  );
};

export default CodeSection;
