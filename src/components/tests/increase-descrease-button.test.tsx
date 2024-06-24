import userEvent, { UserEvent } from '@testing-library/user-event';

import { renderWithProviders } from '@/lib/utils/test-utils'

import { IncreaseDecreaseButton } from '../increase-decrease-button'

describe('IncreaseDecreaseButton', () => {
  let fireEvent: UserEvent

  const mockIncrease = jest.fn();
  const mockDecrease = jest.fn();

  beforeEach(() => {
    fireEvent = userEvent.setup();

    mockIncrease.mockClear();
    mockDecrease.mockClear();
  });

  it("should render correctly component", () => {

    const { getByTestId } = renderWithProviders(
      <IncreaseDecreaseButton
        countTotal={1}
        decrease={mockDecrease}
        increase={mockIncrease}
      />
    );

    const containerElement = getByTestId('container-increase-decrease');
    const totalElement = getByTestId('amount-total');

    expect(containerElement).toBeInTheDocument();
    expect(totalElement).toHaveTextContent('1');

  });

  it("should not call decrease function when increase function is called", async () => {
    const { getAllByRole } = renderWithProviders(
      <IncreaseDecreaseButton
        countTotal={1}
        decrease={mockDecrease}
        increase={mockIncrease}
      />
    );

    await fireEvent.click(getAllByRole('button')[1]);

    expect(mockDecrease).not.toHaveBeenCalled();
  });
  
  it("should not call increase function when decrease function is called", async () => {
    const { getAllByRole } = renderWithProviders(
      <IncreaseDecreaseButton
        countTotal={1}
        decrease={mockDecrease}
        increase={mockIncrease}
      />
    );

    await fireEvent.click(getAllByRole('button')[0]);

    expect(mockIncrease).not.toHaveBeenCalled();
  });

  it('should calls decrease function when clicking on decrease button', async () => {
    const { getAllByRole } = renderWithProviders(
      <IncreaseDecreaseButton
        countTotal={5}
        increase={mockIncrease}
        decrease={mockDecrease}
      />
    );

    await fireEvent.click(getAllByRole('button')[0]);

    expect(mockDecrease).toHaveBeenCalledWith(4);
  });

  it("should calls increment function when increase button is clicked", async () => {

    const {  getAllByRole } = renderWithProviders(
      <IncreaseDecreaseButton
        countTotal={5}
        increase={mockIncrease}
        decrease={mockDecrease}
      />
    );

    await fireEvent.click(getAllByRole('button')[1]);
    expect(mockIncrease).toHaveBeenCalledWith(6);
  });

});