const Industries = () => {
  const industries = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Financial Services',
      description: 'Empower financial institutions with secure, compliant solutions. From digital banking to payment processing, we deliver robust platforms that meet regulatory requirements.',
      gradient: 'from-softloom-green to-emerald-600',
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: 'E-commerce',
      description: 'Build thriving online marketplaces with seamless shopping experiences. Our e-commerce solutions drive sales, optimize conversions, and scale with your growth.',
      gradient: 'from-softloom-blue to-blue-600',
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Healthcare',
      description: 'Transform patient care with innovative healthcare technology. We develop HIPAA-compliant solutions for telemedicine, patient management, and health data analytics.',
      gradient: 'from-softloom-yellow to-amber-600',
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Travel & Hospitality',
      description: 'Enhance guest experiences with smart booking systems and hospitality management tools. Create memorable journeys with technology that delights travelers.',
      gradient: 'from-softloom-green to-teal-600',
    },
  ]

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-softloom-blue">Industries We Serve</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Deep industry expertise combined with cutting-edge technology to deliver
            solutions that address your sector's unique challenges.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>

              {/* Content */}
              <div className="relative p-8 text-white">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4">{industry.title}</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  {industry.description}
                </p>
                <div className="mt-6 flex items-center font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  Explore Solutions
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries

