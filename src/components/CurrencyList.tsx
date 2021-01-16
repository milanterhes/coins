import { FC } from "react";
import CurrencyCard from "./CurrencyCard/CurrencyCard";
import { Currency } from "../types";

interface CurrencyListProps {
  loading: boolean;
  error?: string;
  currencies: Currency[];
}

const CurrencyList: FC<CurrencyListProps> = ({
  loading,
  error,
  currencies,
}) => {
  if (error) return <div>{error}</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {currencies.map((currency) => (
        <CurrencyCard key={currency.code} currency={currency} />
      ))}{" "}
    </>
  );
};

export default CurrencyList;
