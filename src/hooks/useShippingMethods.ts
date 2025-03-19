import { useState, useEffect } from "react";

export type ShippingMethod = {
  provider: string;
  label: string;
};

export const useShippingMethods = () => {
  const [shippingMethods, setShippingMethods] = useState<ShippingMethod[]>([]);

  useEffect(() => {
    const fetchShippingMethods = async () => {
      try {
        const response = await fetch(
          "https://67d8ebee00348dd3e2a8b9f0.mockapi.io/api/v1/shipping-methods"
        );
        const methods = await response.json();

        const formattedMethods: ShippingMethod[] = methods.map(
          (method: { name: string }) => ({
            provider: method.name,
            label: `Ship via ${method.name}`,
          })
        );

        formattedMethods.push({
          provider: "standard",
          label: "Standard Shipping",
        });
        setShippingMethods(formattedMethods);
      } catch (error) {
        console.error("Error fetching shipping methods", error);
      }
    };

    fetchShippingMethods();
  }, []);

  return { shippingMethods };
};
