// src/pages/HomePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { COLORS } from "../lib/constants";
import Loader from "../components/Loader";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#000",
        color: COLORS.textLight,
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-lime-500/20 blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-lime-400/10 blur-[160px] rounded-full"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-lime-400/40 rounded-full"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-xl px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight uppercase"
          style={{
            color: COLORS.brand,
            textShadow:
              "0 0 20px rgba(180,255,57,0.7), 0 0 60px rgba(180,255,57,0.4)",
          }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Kreedentials
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-10 text-gray-300 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Transforming Sports. Empowering Champions.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-3 rounded-full font-semibold text-lg relative overflow-hidden group"
            style={{ backgroundColor: COLORS.brand, color: "#000" }}
          >
            <span className="relative z-10">Sign Up</span>
            <span className="absolute inset-0 bg-lime-400 blur-md opacity-60 group-hover:opacity-100 transition"></span>
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 rounded-full font-semibold text-lg border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black transition-all duration-300 hover:shadow-[0_0_30px_#b4ff39]"
          >
            Log In
          </button>
        </motion.div>

        <motion.div
          className="mt-16 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          © 2025 Kreedentials — Built for Athletes.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
