export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3E5F5]">
      {/* 1. Header - Logo and Links */}
      <header className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        <h1 className="text-xl font-medium text-blue-900 uppercase tracking-widest">Dr.Maya Reynolds</h1>
        <nav className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-semibold">
          <a href="#" className="hover:text-black">Blog</a>
          <a href="#" className="hover:text-black">Contact</a>
        </nav>
      </header>

      {/* 2. Hero Section - Image and Text */}
      <section className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Arched Image Placeholder */}     
           <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-72 h-[450px] bg-gray-200 rounded-t-full border-[12px] border-white shadow-xl flex items-center justify-center text-gray-400 italic">
          <img src="https://images.unsplash.com/photo-1490750967868-88aa4486c946" alt="Flower" className="w-full h-full object-cover rounded-t-full" />
          </div>
        </div>

        {/* Right Side: Welcome Text */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-16 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-light text-gray-800 leading-[1.1]">
           Nurturing Your Path <br /> to Wellness
          </h2>
          <p className="mt-8 text-gray-600 tracking-wide text-lg max-w-md">
           Compassionate Therapy for a Balanced Life. 
          </p>
          <button className="mt-12 px-10 py-4 border border-gray-400 text-[10px] uppercase tracking-[0.3em] hover:bg-blue-700 hover:text-white transition-all duration-500">
            Connect With Me
          </button>
        </div>
      </section>
      {/* About Me Section */}
      <section className="py-20 bg-white px-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-light text-gray-800 mb-6">About Me</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Hello! I am Dr. Maya Reynolds, a passionate wellness practitioner 
              dedicated to helping individuals find their balance and peace. 
              I combine traditional wisdom with modern practices to nurture your path.
            </p>
          </div>
          {/* Services Section */}
      <section className="py-20 bg-purple-50 px-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-purple-900 mb-4">Therapy</h3>
              <p className="text-gray-600 font-light">Personalized sessions for mental wellness and emotional balance.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-purple-200 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-purple-900 mb-4">Yoga</h3>
              <p className="text-gray-600 font-light">Mindfulness through movement and breath for a healthy body.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-medium text-purple-900 mb-4">Meditation</h3>
              <p className="text-gray-600 font-light">Deep relaxation techniques to improve focus and reduce stress.</p>
            </div>
          </div>
        </div>
      </section>
          <div className="md:w-1/2 bg-purple-50 p-10 rounded-3xl">
            <h3 className="text-xl font-medium text-purple-900 mb-3">My Mission</h3>
            <p className="text-purple-800 italic">"To provide a safe space for healing and personal growth."</p>
          </div>
        </div>
      </section>
    </main>
  );
}