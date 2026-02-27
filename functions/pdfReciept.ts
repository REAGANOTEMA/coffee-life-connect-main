import jsPDF from 'jspdf';
import { Order } from './types';

export function generateReceipt(order: Order) {
  const doc = new jsPDF();
  doc.setFontSize(16);
  doc.text('Coffee Life Receipt', 20, 20);
  doc.setFontSize(12);
  doc.text(`Order ID: ${order.id}`, 20, 30);
  doc.text(`Customer: ${order.customerName}`, 20, 40);
  let y = 50;
  order.items.forEach(item => {
    doc.text(`${item.name} x${item.quantity} - UGX ${item.price}`, 20, y);
    y += 10;
  });
  doc.text(`Total: UGX ${order.total}`, 20, y + 10);
  return doc;
}