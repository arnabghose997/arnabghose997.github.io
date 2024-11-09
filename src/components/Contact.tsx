import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Let's Connect</h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xl text-gray-300 mb-8">
          I'm always open to new opportunities and interesting projects.
          Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/arnabghose997"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <Github size={32} className="mb-2" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/arnabghose997"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={32} className="mb-2" />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:arnab.ghose128@gmail.com"
            className="flex flex-col items-center text-gray-300 hover:text-emerald-400 transition-colors"
          >
            <Mail size={32} className="mb-2" />
            <span>Email</span>
          </a>
        </div>
      </div>
      <footer className="mt-20 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Arnab Ghose. All rights reserved.</p>
      </footer>
    </section>
  );
}