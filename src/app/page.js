export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3E5F5]">
      {/* 1. Header - Logo and Links */}
      <header className="flex justify-between items-center p-8 max-w-7xl mx-auto w-full">
        <h1 className="text-xl font-medium text-blue-900 uppercase tracking-[0.2em]">Dr. Maya Reynolds</h1>
        <nav className="flex space-x-8 text-[12px] font-medium uppercase tracking-[0.1em]">
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#services" className="hover:text-blue-500 transition">Services</a>
          <a href="#contact" className="hover:text-blue-500 transition border-2 border-blue-900 px-4 py-1 rounded-full">Contact</a>
        </nav>
      </header>

      {/* 2. Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-72 h-[450px] bg-gray-200 rounded-t-full border-8 border-white shadow-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946" alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-16 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-light text-gray-800 leading-tight">
            Nurturing Your Path <br /> to Wellness
          </h2>
          <p className="mt-8 text-gray-600 tracking-wide text-lg max-w-md">
            Compassionate Therapy for a Balanced Life.
          </p>
          <a href="#contact" className="inline-block mt-12 px-10 py-4 border border-gray-400 text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition">
            Connect With Me
          </a>
        </div>
      </section>

      {/* 3. About Me Section */}
      <section id="about" className="py-20 bg-white px-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-light text-gray-800 mb-6">About Me</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Hello! I am Dr. Maya Reynolds, a passionate wellness practitioner dedicated to helping individuals find their balance and peace. I combine traditional wisdom with modern practices to nurture your path.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section id="services" className="py-20 bg-purple-50 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-medium text-purple-900 mb-4">Therapy</h3>
              <p className="text-gray-600 font-light">Personalized sessions for mental wellness and emotional balance.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-purple-200 hover:shadow-md transition">
              <h3 className="text-xl font-medium text-purple-900 mb-4">Yoga</h3>
              <p className="text-gray-600 font-light">Mindfulness through movement and breath for a healthy body.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-medium text-purple-900 mb-4">Meditation</h3>
              <p className="text-gray-600 font-light">Deep relaxation techniques to improve focus and reduce stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-20 bg-white px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-gray-800 mb-4">Connect With Me</h2>
          <p className="text-gray-600 mb-10">Please fill out the form below to get in touch.</p>
          <form className="max-w-md mx-auto space-y-4 text-left">
            <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 outline-none" required />
            <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 outline-none" required />
            <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-blue-900 outline-none" required></textarea>
            <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-black transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-50 text-center border-t border-gray-200">
        <p className="text-gray-500 text-sm">© 2026 Dr. Maya Reynolds. All rights reserved.</p>
      </footer>
    </main>
  );
}