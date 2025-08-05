import { benefits } from '@/data/benefits'
import BenefitSection from './ServiceSection'

const Services = () => {
  return (
    <div id="services" className="scroll-mt-36">
      <h2 className="sr-only">Services</h2>
      {benefits.map((item, index) => {
        return (
          <BenefitSection
            key={index}
            benefit={item}
            imageAtRight={index % 2 !== 0}
          />
        )
      })}
    </div>
  )
}

export default Services
