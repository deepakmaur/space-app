import React from "react";
import Navbar from "../component/forNavigation/NavBar";
import Footer from "../component/forNavigation/Footer";
import InfographicSection from "../component/forHomePage/InfographicSection";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Spline Background */}
      <div className="fixed inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/6yh4QfaYnk9KXjJx/scene.splinecode"
        />
      </div>

      {/* Color grading overlay */}
      <div className="fixed inset-0 z-10 bg-gradient-to-b from-transparent to-black opacity-30"></div>

      {/* Content Container */}
      <div className="relative z-20 text-white mix-blend-difference">
        <Navbar />

        {/* Header Section */}
        <header className="text-center py-8">
          <motion.div
            className="inline-block p-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4 backdrop-blur-sm p-2">
              Climate Change and Greenhouse Gases (GHGs)
            </h1>
            <p className="text-xl backdrop-blur-sm p-2">
              Learn about the impact of GHGs and how they are driving climate change.
            </p>
          </motion.div>
        </header>

        {/* Content Sections */}
        <motion.section
          className="py-12 px-6 md:px-16 lg:px-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="backdrop-blur-md p-8 rounded-lg">
            <h2 className="text-3xl font-semibold text-center mb-6">
              What Are Greenhouse Gases?
            </h2>
            <p className="text-lg mb-4">
              Greenhouse gases (GHGs) are gases in the atmosphere that trap heat
              from the Sun, causing the Earth's temperature to rise. The most common
              GHGs are carbon dioxide (CO₂), methane (CH₄), and nitrous oxide (N₂O).
            </p>
          </div>
        </motion.section>

        {/* Infographic Section */}
        <div className="backdrop-blur-md p-8 rounded-lg my-8">
          {/* <InfographicSection /> */}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;