import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "IT Manager",
      company: "TechCorp",
      quote: "Amazing service! Got paid quickly and without hassle.",
    },
    {
      name: "John Smith",
      role: "Software Reseller",
      company: "SoftDeals",
      quote: "A very smooth and trustworthy process. Highly recommended.",
    },
  ];

  return (
    <section className="py-5 bg-light text-center">
      <motion.h2
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <strong>What Our Customers Say</strong>
      </motion.h2>

      <div className="container">
        <div className="row justify-content-center">
          {testimonials.map((t, index) => (
            <motion.div
              className="col-md-5 mb-4"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card shadow-sm p-3">
                <p>"{t.quote}"</p>
                <p className="mt-2 fw-bold">{t.name}</p>
                <p className="text-muted">{t.role}, {t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
