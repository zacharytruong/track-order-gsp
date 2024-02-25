import { doc } from '@/app/_components/gsp';
import { camelizeKeys } from 'humps';

type OrderStatus = 'drying' | 'washing' | 'ready' | 'delivered' | 'cancelled';

export interface Order {
  orderNumber: number;
  customerName?: string;
  orderStatus?: OrderStatus;
}

export async function GET(req: Request, res: Response) {
  const url = new URL(req.url);
  const param = url.searchParams.get('orderNumber');

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const gspRows = await sheet.getRows();
  const rows = gspRows.map((row) => camelizeKeys(row.toObject()) as Order);
  const row = rows.filter((row) => Number(row.orderNumber) === Number(param));
  return Response.json({
    order: row[0]
  });
}
