const CTASections = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* CTA Section 1 - Products in Customers' Hands */}
      <section className="py-20 bg-softloom-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Put Your Products in the Hands of Your Customers
            </h2>
            <p className="text-xl md:text-2xl text-green-50 mb-8">
              We specialize in delivering innovative solutions to clients across diverse industries.
              Let's bring your vision to life with technology that connects and engages.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-softloom-green hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section 2 - Specific Solutions */}
      <section className="py-20 bg-gradient-to-br from-softloom-blue to-softloom-dark-blue text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Looking for Something Specific?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                We make it easier than ever to create exceptional digital experiences that your customers will love.
                Our bespoke technology services are tailored to your unique business needs and industry requirements.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-softloom-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Custom software development</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-softloom-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Cloud migration & infrastructure</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-softloom-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">Digital transformation consulting</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 text-softloom-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">24/7 technical support & maintenance</span>
                </li>
              </ul>
              <button
                onClick={scrollToContact}
                className="btn-primary text-lg"
              >
                Discuss Your Needs
              </button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-softloom-green rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Proven Track Record</h4>
                      <p className="text-gray-300">500+ successful projects delivered across 20+ industries</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-softloom-yellow rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Rapid Deployment</h4>
                      <p className="text-gray-300">Get to market faster with our agile development approach</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-softloom-green rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Cost-Effective</h4>
                      <p className="text-gray-300">Maximize ROI with efficient development processes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTASections

