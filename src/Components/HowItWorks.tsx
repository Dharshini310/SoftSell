import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    { title: "Upload License", icon: "⬆️" },
    { title: "Get Valuation", icon: "💰" },
    { title: "Get Paid", icon: "✅" },
  ];

  return (
    <section className="py-5 bg-light text-center">
      <motion.h2
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <strong>How It Works</strong>
      </motion.h2>

      <div className="container">
        <div className="row justify-content-center">
          {steps.map((step, index) => (
            <motion.div
              className="col-md-4 mb-4"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="fs-1">{step.icon}</div>
                  <h5 className="mt-3">{step.title}</h5>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
