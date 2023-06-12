import { render, fireEvent } from '@testing-library/react';
import { RatingsInput}  from '@/components/form-components/ratings-input';

describe('RatingsInput', () => {
  it('calls handleRating when the rating is changed', () => {
    const handleRating = jest.fn();
    const { getByLabelText } = render(<RatingsInput handleRating={handleRating} />);

    fireEvent.change(getByLabelText('Rating'), { target: { value: '3' } });

    expect(handleRating).toHaveBeenCalledWith(3);
  });
});