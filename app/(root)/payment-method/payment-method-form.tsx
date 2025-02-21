'use client';

import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useTransition } from 'react';
import { paymentMethodSchema } from '@/lib/validators';
import CheckoutSteps from '@/components/shared/checkout-steps';

const PaymentMethodForm = ({
  preferredPaymentMethod,
}: {
  preferredPaymentMethod: string | null;
}) => {
  return (
    <>
      <CheckoutSteps current={2} />
    </>
  );
};

export default PaymentMethodForm;
