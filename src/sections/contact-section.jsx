import SectionTitle from '../components/section-title';
import { contactDetails } from '../data/portfolioData';
import { MailIcon, PhoneIcon, MapPinIcon, GlobeIcon, ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const contactItems = [
    { icon: MapPinIcon, label: 'Location', value: contactDetails.location, link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.location)}` },
    { icon: MailIcon, label: 'Email', value: contactDetails.email, link: `mailto:${contactDetails.email}` },
    { icon: PhoneIcon, label: 'Phone', value: contactDetails.phone, link: `tel:${contactDetails.phone}` },
    { icon: GlobeIcon, label: 'Website', value: contactDetails.website, link: contactDetails.website },
  ];

  return (
    <section id="contact" className="mt-32 px-4 md:px-6 lg:px-8 flex flex-col items-center">
      <SectionTitle
        title={contactDetails.headline}
        description={contactDetails.prompt}
      />

      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
        className="mt-12 w-full max-w-2xl glass p-8 rounded-2xl shadow-2xl shadow-purple-500/20 border border-purple-200/20 dark:border-purple-800/20 backdrop-blur-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 200, damping: 30, mass: 0.5 }}
            >
              <item.icon className="size-6 text-indigo-400 group-hover:text-purple-400 transition-colors duration-300 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white text-lg">{item.label}</h4>
                <p className="text-gray-300 text-sm break-words group-hover:text-white transition-colors duration-300">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: contactItems.length * 0.15 + 0.2, type: "spring", stiffness: 280, damping: 70, mass: 1 }}
          className="btn bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl px-8 py-3 font-semibold shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 mt-10 w-full"
        >
          Let's Connect
          <ArrowRightIcon className="size-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}
