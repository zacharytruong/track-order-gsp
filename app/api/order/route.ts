import { doc } from '@/gsp';
import { camelizeKeys } from 'humps';
import { Order } from '@/types';

export async function GET(req: Request, res: Response) {
  const url = new URL(req.url);
  const param = url.searchParams.get('orderNumber');

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  const gspRows = await sheet.getRows();
  const rows = gspRows.map((row) => camelizeKeys(row.toObject()) as Order);
  const row = rows.filter((row) => Number(row.orderNumber) === Number(param));
  return Response.json({
    order: row[0],
  });
}
