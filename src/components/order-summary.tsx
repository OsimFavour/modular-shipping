import { ShippingMethod } from "./shipping-method-list";

type OrderSummaryProps = {
  selectedMethod: string;
  shippingMethods: ShippingMethod[]
};

const OrderSummary = ({ selectedMethod, shippingMethods }: OrderSummaryProps) => {
  
  const selectedShipping = shippingMethods.find(
    (method) => method.name === selectedMethod
  );

  return (

    <div className="mt-4 p-3 border rounded-lg bg-gray-100">
      <h4 className="text-md font-medium mb-2">Order Summary</h4>
      <p>
        <strong>Selected Shipping:</strong> {selectedMethod}
      </p>
      <p>
        <strong>Shipping Cost:</strong> ${selectedShipping ? selectedShipping.amount : "0.00"}
      </p>
      <p>
        <strong>Total:</strong> ${selectedShipping ? selectedShipping.amount : "0.00"}
      </p>
    </div>
  );
};

export default OrderSummary;
