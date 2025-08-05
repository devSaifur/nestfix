import ByNumbers from '@/components/ByNumber'
import Container from '@/components/Container'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Services from '@/components/Services/Services'
import Testimonials from '@/components/Testimonials'
import WhyChoose from '@/components/WhyChoose'

const HomePage = () => {
  return (
    <>
      <Hero />
      <ByNumbers />
      <Container>
        <Services />

        <WhyChoose />

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
          className="scroll-mt-24"
        >
          <Testimonials />
        </Section>

        <FAQ />

        <CTA />
      </Container>
    </>
  )
}

export default HomePage
