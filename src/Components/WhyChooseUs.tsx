import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [
    "Instant Quotes",
    "Secure Payments",
    "Trusted by 500+ Clients",
    "24/7 Customer Support",
  ];

  return (
    <section className="py-5 bg-white text-center">
      <motion.h2
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <strong>Why Choose Us</strong>
      </motion.h2>

      <div className="container">
        <div className="row justify-content-center">
          {reasons.map((reason, index) => (
            <motion.div
              className="col-md-3 col-sm-6 mb-3"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="border p-3 rounded shadow-sm">
                <h6>{reason}</h6>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
