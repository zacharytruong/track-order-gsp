import { Camelized, camelize, camelizeKeys } from 'humps';

import { doc } from './_components/gsp';
import FormInput from './_components/FormInput';

type OrderStatus = 'drying' | 'washing' | 'ready' | 'delivered' | 'cancelled';

export interface Order {
  orderNumber: number;
  customerName?: string;
  orderStatus?: OrderStatus;
}

const getDoc = async () => {
  await doc.loadInfo();
  return doc;
};

export default async function Home() {
  const gsp = await getDoc();
  const sheet = gsp.sheetsByIndex[0];
  const res = await sheet.getRows();
  const rows = res.map((row) => camelizeKeys(row.toObject()) as Order);

  return (
    <main className="flex flex-col items-center justify-between p-24 gap-4">
      <div>
        <FormInput rows={rows}/>
      </div>

      <div>
        <table>
          <tbody>
            <tr>
              <th className="p-6">Order Number</th>
              <th className="p-6">Customer Name</th>
              <th className="p-6">Status</th>
            </tr>
            {/* {!order && (
            <tr>
              <td className="p-6 text-left">No order</td>
            </tr>
          )}
          {order && (
            <tr>
              <td className="p-6 text-left"># {order.orderNumber}</td>
              <td className="p-6 text-center">{order.customerName}</td>
              <td className="p-6 text-center">{order.orderStatus}</td>
            </tr>
          )} */}
          </tbody>
        </table>
      </div>
    </main>
  );
}
