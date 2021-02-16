import { FC } from "react";
import styled from "styled-components";
import { Currency } from "../../../types";

const DetailsSectionComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  text-align: left;
  width: 70%;
  padding: 0 5px;
`;

const StatusText = styled.span<{ positive: boolean }>`
  color: ${(props) => (props.positive ? "green" : "red")};
`;

const DetailTitle = styled.h4(
  ({ theme: { breakpoints } }) => `
    margin: 0;
    font-size: 14px;

    ${breakpoints.tablet} {
      font-size: 16px;
    }

    ${breakpoints.desktop} {
      font-size: initial;
    }
  `
);

const DetailText = styled.span(
  ({ theme: { breakpoints } }) => `
    font-size: 10px;

    ${breakpoints.tablet} {
      font-size: 14px;
    }

    ${breakpoints.desktop} {
      font-size: initial;
    }
`
);

const DetailList = styled.div`
  display: grid;
`;

const DetailsSection: FC<{ currency: Currency }> = ({
  currency: { name, isSupportedInUS, supportsTestMode },
}) => {
  return (
    <DetailsSectionComponent data-testid="details-section">
      <DetailTitle data-testid="details-title">{name}</DetailTitle>
      <DetailList>
        <DetailText>
          US support:{" "}
          <StatusText data-testid="us-text" positive={isSupportedInUS}>
            {isSupportedInUS ? "Yes" : "No"}
          </StatusText>
        </DetailText>
        <DetailText>
          Test mode available:{" "}
          <StatusText data-testid="test-mode-text" positive={supportsTestMode}>
            {supportsTestMode ? "Yes" : "No"}
          </StatusText>
        </DetailText>
      </DetailList>
    </DetailsSectionComponent>
  );
};

export default DetailsSection;
