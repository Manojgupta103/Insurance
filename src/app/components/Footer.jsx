import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">InsureEase</h3>
            <p>Your trusted insurance partner since 1995</p>
            <p className="mt-2">Providing peace of mind through comprehensive insurance solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/auto" className="hover:text-blue-300">Auto Insurance</Link></li>
              <li><Link href="/services/home" className="hover:text-blue-300">Home Insurance</Link></li>
              <li><Link href="/services/life" className="hover:text-blue-300">Life Insurance</Link></li>
              <li><Link href="/services/health" className="hover:text-blue-300">Health Insurance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link href="/quote" className="hover:text-blue-300">Get a Quote</Link></li>
              <li><Link href="/claims" className="hover:text-blue-300">File a Claim</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p>123 Insurance Street</p>
            <p>Cityville, State 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@insureease.com</p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-blue-300">Facebook</a>
              <a href="#" className="hover:text-blue-300">Twitter</a>
              <a href="#" className="hover:text-blue-300">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023Narkar Insurance. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-blue-300">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-blue-300 ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

