import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { operationsStaffValidationSchema } from 'validationSchema/operations-staffs';
import { OperationsDashboardInterface } from 'interfaces/operations-dashboard';
import { UserInterface } from 'interfaces/user';
import { OperationsStaffInterface } from 'interfaces/operations-staff';

function OperationsStaffCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: OperationsStaffInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.operations_staff.create({ data: values as RoqTypes.operations_staff });
      resetForm();
      router.push('/operations-staffs');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<OperationsStaffInterface>({
    initialValues: {
      staff_name: '',
      staff_role: '',
      dashboard_id: (router.query.dashboard_id as string) ?? null,
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: operationsStaffValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Operations Staffs',
              link: '/operations-staffs',
            },
            {
              label: 'Create Operations Staff',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Operations Staff
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.staff_name}
            label={'Staff Name'}
            props={{
              name: 'staff_name',
              placeholder: 'Staff Name',
              value: formik.values?.staff_name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.staff_role}
            label={'Staff Role'}
            props={{
              name: 'staff_role',
              placeholder: 'Staff Role',
              value: formik.values?.staff_role,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<OperationsDashboardInterface>
            formik={formik}
            name={'dashboard_id'}
            label={'Select Operations Dashboard'}
            placeholder={'Select Operations Dashboard'}
            fetcher={() => roqClient.operations_dashboard.findManyWithCount({})}
            labelField={'dashboard_name'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/operations-staffs')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'operations_staff',
    operation: AccessOperationEnum.CREATE,
  }),
)(OperationsStaffCreatePage);
