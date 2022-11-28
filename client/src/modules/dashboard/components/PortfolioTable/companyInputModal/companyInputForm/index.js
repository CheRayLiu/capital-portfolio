import {
  Button,
  Input,
  Select,
  Text,
} from '../../../../../common/components';
import { Modal, Spacer } from '@nextui-org/react';

import { numberValidator } from './validators';
import { useForm } from 'react-hook-form';
import { usePostCompany } from '../../../../../common/hooks';

export default function CompanyInputForm({
  onCancel,
  onSubmitCloseModal,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched', reValidateMode: 'onChange' });

  const postCompanyMutation = usePostCompany();
  const onSubmit = (data) => {
    postCompanyMutation.mutate(data);
    onSubmitCloseModal();
  };
  return (
    <form aria-label="Company input form">
      <Modal.Body>
        <Input
          bordered
          fullWidth
          size="lg"
          label="Company Name"
          aria-label="Company name input"
          color={errors.companyName ? 'error' : 'primary'}
          helperText={errors.companyName?.message}
          helperColor="error"
          {...register('companyName', {
            required: 'Company Name is required',
          })}
        />
        <Spacer y="xs" />
        <Text color="primary">Round Invested</Text>
        <Select
          name="Round invested"
          {...register('roundInvested', {
            required: 'Round Invested is required',
          })}
        >
          <option disabled selected hidden>
            Select an option
          </option>
          <option value="Pre-seed">Pre-seed</option>
          <option value="Seed">Seed</option>
          <option value="Series A">Series A</option>
          <option value="Series B">Series B</option>
          <option value="Series C">Series C</option>
          <option value="Series D">Series D</option>
          <option value="Series E">Series E</option>
          <option value="Series F">Series F</option>
        </Select>
        <Spacer y="xs" />
        <Input
          bordered
          fullWidth
          size="lg"
          labelLeft="$"
          label="Amount Invested"
          aria-label="Amount Invested input"
          color={errors.amount ? 'error' : 'primary'}
          helperText={errors.amount?.message}
          helperColor="error"
          {...register('amount', {
            required: {
              value: true,
              message: 'Amount Invested ($) is required',
            },
            ...numberValidator({ max: Infinity }),
          })}
        />
        <Spacer y="xs" />
        <Input
          bordered
          fullWidth
          size="lg"
          labelLeft="$"
          label="Valuation at Raise"
          aria-label="Valuation at Raise input"
          color={errors.valuationAtRaise ? 'error' : 'primary'}
          helperText={errors.valuationAtRaise?.message}
          helperColor="error"
          {...register('valuationAtRaise', {
            required: {
              value: true,
              message: 'Valuation At Raise ($) is required',
            },
            ...numberValidator({ max: Infinity }),
          })}
        />
        <Spacer y="xs" />
        <Input
          bordered
          fullWidth
          size="lg"
          type="date"
          label="Date of Raise"
          aria-label="Date of raise input"
          color={errors.dateOfRaise ? 'error' : 'primary'}
          text={errors.dateOfRaise?.message}
          helperText={errors.dateOfRaise?.message}
          helperColor="error"
          {...register('dateOfRaise', {
            required: true,
            valueAsDate: true,
          })}
        />
        <Spacer y="xs" />
        <Input
          bordered
          fullWidth
          size="lg"
          label="Equity %"
          labelRight="%"
          aria-label="Equity percent input"
          color={errors.equityPercent ? 'error' : 'primary'}
          helperText={errors.equityPercent?.message}
          helperColor="error"
          {...register('equityPercent', {
            required: {
              value: true,
              message: 'Equity % is required',
            },
            ...numberValidator({}),
          })}
        />
        <Spacer y="xs" />
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat onClick={onCancel}>
          Cancel
        </Button>
        <Button auto onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </Modal.Footer>
    </form>
  );
}
