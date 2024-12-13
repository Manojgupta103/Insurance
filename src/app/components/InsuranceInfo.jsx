import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const InsuranceInfo = ({ title, description, benefits, coverageOptions }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <p className="text-lg mb-8">{description}</p>

      <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
      <ul className="list-disc pl-6 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="mb-2">{benefit}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Coverage Options</h2>
      <ul className="list-disc pl-6 mb-8">
        {coverageOptions.map((option, index) => (
          <li key={index} className="mb-2">{option}</li>
        ))}
      </ul>

      <Link href="/quote" className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
        Get a Quote
      </Link>
    </div>
  )
}

InsuranceInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
  coverageOptions: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default InsuranceInfo

