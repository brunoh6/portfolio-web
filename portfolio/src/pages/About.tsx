import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="min-h-screen p-8 text-center bg-gray-900 text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
        I'm Bruno Paolo Huaman Vela — a cybersecurity student passionate about Linux systems, network forensics,
        and industrial control system (ICS) protection. My portfolio reflects the technical depth and real-world
        applications I explore through academic projects and labs.
      </p>
      <p className="text-md text-gray-400 max-w-2xl mx-auto">
        I enjoy building secure environments, analyzing threats, and automating responses to incidents. I'm currently
        focused on advancing my skills in SOC analysis, penetration testing, and DevSecOps methodologies.
      </p>
    </motion.div>
  );
}