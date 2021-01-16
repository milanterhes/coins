import { useEffect, useMemo, useState } from "react";
import Theme from "./components/Theme";
import Container from "./components/Container";
import CurrencyList from "./components/CurrencyList";
import Controls from "./components/Controls/Controls";
import { Currency, SortFields } from "./types";
import styled from "styled-components";

function shuffleArray(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const AppWrapper = styled.div(
  ({ theme: { breakpoints } }) => `
  display: grid;
  flex-direction: column;
  ${breakpoints.desktop} {
    grid-template-columns: 25% 75%;
    flex-direction: row;
  }
`
);

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [error, setError] = useState<string>();
  const [sort, setSort] = useState<SortFields | undefined>();
  const noUsSupport = useState<boolean>(true); //true if we show NOT supported in the US
  const testMode = useState<boolean>(true); //true if we show NOT available in test mode
  const [currentNoUsSupport] = noUsSupport;
  const [currentTestMode] = testMode;

  useEffect(() => {
    fetch("/mockData.json")
      .then((res) => res.json())
      .then((list) => {
        setLoading(false);
        setCurrencies(list);
      })
      .catch((e) => {
        setError("Failed to fetch currencies.");
        console.log(e);
      });
  }, []);

  const filteredCurrencies = useMemo(() => {
    let c = currencies;
    if (!currentNoUsSupport)
      c = c.filter((currency: Currency) => currency.isSupportedInUS);
    if (!currentTestMode)
      c = c.filter((currency: Currency) => currency.supportsTestMode);
    return c;
  }, [currentNoUsSupport, currentTestMode, currencies]);

  const sortedCurrencies = useMemo(() => {
    let c = filteredCurrencies;
    if (sort === SortFields.shuffle) {
      setSort(undefined);
      shuffleArray(c);
    } else if (sort) c.sort((a, b) => a[sort].localeCompare(b[sort]));
    return c;
  }, [filteredCurrencies, sort]);

  return (
    <Theme>
      <AppWrapper>
        <Controls
          usSupport={noUsSupport}
          testMode={testMode}
          setSort={setSort}
        />
        <Container>
          <CurrencyList
            loading={loading}
            currencies={sortedCurrencies}
            error={error}
          />
        </Container>
      </AppWrapper>
    </Theme>
  );
}

export default App;
