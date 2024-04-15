import { render } from '@testing-library/react';

import { Button } from '.';

describe('Button', () => {
    it('should render correctly', () => {
        const wrapper = render(<Button label='Submit' />);

        expect(() => wrapper.unmount()).not.toThrow();
    });
});
