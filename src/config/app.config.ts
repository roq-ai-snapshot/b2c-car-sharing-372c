interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Operations Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Operations Manager', 'Operations Staff'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read car information', 'Create bookings', 'Edit your info', 'Read booking information'],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage car data', 'Manage booking data'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/dacc5b58-06f5-4624-a1ed-fe3622975c64',
};
