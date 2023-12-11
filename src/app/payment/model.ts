import { PaymentDetail, Payment } from './types';

const payment: Payment = {
  id: '',
  getPaymentById({ id }) {
    return {
      id: '',
      date: '',
      description: '',
      value: 0,
      userName: '',
    };
  },
  getPayments() {
    return [];
  },

  add(payment: PaymentDetail) {},
  remove({ id }) {},

  sortPaymentsByDate(date: string) {},
};

export { payment };
