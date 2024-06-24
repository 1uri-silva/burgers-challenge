import { renderWithProviders } from '@/lib/utils/test-utils'
import userEvent, { UserEvent } from '@testing-library/user-event'

import { Items } from "@/redux/reducers/store-products-item";
import { ChooseItem } from '../choose-item';

describe("ChooseItem", () => {

  let mockItems: Items[];
  let fireEvent: UserEvent;
  const mockSelectModifier = jest.fn();

  beforeEach(() => {
    fireEvent = userEvent.setup()
    mockSelectModifier.mockClear();
    mockItems = [
      { id: 1, name: "Item 1", price: 10, maxChoices: 1, visible: 1, position: 0, availabilityType: '', available: true },
      { id: 2, name: "Item 2", price: 20, maxChoices: 1, visible: 1, position: 0, availabilityType: '', available: true },
      { id: 3, name: "Item 3", price: 30, maxChoices: 1, visible: 1, position: 0, availabilityType: '', available: true },
    ];
  })

  it("should renders checkboxes for each item", () => {
    const { getAllByTestId } = renderWithProviders(
      <ChooseItem
        mim={1}
        items={mockItems}
        max={mockItems[0].maxChoices}
        selectModifier={mockSelectModifier} />
    );

    const checkboxes = getAllByTestId("check-item");
    expect(checkboxes.length).toBe(mockItems.length);
  });

  it("should not select other checkboxes when one checkbox clicked", async () => {
    const { getAllByTestId } = renderWithProviders(
      <ChooseItem
        mim={1}
        items={mockItems}
        max={mockItems[0].maxChoices}
        selectModifier={mockSelectModifier}
      />
    )

    const checkboxes = getAllByTestId("check-item");
    await fireEvent.click(checkboxes[0])

    expect(checkboxes[0]).toBeChecked()
    expect(checkboxes[1]).not.toBeChecked()
  })

  it("should change the checkbox when another one is clicked", async () => {
    const { getAllByTestId } = renderWithProviders(
      <ChooseItem
        mim={1}
        items={mockItems}
        max={mockItems[0].maxChoices}
        selectModifier={mockSelectModifier}
      />
    )

    const checkboxes = getAllByTestId("check-item");
    await fireEvent.click(checkboxes[0])
    expect(checkboxes[0]).toBeChecked()

    await fireEvent.click(checkboxes[1])
    expect(checkboxes[1]).toBeChecked()
    expect(checkboxes[0]).not.toBeChecked()

  })

  it("should call selectModifier function select item when checkbox is clicked", async () => {
    const { getAllByTestId } = renderWithProviders(
      <ChooseItem
        mim={1}
        items={mockItems}
        max={mockItems[0].maxChoices}
        selectModifier={mockSelectModifier}
      />
    )

    const checkboxes = getAllByTestId("check-item");

    await fireEvent.click(checkboxes[1])
    expect(checkboxes[1]).toBeChecked()
    expect(mockSelectModifier).toHaveBeenCalled()
    expect(mockSelectModifier).toHaveBeenCalledWith(mockItems[1])
   })
})