export default function Home() {
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="logo">
            <h1 className="text-2xl font-bold text-blue-600">Datahacks</h1>
          </div>
          <ul className="flex space-x-8">
            <li><a href="/blog" className="hover:text-blue-600 transition-colors">Blog</a></li>
            <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Enterprise Development & Infrastructure Solutions</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Accelerate your business with scalable development and robust infrastructure tailored for enterprise teams.</p>
            <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block">Get Started</a>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Custom Development</h3>
                <p className="text-gray-600">Full-stack application development using modern technologies and best practices for enterprise-grade solutions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Cloud Infrastructure</h3>
                <p className="text-gray-600">Scalable cloud architecture design and implementation on AWS, Azure, and Google Cloud platforms.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">DevOps & CI/CD</h3>
                <p className="text-gray-600">Streamline your deployment pipeline with automated testing, continuous integration, and deployment strategies.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Microservices Architecture</h3>
                <p className="text-gray-600">Design and implement scalable microservices architectures for complex enterprise applications.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Database Solutions</h3>
                <p className="text-gray-600">Design, optimize, and manage enterprise databases for performance, security, and scalability.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Security & Compliance</h3>
                <p className="text-gray-600">Implement robust security measures and ensure compliance with industry standards and regulations.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Why Choose Datahacks?</h2>
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Enterprise-Ready Solutions</h3>
                <p className="text-gray-600 mb-8">We specialize in building robust, scalable solutions that meet the demanding requirements of enterprise environments. Our team brings deep expertise in modern development practices and infrastructure management.</p>
                
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Proven Track Record</h3>
                <p className="text-gray-600 mb-8">With years of experience serving enterprise clients, we understand the complexities of large-scale systems and the importance of reliability, security, and performance.</p>
                
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Technology Expertise</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• React, Node.js, Python, Java, .NET</li>
                  <li>• AWS, Azure, Google Cloud</li>
                  <li>• Kubernetes, Docker, Terraform</li>
                  <li>• PostgreSQL, MongoDB, Redis</li>
                  <li>• CI/CD pipelines and automation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Infrastructure?</h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Let&apos;s discuss how we can help accelerate your development and optimize your infrastructure.</p>
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Email</h3>
                <p className="text-gray-600">datahacks@protonmail.com</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Schedule a Call</h3>
                <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors inline-block">Book Consultation</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Datahacks. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
