import {
  FiAward,
  FiLayers,
  FiMapPin,
  FiShield,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi'

export const whyChoose = [
  {
    title: 'Dependable Local Expertise',
    features: [
      'Deep understanding of your specific needs.',
      'Established reputation',
      'Quick response times within the local area.'
    ],
    icon: <FiMapPin size={24} />
  },
  {
    title: 'Comprehensive Service Range',
    features: [
      'Handles diverse maintenance tasks efficiently',
      'Reduces the need for multiple contractors',
      'Offers tailored solutions for various property types'
    ],
    icon: <FiLayers size={24} />
  },
  {
    title: 'Quality and Professionalism',
    features: [
      'Skilled and trained maintenance personnel',
      'Commitment to high standards of workmanship',
      'Use of reliable materials and techniques'
    ],
    icon: <FiAward size={24} />
  },
  {
    title: 'Proactive Property Care',
    features: [
      'Regular inspections to prevent issues',
      'Focus on long-term property preservation',
      'Helps avoid costly emergency repairs'
    ],
    icon: <FiShield size={24} />
  },
  {
    title: 'Transparent and Trustworthy',
    features: [
      'Clear communication and fair pricing',
      'Reliable service delivery as promised',
      'Focus on building lasting client relationships'
    ],
    icon: <FiUsers size={24} />
  },
  {
    title: 'Enhanced Property Value',
    features: [
      'Well-maintained properties attract better tenants',
      'Regular upkeep preserves asset integrity',
      'Contributes to a positive property image'
    ],
    icon: <FiTrendingUp size={24} />
  }
]
