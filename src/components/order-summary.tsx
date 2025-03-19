type OrderSummaryProps = {
  selectedMethod: string;
  cost: number;
};

const OrderSummary = ({ selectedMethod, cost }: OrderSummaryProps) => {
  return (

    <div className="mt-4 p-3 border rounded-lg bg-gray-100">
      <h4 className="text-md font-medium mb-2">Order Summary</h4>
      <p>
        <strong>Selected Shipping:</strong> {selectedMethod}
      </p>
      <p>
        <strong>Shipping Cost:</strong> ${cost.toFixed(2)}
      </p>
      <p>
        <strong>Total:</strong> ${cost.toFixed(2)}
      </p>
    </div>
  );
};

export default OrderSummary;
