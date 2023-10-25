import { OperationsStaffInterface } from 'interfaces/operations-staff';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface OperationsDashboardInterface {
  id?: string;
  dashboard_name: string;
  dashboard_description?: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  operations_staff?: OperationsStaffInterface[];
  company?: CompanyInterface;
  _count?: {
    operations_staff?: number;
  };
}

export interface OperationsDashboardGetQueryInterface extends GetQueryInterface {
  id?: string;
  dashboard_name?: string;
  dashboard_description?: string;
  company_id?: string;
}
