import { TCustomer } from "@/data/customers";
import Image from "next/image";

type LogosProps = {
  customer: TCustomer;
};

const Logos: React.FC<LogosProps> = ({ customer }) => {
  return (
    <section id="logos" className="py-32 px-5 bg-background">
      <p
        className="text-lg font-medium text-center"
        dangerouslySetInnerHTML={{ __html: customer.text }}
      />
      <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-45 logos-container">
        {customer.items.map((item) => (
          <Image
            key={item.name}
            src={item.logo}
            alt={item.name}
            className="h-10 w-auto"
            width={20}
            height={20}
          />
        ))}
      </div>
    </section>
  );
};

export default Logos;
