import { FC } from "react";
import styled from "styled-components";
import Toggle from "./Toggle/Toggle";
import Panel from "../Panel";
import Button from "./Button";
import { SortFields } from "../../types";

const ControlsWrapper = styled(Panel)(
  ({ theme: { breakpoints } }) => `
  grid-row-gap: 5px;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.28);
  padding: 10px;
  box-sizing: border-box;

  ${breakpoints.desktop} {
    border-right: 1px solid rgba(0, 0, 0, 0.28);
    border-bottom: 0;
  }
`
);

const ButtonsWrapper = styled.div(
  ({ theme: { breakpoints } }) => `
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  grid-row-gap: 5px;
  width: 100%;
  justify-content: space-between;

  ${breakpoints.desktop} {
    flex-direction: column;
  }
`
);

interface ContainerProps {
  justifyContent?: string;
}

const ControlContainer = styled.div<ContainerProps>`
  display: flex;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: center;
  grid-column-gap: 5px;
  width: 100%;
`;

interface ControlsProps {
  usSupport: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  testMode: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  setSort: React.Dispatch<React.SetStateAction<SortFields | undefined>>;
}

const Controls: FC<ControlsProps> = ({ usSupport, testMode, setSort }) => {
  const [noUsSupport, setNoUsSupport] = usSupport;
  const [showTestMode, setTestMode] = testMode;
  return (
    <ControlsWrapper>
      <ControlContainer justifyContent="space-between">
        <span>Display currencies not supported in the US</span>
        <Toggle
          checked={noUsSupport}
          onChange={() => setNoUsSupport(!noUsSupport)}
          className="custom-react-toggle"
        />
      </ControlContainer>
      <ControlContainer justifyContent="space-between">
        <span>Display currencies not available in test mode</span>
        <Toggle
          checked={showTestMode}
          onChange={() => setTestMode(!showTestMode)}
          className="custom-react-toggle"
        />
      </ControlContainer>
      <ButtonsWrapper>
        <Button onClick={() => setSort(SortFields.name)}>Sort by name</Button>
        <Button onClick={() => setSort(SortFields.code)}>Sort by symbol</Button>
        <Button onClick={() => setSort(SortFields.shuffle)}>
          Shuffle currencies
        </Button>
      </ButtonsWrapper>
    </ControlsWrapper>
  );
};

export default Controls;
