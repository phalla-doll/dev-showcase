'use client';

import { motion } from 'motion/react';
import { Search, ArrowRight, Code2, Terminal, Cpu, Globe, Database, LayoutTemplate, Star, ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 1,
    title: 'NexusDB',
    description: 'A distributed, edge-native database for modern serverless applications. Built with Rust.',
    tags: ['Database', 'Rust', 'Edge'],
    price: '$49/mo',
    author: 'Alex Chen',
    stars: 128,
    icon: Database,
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'group-hover:border-blue-500/50',
  },
  {
    id: 2,
    title: 'UI Forge',
    description: 'A comprehensive set of accessible, highly customizable React components with Tailwind CSS.',
    tags: ['React', 'Tailwind', 'UI Kit'],
    price: '$129',
    author: 'Sarah Drasner',
    stars: 342,
    icon: LayoutTemplate,
    color: 'from-purple-500/20 to-pink-500/20',
    border: 'group-hover:border-purple-500/50',
  },
  {
    id: 3,
    title: 'WASM Image Proc',
    description: 'High-performance image processing library compiled to WebAssembly. 10x faster than JS.',
    tags: ['WASM', 'C++', 'Media'],
    price: 'Free',
    author: 'David Kim',
    stars: 89,
    icon: Cpu,
    color: 'from-emerald-500/20 to-green-500/20',
    border: 'group-hover:border-emerald-500/50',
  },
  {
    id: 4,
    title: 'TermiSync',
    description: 'Sync your terminal configuration, aliases, and scripts across all your machines securely.',
    tags: ['CLI', 'Go', 'DevTools'],
    price: '$15',
    author: 'Elena Rostova',
    stars: 215,
    icon: Terminal,
    color: 'from-orange-500/20 to-red-500/20',
    border: 'group-hover:border-orange-500/50',
  },
  {
    id: 5,
    title: 'API Gateway Pro',
    description: 'Lightweight, high-throughput API gateway with built-in rate limiting and analytics.',
    tags: ['API', 'Node.js', 'Infrastructure'],
    price: '$99/yr',
    author: 'Marcus Johnson',
    stars: 156,
    icon: Globe,
    color: 'from-indigo-500/20 to-blue-500/20',
    border: 'group-hover:border-indigo-500/50',
  },
  {
    id: 6,
    title: 'Syntax Highlighter',
    description: 'Zero-dependency, blazing fast syntax highlighter with support for 150+ languages.',
    tags: ['Library', 'TypeScript', 'AST'],
    price: 'Free',
    author: 'Wei Lin',
    stars: 420,
    icon: Code2,
    color: 'from-yellow-500/20 to-amber-500/20',
    border: 'group-hover:border-yellow-500/50',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 font-sans selection:bg-zinc-800 selection:text-white overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}>
      </div>
      
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <Code2 className="w-5 h-5 text-black" />
          </div>
          <span className="font-mono font-bold text-white tracking-tight">DevShowcase</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="hover:text-white transition-colors">Explore</Link>
          <Link href="#" className="hover:text-white transition-colors">Creators</Link>
          <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium hover:text-white transition-colors">Log in</button>
          <button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors">Submit Project</button>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-[65vh] flex flex-col items-center justify-center text-center pt-12 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs font-mono text-zinc-400 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Discover the best developer tools
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tighter max-w-4xl leading-[1.1] mb-6"
          >
            The marketplace for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
              developer products.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12"
          >
            Discover, buy, and sell high-quality developer tools, libraries, UI kits, and boilerplates. Built by developers, for developers.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="w-full max-w-2xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100 duration-500"></div>
            <div className="relative flex items-center bg-zinc-900/80 border border-zinc-800 rounded-xl p-2 backdrop-blur-sm transition-all duration-300 focus-within:border-zinc-600 focus-within:bg-zinc-900">
              <Search className="w-5 h-5 text-zinc-500 ml-3" />
              <input 
                type="text" 
                placeholder="Search for React templates, Rust libraries, APIs..." 
                className="w-full bg-transparent border-none outline-none text-white px-4 py-3 placeholder:text-zinc-600 font-mono text-sm"
              />
              <button className="bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2">
                Search <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 text-xs font-mono text-zinc-500">
              <span>Popular:</span>
              <button className="hover:text-zinc-300 transition-colors">React</button>
              <button className="hover:text-zinc-300 transition-colors">Next.js</button>
              <button className="hover:text-zinc-300 transition-colors">Tailwind</button>
              <button className="hover:text-zinc-300 transition-colors">Rust</button>
            </div>
          </motion.div>
        </section>

        {/* Grid Section */}
        <section className="pb-32">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white tracking-tight">Featured Projects</h2>
            <Link href="#" className="text-sm font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative flex flex-col bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 hover:bg-zinc-900/80 transition-all duration-300 ${project.border}`}
              >
                {/* Card Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 pointer-events-none`}></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-6 h-6 text-zinc-300" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-white font-mono font-medium">{project.price}</span>
                    <div className="flex items-center gap-1 text-xs text-zinc-500 mt-1">
                      <Star className="w-3 h-3 fill-zinc-500" /> {project.stars}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-6 flex-grow line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-col gap-4 mt-auto relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-800/50 rounded-md border border-zinc-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-white font-medium">
                        {project.author.charAt(0)}
                      </div>
                      <span className="text-xs text-zinc-400">{project.author}</span>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Bento Grid Section */}
        <section className="pb-32">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-2">Why DevShowcase?</h2>
            <p className="text-zinc-400">Everything you need to launch and scale your developer tools.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-colors duration-500"></div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">Reach the right audience</h3>
              <p className="text-zinc-400 max-w-md relative z-10">Get your tools in front of thousands of developers actively looking for solutions to their technical problems.</p>
              
              <div className="absolute bottom-4 right-4 flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 h-12 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="w-12 h-12 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-zinc-400" />
                </div>
                <div className="w-12 h-12 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center">
                  <Database className="w-5 h-5 text-zinc-400" />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-500/10 to-transparent"></div>
              <h3 className="text-xl font-bold text-white mb-2">Zero fees on free tools</h3>
              <p className="text-zinc-400 text-sm">We only make money when you do. Free open-source projects are always free to list.</p>
              <div className="mt-6 text-4xl font-mono font-bold text-emerald-400 group-hover:scale-110 transition-transform origin-left">0%</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Analytics</h3>
                <p className="text-zinc-400 text-sm">Track views, clicks, and conversions in real-time.</p>
              </div>
              <div className="flex items-end gap-1 h-16 mt-4">
                {[40, 70, 45, 90, 65, 100, 85].map((height, i) => (
                  <div 
                    key={i} 
                    className="w-full bg-zinc-800 rounded-t-sm group-hover:bg-zinc-600 transition-colors duration-300"
                    style={{ height: `${height}%`, transitionDelay: `${i * 50}ms` }}
                  ></div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/code/800/400')] opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-700 bg-cover bg-center"></div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to launch?</h3>
                <p className="text-zinc-400 max-w-md mb-6">Join hundreds of developers who are already monetizing their side projects and tools.</p>
                <button className="w-fit bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center gap-2">
                  Submit your project <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/50 py-12 mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-zinc-500" />
            <span className="font-mono font-bold text-zinc-500 tracking-tight">DevShowcase</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
          </div>
          <div className="text-sm text-zinc-600 font-mono">
            © 2026 DevShowcase. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
