/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Protect What Matters Most</h1>
              <p className="text-xl mb-6">Get comprehensive insurance coverage tailored to your needs.</p>
              <Link href="/quote" className="bg-white text-blue-600 py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
                Get a Free Quote
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg"
                alt="Happy family protected by insurance"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Insurance Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Auto', description: 'Comprehensive coverage for your vehicles, including liability, collision, and personal injury protection.' },
              { name: 'Home', description: 'Protect your home and belongings with our flexible homeowners insurance policies.' },
              { name: 'Life', description: 'Secure your familys future with our range of term and whole life insurance options.' },
              { name: 'Health', description: 'Get access to quality healthcare with our individual and family health insurance plans.' }
            ].map((service) => (
              <div key={service.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-4">{service.name} Insurance</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={`/services/${service.name.toLowerCase()}`} className="text-blue-600 hover:text-blue-800">
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'John Doe', text: 'InsureEase made getting insurance so easy. Their customer service is top-notch!' },
              { name: 'Jane Smith', text: 'I saved so much money by switching toNarkar Insurance. Highly recommended!' },
              { name: 'Bob Johnson', text: 'The claims process was smooth and hassle-free. I\'m a customer for life!' },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Get your free quote today and see how much you can save!</p>
          <Link href="/quote" className="bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

