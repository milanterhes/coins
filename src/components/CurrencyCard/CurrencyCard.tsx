import { FC } from "react";
import { Currency } from "../../types";
import DetailsSection from "./CardDetails/DetailsSection";
import CodeSection from "./CardDetails/CodeSection";
import Panel from "../Panel";
import styled from "styled-components";

const CurrencyCardWrapper = styled(Panel)`
  border-radius: 5px;
  overflow: hidden;
`;

const CurrencyCard: FC<{ currency: Currency }> = ({ currency }) => {
  return (
    <CurrencyCardWrapper>
      <CodeSection code={currency.code} />
      <DetailsSection currency={currency} />
    </CurrencyCardWrapper>
  );
};

export default CurrencyCard;
