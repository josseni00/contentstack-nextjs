import { IPricing } from "@/types";
import PricingColumn from "./PricingColumn";

type PricingProps = {
  tiers: IPricing[];
};

const Pricing: React.FC<PricingProps> = ({ tiers }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {tiers.map((tier) => (
        <PricingColumn key={tier.name} tier={tier} highlight={tier.topPick} />
      ))}
    </div>
  );
};

export default Pricing;
