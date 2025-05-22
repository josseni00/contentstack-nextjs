type FooterProps = {
  siteDetails: {
    siteName: string;
  };
};

const Footer: React.FC<FooterProps> = ({ siteDetails }) => {
  return (
    <footer className="bg-hero-background text-foreground py-10">
      <div className="mt-8 md:text-center text-foreground-accent px-6">
        <p>
          Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}.
          All rights reserved.
        </p>
        <p className="text-sm mt-2 text-gray-500">
          Made with &hearts; by{" "}
          <a href="https://nexilaunch.com" target="_blank">
            Nexi Launch
          </a>
        </p>
        <p className="text-sm mt-2 text-gray-500">
          UI kit by{" "}
          <a
            href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit"
            target="_blank"
          >
            Youthmind
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
