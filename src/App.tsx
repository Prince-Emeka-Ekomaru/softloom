import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Industries from './components/Industries'
import WhyPartner from './components/WhyPartner'
import CTASections from './components/CTASections'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Industries />
          <WhyPartner />
          <CTASections />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

