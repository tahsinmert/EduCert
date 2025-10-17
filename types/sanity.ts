export interface Course {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  cover?: string;
  duration?: string;
  level?: string;
  tags?: string[];
  content?: any;
}

export interface CertificateTemplate {
  _id: string;
  title: string;
  slug: string;
  primaryColor: string;
  bg?: string;
  issuedBy: string;
  footerText?: string;
}

export interface IssuedCertificate {
  _id: string;
  userName: string;
  issueDate: string;
  verificationCode: string;
  publicUrl: string;
  course: {
    title: string;
    slug: string;
  };
  template: CertificateTemplate;
}

