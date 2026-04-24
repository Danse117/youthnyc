export const siteConfig = {
  name: "Youth & Community Empowerment Center",
  shortName: "YCEC",
  tagline: "Today's Youth, Tomorrow's Leaders",
  description:
    "Youth Center based in Brooklyn, New York. Non-Profit organization created to empower the future leaders of the world.",
  url: "https://www.youthnyc.org",
  donationUrl: "https://www.paypal.com/ncp/payment/UGX3TCWU8ZREN",
  volunteerFormUrl: "https://forms.gle/yRJeWk4dvRnC89bMA",
  email: "info@youthnyc.org",
  phone: "(718) 866-0666",
  address: {
    street: "568 Bay Ridge PKWY",
    city: "Brooklyn",
    state: "NY",
    zip: "11209",
  },
  social: {
    facebook:
      "https://www.facebook.com/people/Youth-Community-Empowerment-Center/61585605772178/",
    instagram:
      "https://www.instagram.com/centeryouthcommunity?igsh=MWE4czJscG11dHczZA==",
  },
  logo: "/images/assets/youthnyc_icon.png",
  logoCompact: "/images/assets/image04.png",
  galleryDropbox:
    "https://www.dropbox.com/scl/fo/wqct8fjzba99nk1jailzm/AFmT2-tP5vybMMbhve1XAVY?rlkey=nnktp0qztx8xjn5r5f55jo64h&st=iryoxc6o&dl=0",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Donate", href: "/donate", isCta: true },
];

export const heroContent = {
  heading: "Help Empower\nThe Youth",
  subheading: "Sign up to volunteer today. Be the change they need.",
  primaryCta: { label: "Donate Now", href: "/donate" },
  secondaryCta: { label: "Sign Up to Volunteer", href: siteConfig.volunteerFormUrl, external: true },
  backgroundImage: "/images/slideshow01-0b7759d4.jpg",
};

export const missionContent = {
  heading: "Our Mission",
  subheading: "Shaping a Brighter Future",
  tagline: "Dedicated to impact.",
  text: "We are committed to unlocking youth potential through transformative education, specialized training, and civic action\u2014building a resilient culture of leadership and innovation that strengthens our global society.",
};

export const visionContent = {
  heading: "Our Vision",
  subheading: "Empowering the Next Generation",
  tagline: "Leading through excellence.",
  text: "To be a global catalyst for youth empowerment, cultivating a generation of skilled, responsible, and visionary leaders who drive sustainable progress and foster inclusive community growth.",
};

export const aboutContent = {
  overview: {
    heading: "About Us",
    paragraphs: [
      "We are a nonprofit organization dedicated to empowering young people and nurturing their full potential. We believe it is the shared responsibility of families, schools, local institutions, and community members to work together to create a safe, supportive, and enriching environment where our youth can learn, grow, and thrive as the next generation of leaders.",
      "Through collaborative programs, mentorship, and meaningful opportunities for engagement, we strive to equip every young person with the skills, confidence, and character they need to positively impact their community and the world.",
    ],
  },
  values: [
    {
      title: "Education",
      description:
        "We believe education is the foundation for empowerment and positive change.",
    },
    {
      title: "Community",
      description:
        "We foster strong community bonds that support collective growth and resilience.",
    },
    {
      title: "Leadership",
      description:
        "We cultivate leadership skills in young people to prepare them for future success.",
    },
    {
      title: "Innovation",
      description:
        "We embrace innovative approaches to youth development and community building.",
    },
    {
      title: "Inclusivity",
      description:
        "We welcome all members of the community regardless of background or circumstance.",
    },
    {
      title: "Empowerment",
      description:
        "We empower youth and families to achieve independence, productivity, and stability.",
    },
  ],
};

export const programs = [
  {
    id: "sports",
    title: "Sports Programs",
    subtitle: "Energizing Youth Through Physical Activity",
    description:
      "Our youth sports programs in Brooklyn provide young people with opportunities to develop athletic skills, teamwork, and healthy habits. At our Bay Ridge center, we offer organized sports activities coached by experienced mentors who build confidence, discipline, and lasting friendships.",
    features: [
      "Soccer",
      "Basketball",
      "Volleyball",
      "Swimming",
      "Chess",
    ],
    image: "/images/slideshow02-6ff65f87.jpg",
    signUpUrl: "https://docs.google.com/forms/d/e/1FAIpQLSd6lBX3A_XMofCuhba4bdEMEQYE1aZIYIUYSJrlfM7Xa_mHlw/viewform",
    cta: { label: "Sign Up", href: "https://docs.google.com/forms/d/e/1FAIpQLSd6lBX3A_XMofCuhba4bdEMEQYE1aZIYIUYSJrlfM7Xa_mHlw/viewform" },
  },
  {
    id: "educational",
    title: "Educational Program",
    subtitle: "Empowering with Education",
    description:
      "Our educational programs in Bay Ridge, Brooklyn support academic achievement and professional growth. We help young people prepare for college and careers through tutoring, mentorship, and hands-on learning at our community center.",
    features: [
      "College Prep",
      "Alumni Support",
      "Networking",
      "Graduation Ceremony",
      "Professional Development",
    ],
    image: "/images/gallery01/d56cbf97.jpg",
    signUpUrl: "https://docs.google.com/forms/d/e/1FAIpQLScn8pb120ZH3F_0N3VtDIpPdg6KLDvooCydjPfeFZuB3Cws8A/viewform",
    cta: { label: "Sign Up", href: "https://docs.google.com/forms/d/e/1FAIpQLScn8pb120ZH3F_0N3VtDIpPdg6KLDvooCydjPfeFZuB3Cws8A/viewform" },
  },
  {
    id: "language",
    title: "Language Classes",
    subtitle: "Helping the youth and the elders communicate.",
    description:
      "Our Arabic and English language classes in Brooklyn help community members of all ages develop communication skills and connect across cultures and generations. Classes are held at our Bay Ridge center for youth and adults.",
    features: [
      "Arabic Classes",
      "English Classes",
    ],
    image: "/images/slideshow02-938a08ad.jpg",
    signUpUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdRuJWjeyfKfkX-TbB2Gq25sSpmEw53oqwVVRqp9Z3VdDY6Lw/viewform",
    cta: { label: "Sign Up", href: "https://docs.google.com/forms/d/e/1FAIpQLSdRuJWjeyfKfkX-TbB2Gq25sSpmEw53oqwVVRqp9Z3VdDY6Lw/viewform" },
  },
  {
    id: "afterschool",
    title: "After-School Programs",
    subtitle: "Engaging With The Youth After-School",
    description:
      "Our after-school programs in Bay Ridge, Brooklyn provide a safe, engaging environment for youth during critical after-school hours. We combine homework help, tutoring, and leadership training with enrichment activities at our community center.",
    features: [
      "Homework Help",
      "Tutoring",
      "Leadership Training",
    ],
    image: "/images/gallery01/3842271f.jpg",
    signUpUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfYpIFUQnKYBPVwg-JAzRy1dePChZfoZqxmauT1kUucRNp4Mg/viewform",
    cta: { label: "Sign Up", href: "https://docs.google.com/forms/d/e/1FAIpQLSfYpIFUQnKYBPVwg-JAzRy1dePChZfoZqxmauT1kUucRNp4Mg/viewform" },
  },
];

export const galleryImages = [
  {
    src: "/images/gallery01/eed5dc90.jpg",
    alt: "YCEC Ramadan Welcome 2026 community gathering in Brooklyn",
    caption: "Ramadan Welcome 2026 — Bay Ridge, Brooklyn",
  },
  {
    src: "/images/gallery01/d56cbf97.jpg",
    alt: "YCEC youth graduation ceremony in Brooklyn NY",
    caption: "Youth Graduation Ceremony",
  },
  {
    src: "/images/gallery01/fbf2588e.jpg",
    alt: "YCEC graduate celebrating educational program achievement in Brooklyn",
    caption: "Celebrating Our Graduates",
  },
  {
    src: "/images/gallery01/3842271f.jpg",
    alt: "YCEC youth at after-school community event in Bay Ridge Brooklyn",
    caption: "Youth After-School Community Event",
  },
  {
    src: "/images/slideshow01-0b7759d4.jpg",
    alt: "YCEC community members at Ramadan celebration in Brooklyn NY",
    caption: "Community Ramadan Gathering — Brooklyn",
  },
  {
    src: "/images/slideshow01-4c6df786.jpg",
    alt: "Youth & Community Empowerment Center Brooklyn group photo",
    caption: "YCEC Community Event",
  },
  {
    src: "/images/slideshow02-6ff65f87.jpg",
    alt: "YCEC youth sports and family event in Bay Ridge Brooklyn",
    caption: "Youth & Family Sports Event",
  },
  {
    src: "/images/slideshow02-938a08ad.jpg",
    alt: "YCEC community outreach and youth programs event in Brooklyn",
    caption: "Community Outreach — Brooklyn",
  },
  {
    src: "/images/slideshow02-58c16b3d.jpg",
    alt: "YCEC community celebration event at Bay Ridge center",
    caption: "Community Celebration — Bay Ridge",
  },
  {
    src: "/images/image1.JPG",
    alt: "YCEC community program moment in Brooklyn",
  },
  {
    src: "/images/image2.JPG",
    alt: "YCEC community program moment in Brooklyn",
  },
  {
    src: "/images/image3.JPG",
    alt: "YCEC community program moment in Brooklyn",
  },
  {
    src: "/images/image4.JPG",
    alt: "YCEC community program moment in Brooklyn",
  },
  {
    src: "/images/image5.jpeg",
    alt: "YCEC community program moment in Brooklyn",
  },
  {
    src: "/images/image6.JPG",
    alt: "YCEC community program moment in Brooklyn",
  },
  {
    src: "/images/image7.JPG",
    alt: "YCEC community program moment in Brooklyn",
  },
  {
    src: "/images/image8.JPG",
    alt: "YCEC community program moment in Brooklyn",
  },
  {
    src: "/images/image20.JPG",
    alt: "YCEC community program moment in Brooklyn",
  },
  {
    src: "/images/image21.JPG",
    alt: "YCEC community program moment in Brooklyn",
  },
  {
    src: "/images/image22.JPG",
    alt: "YCEC community program moment in Brooklyn",
  },
  {
    src: "/images/image10.jpeg",
    alt: "YCEC community program moment in Brooklyn",
  },
  {
    src: "/images/image11.jpeg",
    alt: "YCEC community program moment in Brooklyn",
  },
  {
    src: "/images/image12.jpeg",
    alt: "YCEC community program moment in Brooklyn",
  },
];

export const donateContent = {
  heading: "Support Our Mission",
  subheading: "Your donation makes a difference",
  description:
    "When you give to the Youth & Community Empowerment Center, you invest in the future of our neighborhood\u2019s youth. Your contribution helps sustain free and low-cost programs in sports, education, Arabic, and after-school enrichment, ensuring that every young person has access to a safe, supportive environment. Together, we can provide mentorship, meaningful opportunities, and a sense of belonging for the next generation of community leaders.",
  impactStats: [
    { number: "500+", label: "Youth Served Annually" },
    { number: "4", label: "Core Programs" },
    { number: "100%", label: "Community Focused" },
  ],
  impactItems: [
    "Fund sports programs including soccer, basketball, volleyball, and swimming",
    "Support educational programs, college prep, and graduation ceremonies",
    "Provide Arabic and English language classes for youth and elders",
    "Maintain after-school programming with homework help and tutoring",
    "Enable community events, mentorship, and leadership training",
  ],
  ctaText: "Donate Now",
  zelleInfo: {
    image: "/images/assets/image02.png",
    text: "You can also donate via Zelle to info@youthnyc.org",
  },
  otherWays: {
    heading: "Other Ways to Help",
    items: [
      {
        title: "Volunteer",
        description:
          "Sign up to volunteer and be the change they need. Give your time and skills to support our programs and events.",
      },
      {
        title: "Spread the Word",
        description:
          "Share our mission with friends, family, and your network to help us reach more youth.",
      },
      {
        title: "Partner With Us",
        description:
          "Organizations and businesses can partner with YCEC to create lasting impact in the community.",
      },
    ],
  },
};

export const volunteerContent = {
  heading: "Help Empower The Youth",
  subheading: "Ready to Help?",
  description:
    "Sign up to volunteer today. Be the change they need. Join our team of dedicated volunteers and make a direct impact in the lives of young people in our community.",
  cta: { label: "Sign Up to Volunteer", href: siteConfig.volunteerFormUrl },
};

export const footerContent = {
  description:
    "Non-Profit organization created to empower the future leaders of the world.",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Gallery", href: "/gallery" },
    { label: "About Us", href: "/about" },
  ],
  actionLinks: [
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: siteConfig.volunteerFormUrl },
    { label: "Contact Us", href: "/about" },
  ],
  copyright: `\u00A9 ${new Date().getFullYear()} Youth & Community Empowerment Center. All rights reserved.`,
};
