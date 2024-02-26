type OrderStatus = 'drying' | 'washing' | 'ready' | 'delivered' | 'cancelled';

export interface Order {
  orderNumber: number;
  customerName?: string;
  orderStatus?: OrderStatus;
}
