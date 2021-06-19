import { render, screen } from '@testing-library/react';
import { getPage } from 'next-page-tester';
import '@testing-library/jest-dom/extend-expect';

describe('Blog page', () => {
  it('renders blog page', async () => {
    const { render } = await getPage({
      route: '/blog/43',
    });

    render();
    expect(screen.getByText('Post: 43')).toBeInTheDocument();

    // fireEvent.click(screen.getByText('Link'));
    // await screen.findByText('Linked page');
  });
});
