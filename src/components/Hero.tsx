import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="bg-[#2C3E50] text-white py-24">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-sans">
          Ahamed Foisal
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-200 mb-4 font-sans">
          Software Engineer | Dubai
        </h2>
        <p className="text-gray-100 font-medium mb-10 max-w-2xl">
          Full-stack Development • Machine Learning • Cloud-Native Solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#projects"
            className="text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-r from-primary-light to-primary font-bold"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-white/30 bg-white/10 backdrop-blur-md text-white font-bold"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
} 