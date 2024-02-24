'use client';

import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react';

import { Order } from '../page';

const FormInput = ({}: { rows: Order[] }) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          <input
            type="submit"
            name="submit"
            id="submit"
            className="m-5 border-gray-400 border-2 rounded-md p-2 hover:border-gray-700"
          />
        </div>
      </form>
    </div>
  );
};

export default FormInput;
