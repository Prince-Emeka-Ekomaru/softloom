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
                  className="hover:text-softloom-green transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-softloom-green transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-softloom-green transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-softloom-green transition-colors">
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
                <a href="#" className="hover:text-softloom-green transition-colors">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-softloom-green transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-softloom-green transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-softloom-green transition-colors">
                  API Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-softloom-green transition-colors">
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
                <a href="#" className="hover:text-softloom-green transition-colors">
                  Financial Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-softloom-green transition-colors">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-softloom-green transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-softloom-green transition-colors">
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
                  className="hover:text-softloom-green transition-colors"
                >
                  Contact Sales
                </button>
              </li>
              <li>
                <a
                  href="mailto:hello@softloom.com"
                  className="hover:text-softloom-green transition-colors"
                >
                  hello@softloom.com
                </a>
              </li>
              <li className="pt-4">
                <p className="text-gray-400 text-sm">Our Location</p>
                <p className="text-sm">
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
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <svg
                className="w-8 h-8"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="8" fill="#0B3D2E" />
                <path
                  d="M12 28C12 28 15 22 20 22C25 22 28 28 28 28"
                  stroke="#F5F1E6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M12 18C12 18 15 12 20 12C25 12 28 18 28 18"
                  stroke="#D6BA73"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-xl font-bold">Softloom</span>
            </div>
            <div className="text-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Softloom Technologies. All rights reserved.</p>
              <p className="mt-1">Crafting innovative software solutions for modern businesses.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

