export default function Projects() {
    const projects = [
      {
        title: "Linux Threat Detection Lab",
        description: "Log analysis and alert generation in Linux using syslog, auditd, and custom scripts.",
        link: "https://github.com/brunoh6/linux-threat-detection",
      },
      {
        title: "Metasploit Exploitation Lab",
        description: "Reverse shells, privilege escalation, and pivoting through lab networks.",
        link: "https://github.com/brunoh6/postgresql-cve-exploitation",
      },
      {
        title: "Layer 2 Security Labs",
        description: "ARP spoofing detection and mitigation using Python and Switch configuration.",
        link: "https://github.com/brunoh6/layer2-security-labs",
      },
    ];
  
    return (
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
          A selection of academic labs and technical projects in cybersecurity and networking.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 rounded-2xl p-6 hover:bg-gray-800 transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }