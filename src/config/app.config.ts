interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Account Manager', 'Finance Team Member', 'Sales Representative'],
  tenantName: 'Business',
  applicationName: 'in-voice',
  addOns: ['chat', 'notifications', 'file'],
};
