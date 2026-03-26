import Head from 'next/head'

export default function SEO({
  title = 'The Life of a Showman | Roshan Sivakumar',
  description = 'Roshan Sivakumar — The Industrial Showman. COO at Sri Jai Groups. MBA & MDA Candidate at VCU. Mechanical Engineer turned Operations Analytics leader. Born Chennai, 2003.',
  keywords = 'Roshan Sivakumar, Roshan Rajkumar Sivakumar, Industrial Showman, Operations Analytics, VCU, Sri Jai Groups, Sri Jai Chakraa Motors, RR Hevirex, Manufacturing Analytics, Chennai, Lean Operations',
  url = 'https://roshanrsivakumar.com',
  image = 'https://roshanrsivakumar.com/images/og-image.jpg',
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Roshan Rajkumar Sivakumar',
    alternateName: ['Roshan Sivakumar', 'Roshan Rajkumar', 'The Industrial Showman'],
    url: 'https://roshanrsivakumar.com',
    birthDate: '2003-07-20',
    birthPlace: { '@type': 'Place', name: 'Chennai, Tamil Nadu, India' },
    jobTitle: 'COO, Sri Jai Groups | MBA & MDA Candidate',
    worksFor: { '@type': 'Organization', name: 'Sri Jai Groups' },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'M. Kumarasamy College of Engineering' },
      { '@type': 'CollegeOrUniversity', name: 'Christ University' },
      { '@type': 'CollegeOrUniversity', name: 'Virginia Commonwealth University' },
    ],
    sameAs: [
      'https://www.linkedin.com/in/roshanrsivakumar',
      'https://twitter.com/roshanrsivakumar',
      'https://github.com/roshanrsivakumar',
      'https://www.wikidata.org/wiki/Q138789937',
    ],
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Roshan Sivakumar" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="profile" />
      <meta property="og:image" content={image} />
      <meta property="profile:first_name" content="Roshan" />
      <meta property="profile:last_name" content="Sivakumar" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@roshanrsivakumar" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  )
}
