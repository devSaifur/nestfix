import { cn } from '@/lib/utils'
import SectionTitle from './SectionTitle'

interface Props {
  id: string
  title: string
  description: string
}

const Section = ({
  id,
  title,
  description,
  children,
  className
}: React.ComponentPropsWithoutRef<'section'> & Props) => {
  return (
    <section id={id} className={cn('py-10 lg:py-20', className)}>
      <SectionTitle>
        <h2 className="mb-4 text-center">{title}</h2>
      </SectionTitle>
      <p className="mb-12 text-center">{description}</p>
      {children}
    </section>
  )
}

export default Section
