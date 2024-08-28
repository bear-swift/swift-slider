export interface PlanDetail {
  numProject: string;
  numForm: string;
  numTeamMember: string;
  numSubmission: string;
  sizeStorage: string;
  numFieldsForForm: string;

  customBranding: boolean;
  customSubDomain: boolean;
  customeFieldRegex: boolean;
  serviceLevelAgreement: boolean;
  LDAPAuth: boolean;
  emailOTPAuth: boolean;
  geoLocationAuth: boolean;
  publicIpAuth: boolean;
  whatsAppAuth: boolean;
  smsAuth: boolean;
  apiIntegration: boolean;
  webhookIntegration: boolean;
  googleAnalyticsIntegration: boolean;
  smtpIntegration: boolean;
  paymentIntegration: boolean;
  lang_arabic_english: boolean;
  exportExcelPDF: boolean;
  askAI: boolean;
  aiAsssist: boolean;
}

export interface Plan {
  title: string;
  price: {
    monthly: number;
    yearly: number;
  };
  detail: PlanDetail;
}
