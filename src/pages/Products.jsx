import SolutionsPortfolio from '../components/SolutionsPortfolio'
import EnterpriseProductShowcase from '../components/EnterpriseProductShowcase'
import FAQSection from '../components/FAQSection'
import PremiumContactForm from '../components/PremiumContactForm'

export default function Products() {
  return (
    <main>
      {/* Products Hero Section */}
      <section className="products-hero">
        <div className="products-hero-content">
          <h1>Enterprise Product Suite</h1>
          <p>Purpose-built solutions for premium operations at scale</p>
        </div>
      </section>

      <EnterpriseProductShowcase />
      <SolutionsPortfolio />
      <PremiumContactForm />
      <FAQSection />
    </main>
  )
}
