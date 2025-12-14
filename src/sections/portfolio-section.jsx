import SectionTitle from '../components/section-title';
import PortfolioCard from '../components/portfolio-card';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="mt-32 px-4 md:px-6 lg:px-8">
      <SectionTitle
        title="My Portfolio & Achievements"
        description="A curated collection of my academic projects, professional certifications, and notable achievements."
      />

      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        {portfolioData.map((item, index) => (
          <PortfolioCard key={index} item={item} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
