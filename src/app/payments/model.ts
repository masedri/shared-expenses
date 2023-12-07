import { PaymentDetail, Payment } from './types';

const payment: Payment = {
  id: '',
  getPaymentById(id = '') {
    return {
      date: '',
      description: '',
      value: 0,
      userName: '',
    };
  },
  getPayments() {},

  add(payment: PaymentDetail) {},
  remove(paymentId: '') {},

  sortPaymentsByDate(date: string) {},
};

export { payment };
