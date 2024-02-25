'use client';

import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';

import { Order } from '../api/order/route';

const baseURL = process.env.BASE_URL;

const FormInput = () => {
  const [value, setValue] = useState<string>('');
  const [order, setOrder] = useState<Order>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    setOrder(undefined);
    setIsLoading(true);
    const res = await fetch(`/api/order?orderNumber=${value}`);
    const data = await res.json();
    const order = data.order;
    setOrder(order);
    setIsLoading(false);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form
        className="gap-4 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="order-input">Enter your order number</label>
        <div>
          <input
            name="order-input"
            id="order-input"
            className="m-5 border-gray-400 border-2 rounded-md p-2"
            value={value}
            onChange={handleOnChange}
          />
          <button
            name="submit"
            id="submit"
            className={`m-5 border-gray-400 border-2 rounded-md p-2 hover:border-gray-700 ${
              isLoading ? 'cursor-wait' : 'cursor-pointer'
            }`}
          >
            {isLoading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
      <div>
        <table>
          <tbody>
            <tr>
              <th className="p-6">Order Number</th>
              <th className="p-6">Customer Name</th>
              <th className="p-6">Status</th>
            </tr>
            {isLoading && (
              <tr>
                <td className="p-6 text-left">Loading...</td>
              </tr>
            )}
            {!isLoading && !order && (
              <tr>
                <td className="p-6 text-left">No order found.</td>
              </tr>
            )}
            {order && (
              <tr>
                <td className="p-6 text-left"># {order.orderNumber}</td>
                <td className="p-6 text-center">{order.customerName}</td>
                <td className="p-6 text-center">{order.orderStatus}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormInput;
