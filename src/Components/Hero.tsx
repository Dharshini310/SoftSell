import { motion } from 'framer-motion';
import softsell from '../assets/softsell.png';

export default function Hero() {
  return (
    <motion.section
      className="bg-primary text-white text-center py-5"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <img src={softsell} alt='loading' width={90} height={90}/>
        <h1 className="display-4 fw-bold">Sell Your Unused Software Licenses</h1>
        <p className="lead mt-3">Turn old licenses into instant cash.</p>
        <motion.button
          className="btn btn-light text-primary fw-semibold mt-4 px-4 py-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Quote
        </motion.button>
      </div>
    </motion.section>
  );
}
