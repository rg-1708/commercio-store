import { useEffect, useState } from "react";
import { LoaderRounded } from "@/components/ui/loaders";

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value: String | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoaderRounded iconSize={20} />;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};

export default Currency;
