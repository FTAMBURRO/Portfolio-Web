import { Code2, Database, Wrench, Globe, TestTube, Server, MonitorPlay, Palette } from "lucide-react";
import { motion } from "motion/react";

export function Skills() {
  const languages = [
    { name: "Python", color: "from-yellow-400 via-green-400 to-emerald-500" },
    { name: "Java", color: "from-red-500 via-orange-500 to-amber-500" },
    { name: "PHP", color: "from-indigo-500 via-purple-500 to-pink-500" },
    { name: "C#", color: "from-purple-600 via-fuchsia-500 to-pink-600" },
    { name: "JavaScript", color: "from-yellow-400 via-amber-400 to-orange-500" },
    { name: "TypeScript", color: "from-blue-500 via-cyan-500 to-teal-500" },
    { name: "SQL", color: "from-cyan-500 via-teal-500 to-emerald-600" },
    { name: "C", color: "from-blue-600 via-indigo-600 to-purple-600" },
    { name: "C++", color: "from-blue-700 via-indigo-700 to-purple-700" },
    { name: "Visual Basic", color: "from-blue-500 via-indigo-500 to-purple-500" },
  ];

  const frontend = [
    { name: "HTML", color: "from-orange-500 via-red-500 to-pink-500" },
    { name: "CSS", color: "from-blue-500 via-indigo-500 to-purple-500" },
    { name: "JavaScript", color: "from-yellow-400 via-amber-400 to-orange-500" },
    { name: "React", color: "from-cyan-400 via-blue-400 to-indigo-500" },
    { name: "Tailwind CSS", color: "from-cyan-400 via-sky-500 to-blue-500" },
    { name: "Bootstrap", color: "from-purple-600 via-indigo-600 to-blue-700" },
  ];

  const backend = [
    { name: "Flask", color: "from-gray-700 via-gray-800 to-gray-900" },
    { name: ".NET", color: "from-purple-600 via-indigo-600 to-blue-700" },
    { name: ".NET Core", color: "from-purple-700 via-indigo-700 to-blue-800" },
    { name: "Spring Boot", color: "from-green-600 via-emerald-600 to-teal-600" },
    { name: "APIs REST", color: "from-emerald-500 via-teal-500 to-cyan-500" },
  ];

  const databases = [
    { name: "PostgreSQL", color: "from-blue-600 via-indigo-600 to-purple-600" },
    { name: "MySQL", color: "from-blue-500 via-cyan-600 to-teal-500" },
    { name: "MariaDB", color: "from-blue-600 via-teal-600 to-cyan-600" },
    { name: "SQL Server", color: "from-red-600 via-orange-600 to-amber-600" },
    { name: "SQLite", color: "from-cyan-600 via-blue-600 to-indigo-600" },
  ];

  const devops = [
    { name: "Docker", color: "from-blue-500 via-cyan-500 to-teal-600" },
    { name: "Docker Compose", color: "from-blue-600 via-cyan-600 to-teal-700" },
    { name: "Git", color: "from-orange-500 via-red-500 to-pink-500" },
    { name: "GitHub", color: "from-gray-700 via-gray-800 to-gray-900" },
    { name: "GitLab", color: "from-orange-600 via-red-600 to-pink-600" },
    { name: "Vercel", color: "from-gray-800 via-gray-900 to-black" },
  ];

  const tools = [
    { name: "Postman", color: "from-orange-500 via-amber-500 to-yellow-500" },
    { name: "REST Clients", color: "from-emerald-500 via-teal-500 to-cyan-500" },
    { name: "JSON", color: "from-yellow-500 via-amber-500 to-orange-600" },
    { name: "HTTP/HTTPS", color: "from-green-600 via-emerald-600 to-teal-600" },
  ];

  const cms = [
    { name: "WordPress", color: "from-blue-600 via-indigo-600 to-purple-700" },
  ];

  const creativeAi = [
    { name: "Figma", color: "from-pink-500 via-fuchsia-500 to-purple-600" },
    { name: "Photoshop", color: "from-blue-500 via-indigo-500 to-purple-600" },
    { name: "Canva", color: "from-cyan-500 via-teal-500 to-emerald-600" },
    { name: "ChatGPT", color: "from-emerald-600 via-teal-600 to-cyan-600" },
    { name: "Claude", color: "from-orange-500 via-amber-500 to-yellow-500" },
    { name: "Gemini", color: "from-blue-500 via-cyan-500 to-emerald-500" },
    { name: "GitHub Copilot", color: "from-gray-700 via-gray-800 to-gray-900" },
    { name: "Cursor IDE", color: "from-purple-600 via-indigo-600 to-blue-700" },
  ];

  const environments = [
    { name: "Linux", color: "from-yellow-500 via-amber-600 to-orange-600" },
    { name: "Windows", color: "from-blue-500 via-cyan-500 to-teal-500" },
    { name: "VS Code", color: "from-blue-600 via-indigo-600 to-purple-600" },
    { name: "Eclipse IDE", color: "from-purple-600 via-indigo-600 to-blue-600" },
    { name: "IntelliJ IDEA", color: "from-pink-600 via-purple-600 to-indigo-600" },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900 relative overflow-hidden">
      {/* Background animated elements */}

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-white mb-4 text-center font-bold"
        >
          Tecnologías
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-cyan-200 text-center mb-12 text-lg"
        >
          Herramientas que domino para crear soluciones
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-emerald-400/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                <Code2 size={20} className="text-white" />
              </div>
              <h3 className="text-xl text-white font-bold">Lenguajes</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, index) => (
                <motion.span
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1.5 bg-gradient-to-r ${lang.color} text-white rounded-lg shadow-lg text-sm font-semibold cursor-pointer`}
                >
                  {lang.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl">
                <Globe size={20} className="text-white" />
              </div>
              <h3 className="text-xl text-white font-bold">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontend.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1.5 bg-gradient-to-r ${tech.color} text-white rounded-lg shadow-lg text-sm font-semibold cursor-pointer`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl">
                <Server size={20} className="text-white" />
              </div>
              <h3 className="text-xl text-white font-bold">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {backend.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1.5 bg-gradient-to-r ${tech.color} text-white rounded-lg shadow-lg text-sm font-semibold cursor-pointer`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                <Database size={20} className="text-white" />
              </div>
              <h3 className="text-xl text-white font-bold">Bases de Datos</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {databases.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1.5 bg-gradient-to-r ${tech.color} text-white rounded-lg shadow-lg text-sm font-semibold cursor-pointer`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-orange-400/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl">
                <Wrench size={20} className="text-white" />
              </div>
              <h3 className="text-xl text-white font-bold">DevOps</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {devops.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1.5 bg-gradient-to-r ${tech.color} text-white rounded-lg shadow-lg text-sm font-semibold cursor-pointer`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Testing & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-yellow-400/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl">
                <TestTube size={20} className="text-white" />
              </div>
              <h3 className="text-xl text-white font-bold">Testing & APIs</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1.5 bg-gradient-to-r ${tech.color} text-white rounded-lg shadow-lg text-sm font-semibold cursor-pointer`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CMS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-indigo-400/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                <Globe size={20} className="text-white" />
              </div>
              <h3 className="text-xl text-white font-bold">CMS</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cms.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1.5 bg-gradient-to-r ${tech.color} text-white rounded-lg shadow-lg text-sm font-semibold cursor-pointer`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Diseño, Productividad & IA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.42 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-fuchsia-400/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-xl">
                <Palette size={20} className="text-white" />
              </div>
              <h3 className="text-xl text-white font-bold">Diseño, Productividad & IA</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {creativeAi.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1.5 bg-gradient-to-r ${tech.color} text-white rounded-lg shadow-lg text-sm font-semibold cursor-pointer`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Environments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-pink-400/50 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl">
                <MonitorPlay size={20} className="text-white" />
              </div>
              <h3 className="text-xl text-white font-bold">Entornos & IDEs</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {environments.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1.5 bg-gradient-to-r ${tech.color} text-white rounded-lg shadow-lg text-sm font-semibold cursor-pointer`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Database Focus */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
        >
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full filter blur-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-400/20 rounded-full filter blur-3xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <motion.div
              className="p-3 bg-white/20 backdrop-blur-sm rounded-xl"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Database size={24} className="text-white" />
            </motion.div>
            <h3 className="text-2xl text-white font-bold">Especialización</h3>
          </div>
          <p className="text-lg text-white/90 leading-relaxed relative z-10">
            Desarrollo Backend • Arquitectura de Bases de Datos • Microservicios • Diseño de APIs • Integración de Sistemas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
