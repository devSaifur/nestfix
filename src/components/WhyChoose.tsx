import { whyChoose } from '@/data/whyChoose'
import { FiCheck } from 'react-icons/fi'

const WhyChoose = () => {
  return (
    <section className="relative py-28">
      <span className="to-110% absolute bottom-1/3 left-1/3 h-40 w-40 rounded-full bg-gradient-to-br from-sky-200 from-0% via-primary via-80% to-green-400"></span>
      <span className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-gradient-to-br from-yellow-200 from-0% via-sky-500 via-85% to-primary to-100%"></span>
      <span className="to-110% absolute right-1/3 top-1/3 h-40 w-40 rounded-full bg-gradient-to-br from-green-300 from-0% via-primary via-80% to-sky-400"></span>

      <span className="to-110% absolute right-3/4 top-1/3 h-40 w-40 rounded-full bg-gradient-to-br from-green-300 from-0% via-primary via-80% to-sky-400"></span>
      <div className="mx-auto w-full max-w-7xl space-y-10 px-5 sm:px-8 md:space-y-12 md:px-14 lg:px-5">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-heading-1 text-2xl font-semibold sm:text-3xl md:text-4xl">
            Why Choose Us?
          </h1>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {whyChoose.map((service) => {
            return (
              <div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-slate-100/70 to-zinc-200/60 p-5 shadow-md shadow-slate-700 backdrop-blur-md hover:bg-black/10 sm:p-6 lg:p-8"
                key={service.title}
              >
                <div className="text-heading-1 relative w-max rounded-xl bg-slate-200 p-3">
                  <span className="text-2xl font-semibold">{service.icon}</span>
                </div>
                <div className="relative mt-6 space-y-4">
                  <h2 className="text-heading-2 text-lg font-semibold md:text-xl">
                    {service.title}
                  </h2>
                  <div className="text-heading-3 md:text-lg">
                    <div className="text-heading-3 mt-8 list-outside list-disc space-y-4 font-medium">
                      {service.features.map((feature) => {
                        return (
                          <div
                            className="flex items-center font-medium"
                            key={feature}
                          >
                            <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full font-bold">
                              <FiCheck className="h-4 w-4" />
                            </span>
                            {feature}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
