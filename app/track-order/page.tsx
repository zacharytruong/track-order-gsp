type OrderStatus = 'drying' | 'washing' | 'ready' | 'delivered' | 'cancelled';
interface Order {
  orderNumber: number;
  customerName?: string;
  orderStatus?: OrderStatus;
}

const order: Order | undefined = {
  orderNumber: 123,
  customerName: 'John Doe',
  orderStatus: 'drying'
};

export default function TrackOrder() {
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-4">
      <div>
        <form className="gap-4 flex flex-col items-center">
          <label htmlFor="order-input">Enter your order number</label>
          <div>
            <input name="order-input" id="order-input" className="m-5" />
            <input type="submit" name="submit" id="submit" />
          </div>
        </form>
      </div>

      {order && (
        <div>
          <table>
            <tr>
              <th className="p-6">Order Number</th>
              <th className="p-6">Customer Name</th>
              <th className="p-6">Status</th>
            </tr>
            {!order && (
              <tr>
                <td className="p-6 text-left">No order</td>
              </tr>
            )}
            {order && (
              <tr>
                <td className="p-6 text-left">{order.orderNumber}</td>
                <td className="p-6 text-center">{order.customerName}</td>
                <td className="p-6 text-center">{order.orderStatus}</td>
              </tr>
            )}
          </table>
        </div>
      )}
    </main>
  );
}
