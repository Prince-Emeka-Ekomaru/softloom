const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-softloom-dark-blue text-softloom-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-softloom-yellow">About Softloom</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-softloom-cream hover:text-softloom-yellow transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <a href="#" className="text-softloom-cream hover:text-softloom-yellow transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-softloom-cream hover:text-softloom-yellow transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-softloom-cream hover:text-softloom-yellow transition-colors">
                  Partner with Us
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-softloom-yellow">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-softloom-cream hover:text-softloom-yellow transition-colors">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="text-softloom-cream hover:text-softloom-yellow transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#" className="text-softloom-cream hover:text-softloom-yellow transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="text-softloom-cream hover:text-softloom-yellow transition-colors">
                  API Services
                </a>
              </li>
              <li>
                <a href="#" className="text-softloom-cream hover:text-softloom-yellow transition-colors">
                  Enterprise Software
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-softloom-yellow">Industries</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-softloom-cream hover:text-softloom-yellow transition-colors">
                  Financial Services
                </a>
              </li>
              <li>
                <a href="#" className="text-softloom-cream hover:text-softloom-yellow transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-softloom-cream hover:text-softloom-yellow transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="text-softloom-cream hover:text-softloom-yellow transition-colors">
                  Travel & Hospitality
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-softloom-yellow">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-softloom-cream hover:text-softloom-yellow transition-colors"
                >
                  Contact Sales
                </button>
              </li>
              <li>
                <a
                  href="mailto:hello@softloom.com"
                  className="text-softloom-cream hover:text-softloom-yellow transition-colors"
                >
                  hello@softloom.com
                </a>
              </li>
              <li className="pt-4">
                <p className="text-softloom-cream/70 text-sm">Our Location</p>
                <p className="text-softloom-cream text-sm">
                  Workcity Africa, Polystar building
                  <br />
                  2nd roundabout, Lekki Phase 1
                  <br />
                  Lekki, Lagos 105102, Nigeria
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-softloom-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <img 
                src="/Softloom.svg" 
                alt="Softloom Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="text-center text-sm text-softloom-cream/70">
              <p>© 2020 Softloom Technologies. All rights reserved.</p>
              <p className="mt-1">Crafting innovative software solutions for modern businesses.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

