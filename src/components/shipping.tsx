import { useState } from "react";
import { useShippingMethods } from "../hooks/useShippingMethods";
import ShippingMethodList from "./shipping-method-list";
import OrderSummary from "./order-summary";

const Shipping = ({ cost }: { cost: number }) => {
  const [selectedMethod, setSelectedMethod] = useState("standard");

  const { shippingMethods } = useShippingMethods();

  return (
    <>
      <div className="mx-auto p-4 border rounded-lg w-80 shadow-md bg-white">
        <h3 className="text-lg font-semibold mb-3">Shipping</h3>
        <div className="flex flex-col gap-2">
          <ShippingMethodList
            methods={shippingMethods}
            selectedMethod={selectedMethod}
            onSelect={setSelectedMethod}
          />
        </div>

        <OrderSummary selectedMethod={selectedMethod} cost={cost} />

        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg w-full">
          Confirm Shipping
        </button>
      </div>
    </>
  );
};

export default Shipping;
