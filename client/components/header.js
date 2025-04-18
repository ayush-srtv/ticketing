import Link from 'next/link';

const Header = ({ currentUser }) => {
  const links = [
    !currentUser && {
      label: 'Sign Up',
      href: '/auth/signup',
    },
    !currentUser && {
      label: 'Sign In',
      href: '/auth/signin',
    },
    currentUser && {
      label: 'Sign Out',
      href: '/auth/signout',
    },
  ];

  return (
    <nav className='navbar navbar-light bg-light'>
      <Link className='navbar-brand' href='/'>
        GitTix
      </Link>
      <div className='d-flex justify-content-end'>
        <ul className='nav d-flex align-items-center'>
          {links
            .filter((linkConfig) => linkConfig)
            .map(({ label, href }) => (
              <li key={href} className='nav-item'>
                <Link href={href} className='nav-link'>
                  {label}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
