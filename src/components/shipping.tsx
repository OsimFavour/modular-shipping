import { useState } from "react";
import { useShippingMethods } from "../hooks/useShippingMethods";

export type ShippingMethod = {
  provider: string;
  label: string;
};

const Shipping = ({ cost }: { cost: number }) => {
    const [selectedMethod, setSelectedMethod] = useState("standard");
    
    const { shippingMethods } = useShippingMethods()

  return (
    <>
    <div className="mx-auto p-4 border rounded-lg w-80 shadow-md bg-white">
      <h3 className="text-lg font-semibold mb-3">Shipping</h3>
      <div className="flex flex-col gap-2">
        {shippingMethods.map((method) => (
            <label key={method.provider} className="flex items-center gap-2">
            <input
              type="radio"
              name="shipping"
              value={method.provider}
              checked={selectedMethod === method.provider}
              onChange={() => setSelectedMethod(method.provider)}
              />
            <span>{method.label}</span>
          </label>
        ))}
      </div>
      
      {/* Order Summary */}
      <div className="mt-4 p-3 border rounded-lg bg-gray-100">
        <h4 className="text-md font-medium mb-2">Order Summary</h4>
        <p><strong>Selected Shipping:</strong> {shippingMethods.find(m => m.provider === selectedMethod)?.label || "Standard Shipping"}</p>
        <p><strong>Shipping Cost:</strong> ${cost}</p>
        <p><strong>Total:</strong> ${cost}</p>
      </div>

      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg w-full">
        Confirm Shipping
      </button>
    </div>
    </>
  );
};

export default Shipping;
