import {
  Input,
  Select,
  Text,
} from '../../../../../common/components';

import { Spacer } from '@nextui-org/react';
import { numberValidator } from './validators';
import { useForm } from 'react-hook-form';

export default function CompanyInputForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched', reValidateMode: 'onChange' });
  const onSubmit = (data) => console.log(data);

  return (
    <form
      aria-label="Company input form"
      onSubmit={handleSubmit(onSubmit)}
    >
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
      <Spacer y={1} />
      <Text color="primary">Round Invested</Text>
      <Select
        name="Round invested"
        {...register('roundInvested', {
          required: 'Round Invested is required',
        })}
      >
        <option value="" disabled selected hidden>
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
      <Spacer y={1} />
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
      <Spacer y={1} />
      <Input
        bordered
        fullWidth
        size="lg"
        type="date"
        label="Date of investment"
        aria-label="Date of investment input"
        color={errors.dateOfInvestment ? 'error' : 'primary'}
        text={errors.dateOfInvestment?.message}
        {...register('dateOfInvestment', {
          required: true,
          valueAsDate: true,
        })}
      />
      <Spacer y={1} />
      <Input
        bordered
        fullWidth
        size="lg"
        label="Equity %"
        placeholder="Equity %"
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
      <Spacer y={1} />
    </form>
  );
}
