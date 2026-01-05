import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Server, 
  Code, 
  Cpu, 
  Terminal, 
  ExternalLink,
  ChevronDown
} from "lucide-react";
import heroBg from "@assets/generated_images/abstract_dark_neon_technology_background.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono text-xl font-bold tracking-tighter text-primary cursor-pointer hover:opacity-80 transition-opacity" onClick={() => scrollToSection('home')}>
            &lt;AH /&gt;
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-primary transition-colors">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-primary transition-colors">Skills</button>
          </div>
          <Button variant="outline" size="sm" className="hidden md:flex gap-2" onClick={() => scrollToSection('contact')}>
            <Mail className="w-4 h-4" /> Contact Me
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0" />
        
        <div className="container px-6 z-10 relative">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <motion.div variants={fadeIn}>
              <Badge variant="outline" className="px-4 py-1 text-primary border-primary/50 bg-primary/10 backdrop-blur-sm mb-4">
                Available for Hire
              </Badge>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Abhishek Harkar</span>.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
              GenAI Full Stack Engineer | DevOps Practitioner | System Architect
            </motion.p>
            
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground/80 max-w-2xl mx-auto italic">
              "Building intelligent agents and scalable systems that bridge the gap between AI and production."
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" onClick={() => scrollToSection('projects')}>
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white/10 hover:bg-white/5" onClick={() => scrollToSection('contact')}>
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold font-mono mb-6 text-primary">&lt;About /&gt;</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate Computer Science Engineer specializing in <span className="text-white font-medium">Generative AI</span> and <span className="text-white font-medium">Full Stack Development</span>. 
              With a strong foundation in DevOps and cloud infrastructure, I don't just build models—I deploy scalable, production-ready AI solutions. 
              My expertise spans building autonomous agents, RAG pipelines, and real-time streaming platforms. 
              I am currently focused on solving complex problems using LangChain, LangGraph, and Azure OpenAI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-secondary/20 relative">
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-12 text-center text-primary">&lt;Experience /&gt;</h2>
          
          <div className="max-w-3xl mx-auto space-y-8 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

            {/* Job 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="md:text-right">
                <h3 className="text-xl font-bold">GenAI Full Stack Intern</h3>
                <p className="text-primary font-mono text-sm mb-2">GenAIKit Software Solution Pvt Ltd</p>
                <Badge variant="secondary" className="mb-4">Oct 2025 – Present | Remote</Badge>
              </div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
              <div className="md:pl-8">
                <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-2 text-sm">
                  <li>Built and shipped Generative AI applications using FastAPI, LangChain, LangGraph, and Azure OpenAI.</li>
                  <li>Designed RAG pipelines and ML microservices, reducing client manual workload by 40%.</li>
                </ul>
              </div>
            </motion.div>

            {/* Job 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="md:order-2">
                <h3 className="text-xl font-bold">DevOps Intern</h3>
                <p className="text-primary font-mono text-sm mb-2">Pearl Thoughts</p>
                <Badge variant="secondary" className="mb-4">July 2025 – Aug 2025 | Remote</Badge>
              </div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/50 ring-4 ring-background" />
              <div className="md:order-1 md:text-right md:pr-8">
                <ul className="list-disc list-outside ml-4 md:ml-0 md:list-none text-muted-foreground space-y-2 text-sm">
                  <li>Deployed headless backends (Strapi, Medusa) using Terraform and GitHub Actions.</li>
                  <li>Managed infrastructure via AWS CodeDeploy and CloudWatch for reliable CI/CD.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-background">
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-16 text-center text-primary">&lt;Projects /&gt;</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real-Time AI Interviewer",
                desc: "Engineered a voice-to-voice interview assistant utilizing RAG to contextualize questions based on candidate resumes. The system handles real-time audio processing to conduct natural conversations, reducing manual recruiter screening time by nearly 40%.",
                stack: ["FastAPI", "Next.js", "LiveKit", "Azure OpenAI", "RAG"],
                icon: <Cpu className="w-6 h-6 text-purple-400" />
              },
              {
                title: "Live Video Streaming Platform",
                desc: "Architected a high-performance video streaming platform capable of RTMP ingest, FFmpeg-based transcoding, and HLS segmentation. Deployed on AWS to handle multi-resolution delivery with low latency, ensuring scalable user interaction.",
                stack: ["AWS (EC2, S3, Route53)", "Nginx RTMP", "FFmpeg", "React", "Node.js"],
                icon: <Server className="w-6 h-6 text-green-400" />
              },
              {
                title: "Agentic Cloud IDE",
                desc: "Developed a web-based Integrated Development Environment embedded with an autonomous coding agent. The system features a secure, containerized architecture using AWS ECS to provision isolated runtime environments for every user session.",
                stack: ["React", "FastAPI", "Claude SDK", "LangGraph", "Azure Anthropic", "AWS ECS", "WebSockets"],
                icon: <Terminal className="w-6 h-6 text-blue-400" />
              },
              {
                title: "Clinical LLM Fine-Tuning",
                desc: "Built a domain-specific summarization model for healthcare by fine-tuning Mistral 7B using LoRA. Curated a dataset of 10k+ medical documents to optimize training workflows, resulting in a 25% increase in summarization accuracy.",
                stack: ["Mistral 7B", "LoRA/PEFT", "FastAPI", "Gradio", "Python"],
                icon: <Cpu className="w-6 h-6 text-teal-400" />
              },
              {
                title: "OCR-Enhanced RAG Pipeline",
                desc: "Designed an advanced Retrieval-Augmented Generation system specifically for complex, unstructured data. Integrates OCR to accurately extract and analyze information from scanned PDFs, images, and embedded tables for precise query retrieval.",
                stack: ["LangChain", "PyTesseract (OCR)", "React", "FastAPI", "Python"],
                icon: <Code className="w-6 h-6 text-yellow-400" />
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex"
              >
                <Card className="flex flex-col w-full bg-secondary/10 border-white/5 hover:border-primary/50 transition-all duration-300 group cursor-default glass hover:bg-secondary/20 hover:translate-y-[-4px]">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div className="p-2 rounded-lg bg-background/50 border border-white/5 group-hover:border-primary/30 transition-colors">
                        {project.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <CardDescription className="mb-6 text-base text-muted-foreground/90 line-clamp-4">
                      {project.desc}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                      {project.stack.map(tech => (
                        <Badge key={tech} variant="outline" className="bg-primary/5 border-primary/20 text-primary/90 text-[10px] px-2 py-0 uppercase tracking-wider font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-secondary/10 border-t border-white/5">
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl font-bold font-mono mb-16 text-center text-primary">&lt;Skills /&gt;</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: "Languages", items: ["Python", "C/C++", "SQL", "JavaScript"] },
              { category: "GenAI & ML", items: ["LangChain", "LangGraph", "Azure OpenAI", "RAG", "Fine-tuning"] },
              { category: "Web Frameworks", items: ["React.js", "Node.js", "FastAPI", "Next.js"] },
              { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions"] }
            ].map((skillGroup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-background/40 border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-colors"
              >
                <h3 className="text-lg font-bold mb-4 text-white/90 border-b border-white/5 pb-2">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(skill => (
                    <span key={skill} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-default">
                      • {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-background border-t border-white/5">
        <div className="container px-6 mx-auto text-center">
          <h2 className="text-2xl font-bold font-mono mb-8 text-white">&lt;Connect /&gt;</h2>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/AKIS-4" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/30 hover:bg-primary hover:text-white transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-harkar-595647276" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary/30 hover:bg-primary hover:text-white transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:abhishekharkar@gmail.com" className="p-3 rounded-full bg-secondary/30 hover:bg-primary hover:text-white transition-all">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <div className="text-muted-foreground text-sm space-y-2">
            <p>+91 9373581139 • abhishekharkar@gmail.com</p>
            <p className="pt-4 text-xs opacity-50">© 2026 Abhishek Harkar. Built with AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}