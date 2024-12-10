import InsuranceInfo from '../../components/InsuranceInfo'

export default function AutoInsurance() {
  return (
    <InsuranceInfo
      title="Auto Insurance"
      description="Our auto insurance policies provide comprehensive coverage to protect you, your vehicle, and others on the road. We offer flexible plans to suit your needs and budget."
      benefits={[
        "Protection against accidents, theft, and damage",
        "24/7 roadside assistance",
        "Personal injury coverage",
        "Rental car reimbursement",
        "Flexible deductible options"
      ]}
      coverageOptions={[
        "Liability coverage",
        "Collision coverage",
        "Comprehensive coverage",
        "Uninsured/underinsured motorist coverage",
        "Medical payments coverage"
      ]}
    />
  )
}

