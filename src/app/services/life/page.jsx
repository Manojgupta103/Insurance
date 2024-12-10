import InsuranceInfo from '../../components/InsuranceInfo'

export default function LifeInsurance() {
  return (
    <InsuranceInfo
      title="Life Insurance"
      description="Secure your family's financial future with our life insurance policies. We offer both term and whole life insurance options to fit your needs and budget."
      benefits={[
        "Financial security for your loved ones",
        "Tax-free death benefit",
        "Cash value accumulation (for whole life policies)",
        "Flexible premium payment options",
        "Optional riders for additional coverage"
      ]}
      coverageOptions={[
        "Term life insurance",
        "Whole life insurance",
        "Universal life insurance",
        "Variable life insurance",
        "Final expense insurance"
      ]}
    />
  )
}

