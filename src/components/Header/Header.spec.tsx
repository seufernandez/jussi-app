import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header component', () => {
  it('render correctly', () => {
    render(<Header />);

    expect(screen.getByText('Nossas soluções')).toBeInTheDocument();
    expect(screen.getByText('Conheça a Jüssi')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
