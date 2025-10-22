const About = () => {
  const whyPoints = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Proven Expertise',
      description: 'A team of senior engineers with years of experience in financial technology.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'End-to-End Delivery',
      description: 'From concept to launch, we handle the full product lifecycle.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: 'Built for Scale',
      description: 'We architect solutions that grow with your business.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Human-Centered Design',
      description: 'Every interface, interaction, and workflow is designed for clarity and ease.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-softloom-green mb-8 text-center">
            About Softloom
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-xl text-gray-800">
              At Softloom, we <span className="font-semibold text-softloom-green">weave technology into powerful business outcomes</span>.
            </p>
            
            <p>
              For over four years, we've been helping startups, financial institutions, and enterprises 
              bring their digital visions to life — building products that are as reliable as they are 
              beautifully engineered.
            </p>
            
            <p>
              Our team is made up of experienced software engineers and product specialists, each with 
              over seven years of hands-on experience delivering solutions within the banking, fintech, 
              and enterprise technology space. We know the demands of mission-critical systems — and we 
              design with precision, performance, and people in mind.
            </p>
            
            <p>
              From mobile and web banking platforms to end-to-end digital ecosystems, Softloom brings 
              deep technical expertise and design simplicity together. Our process is guided by clarity, 
              collaboration, and innovation, ensuring that every line of code delivers measurable business value.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {/* Mission */}
          <div className="bg-gradient-to-br from-softloom-green to-softloom-dark-blue rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center mb-4">
              <svg className="w-10 h-10 text-softloom-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg text-white/90 leading-relaxed">
              To empower businesses through smart, secure, and scalable software solutions built for real-world impact.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-softloom-yellow to-amber-600 rounded-2xl p-8 text-white shadow-xl">
            <div className="flex items-center mb-4">
              <svg className="w-10 h-10 text-softloom-dark-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-lg text-white/90 leading-relaxed">
              To become Africa's most trusted software innovation partner — shaping the next generation of digital experiences.
            </p>
          </div>
        </div>

        {/* Why Softloom */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-softloom-dark-blue mb-4">
            Why Softloom
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            We don't just build software — we craft digital systems that work beautifully, 
            perform effortlessly, and endure.
          </p>

          {/* Why Points Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {whyPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-softloom-cream rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-softloom-green rounded-lg flex items-center justify-center text-white">
                  {point.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-softloom-dark-blue mb-2">
                    {point.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <p className="text-xl text-gray-700 italic border-l-4 border-softloom-yellow pl-6 py-4">
            At Softloom, we don't just build software — we craft digital systems that work beautifully, 
            perform effortlessly, and endure.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

