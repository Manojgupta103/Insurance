import InsuranceInfo from '../../components/InsuranceInfo'

export default function HealthInsurance() {
  return (
    <InsuranceInfo
      title="Health Insurance"
      description="Get access to quality healthcare with our comprehensive health insurance plans. We offer coverage for individuals and families to help you manage your medical expenses."
      benefits={[
        "Access to a wide network of healthcare providers",
        "Coverage for preventive care and wellness services",
        "Prescription drug coverage",
        "Mental health and substance abuse treatment",
        "Maternity and newborn care"
      ]}
      coverageOptions={[
        "Individual health plans",
        "Family health plans",
        "High-deductible health plans (HDHP)",
        "Preferred Provider Organization (PPO) plans",
        "Health Maintenance Organization (HMO) plans"
      ]}
    />
  )
}

