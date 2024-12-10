import InsuranceInfo from '../../components/InsuranceInfo'

export default function HomeInsurance() {
  return (
    <InsuranceInfo
      title="Home Insurance"
      description="Protect your most valuable asset with our comprehensive home insurance policies. We offer coverage for your house, personal belongings, and liability protection."
      benefits={[
        "Protection against natural disasters and theft",
        "Personal liability coverage",
        "Additional living expenses coverage",
        "Flexible deductible options",
        "Bundling discounts with other policies"
      ]}
      coverageOptions={[
        "Dwelling coverage",
        "Personal property coverage",
        "Liability protection",
        "Medical payments to others",
        "Additional structures coverage"
      ]}
    />
  )
}

