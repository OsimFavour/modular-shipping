import { formatShippingLabel } from "../utils/formatShippingLabel";

export type ShippingMethod = {
  id: string;
  name: string;
  amount: string;
};

type ShippingMethodListProps = {
  methods: ShippingMethod[];
  selectedMethod: string;
  onSelect: (method: string) => void;
};

const ShippingMethodList = ({
  methods,
  selectedMethod,
  onSelect
}: ShippingMethodListProps) => {

  return (
    <div>
      {methods.map((method) => (
        <label key={method.id} className="flex items-center gap-2">
          <input
            type="radio"
            name="shipping"
            value={method.name}
            checked={selectedMethod === method.name}
            onChange={() => onSelect(method.name)}
          />
          <span>{formatShippingLabel(method.name)}</span>
        </label>
      ))}
    </div>
  );
};

export default ShippingMethodList;
