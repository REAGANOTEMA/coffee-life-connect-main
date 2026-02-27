import * as functions from 'firebase-functions';
import axios from 'axios';

export const mobileMoneyPayment = functions.https.onCall(async (data, context) => {
  const { amount, phone, orderId } = data;

  if (!context.auth) throw new functions.https.HttpsError('unauthenticated', 'User must be logged in');

  const response = await axios.post('https://sandbox.mtnmobilemoney.com/collection/v1_0/requesttopay', {
    amount,
    currency: 'UGX',
    externalId: orderId,
    payer: { partyIdType: 'MSISDN', partyId: phone },
    payerMessage: 'Payment for order',
    payeeNote: 'Thank you for your order'
  }, {
    headers: {
      'Ocp-Apim-Subscription-Key': process.env.MTN_KEY,
      'Authorization': `Bearer ${process.env.MTN_TOKEN}`,
      'X-Callback-Url': 'https://yourapp.com/payment-callback'
    }
  });

  return response.data;
});