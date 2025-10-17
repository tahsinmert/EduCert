import { groq } from "next-sanity";

export const coursesQuery = groq`
  *[_type=="course"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    level,
    tags,
    "cover": coverImage.asset->url,
    duration
  }
`;

export const recentCoursesQuery = groq`
  *[_type=="course"] | order(_createdAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    level,
    tags,
    "cover": coverImage.asset->url,
    duration
  }
`;

export const courseBySlugQuery = groq`
  *[_type=="course" && slug.current==$slug][0] {
    _id,
    title,
    content,
    shortDescription,
    level,
    tags,
    educationType,
    "cover": coverImage.asset->url,
    duration
  }
`;

export const templatesQuery = groq`
  *[_type=="certificateTemplate"] {
    _id,
    title,
    "slug": slug.current,
    primaryColor,
    "bg": bgImage.asset->url,
    issuedBy,
    footerText
  }
`;

export const certificateByPublicUrlQuery = groq`
  *[_type=="issuedCertificate" && publicUrl==$publicUrl][0] {
    _id,
    userName,
    issueDate,
    verificationCode,
    course-> {
      title,
      educationType,
      "slug": slug.current
    },
    template-> {
      title,
      primaryColor,
      "bg": bgImage.asset->url,
      issuedBy,
      footerText
    }
  }
`;

export const certificateByVerificationCodeQuery = groq`
  *[_type=="issuedCertificate" && verificationCode==$verificationCode][0] {
    _id,
    userName,
    issueDate,
    verificationCode,
    publicUrl,
    course-> {
      title,
      educationType,
      "slug": slug.current
    },
    template-> {
      title,
      primaryColor,
      "bg": bgImage.asset->url,
      issuedBy,
      footerText
    }
  }
`;

