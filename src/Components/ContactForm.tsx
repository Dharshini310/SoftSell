import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section className="py-5 text-center bg-white">
      <motion.h2
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <strong>Contact Us</strong>
      </motion.h2>

      <div className="container">
        <motion.form
          className="row g-3 justify-content-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Name" required />
          </div>
          <div className="col-md-6">
            <input type="email" className="form-control" placeholder="Email" required />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Company" />
          </div>
          <div className="col-md-6">
            <select className="form-select" required>
              <option value="">Select License Type</option>
              <option>Windows</option>
              <option>Office</option>
              <option>Adobe</option>
            </select>
          </div>
          <div className="col-md-6">
            <textarea className="form-control" rows={5} placeholder="Message" required></textarea>
          </div>
          <div className="col-12">
            <motion.button
              type="submit"
              className="btn btn-primary px-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
