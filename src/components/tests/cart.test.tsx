import { renderWithProviders } from "@/lib/utils/test-utils";
import { ProductCart } from "../product-cart";

describe("Cart", () => {

  const mockModifiers = {
    id: 1,
    name: 'Extra Cheese',
    price: 2.5,
  };

  it('renders modifier details when modifiers prop is provided', () => {
    const { getByText } = renderWithProviders(
      <ProductCart
        id={1}
        name="Pizza"
        total={15.5}
        amountOrder={2}
        modifiers={mockModifiers}
      />
    );

    const modifiers = `${mockModifiers.name} (+$${mockModifiers.price})`
    const modifierName = getByText(modifiers);

    expect(modifierName).toBeInTheDocument();
  });

})