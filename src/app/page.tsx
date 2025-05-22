import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { getSiteDetails } from "@/data/siteDetails";
import { getHero } from "@/data/hero";
import { getCustomer } from "@/data/customers";
import { getBenefits } from "@/data/benefits";
import { getPricing } from "@/data/pricing";
import { getTestimonial } from "@/data/testimonials";
import { getFAQ } from "@/data/faq";
import { getStats } from "@/data/stats";
import { getCTA } from "@/data/cta";

export async function generateMetadata() {
  const siteSettings = await getSiteDetails();

  return {
    title: siteSettings.metaData.title,
    description: siteSettings.metaData.description,
  };
}

const HomePage: React.FC = async () => {
  const [
    heroDetails,
    customer,
    benefits,
    pricing,
    testimonial,
    faq,
    stats,
    cta,
  ] = await Promise.all([
    getHero(),
    getCustomer(),
    getBenefits(),
    getPricing(),
    getTestimonial(),
    getFAQ(),
    getStats(),
    getCTA(),
  ]);

  return (
    <>
      <Hero heroDetails={heroDetails} />
      <Logos customer={customer} />
      <Container>
        <Benefits benefits={benefits} />

        <Section
          id="pricing"
          title={pricing.title}
          description={pricing.description}
        >
          <Pricing tiers={pricing.items} />
        </Section>

        <Section
          id="testimonials"
          title={testimonial.heading}
          description={testimonial.description}
        >
          <Testimonials testimonials={testimonial.items} />
        </Section>

        <FAQ
          faqs={faq.items}
          heading={faq.heading}
          contact={faq.contact}
          description={faq.description}
          subHeading={faq.subHeading}
        />

        <Stats stats={stats} />

        <CTA ctaDetails={cta} />
      </Container>
    </>
  );
};

export default HomePage;
