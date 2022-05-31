import Link from 'next/link'
import { Container } from '../../assets/styles/base'
import {Dropdown, DropdownItem, DropdownWrap, Navbar, NavItemDropdown} from './nav.styled'

export const Nav = ({ menus = [] }) => {
  return (
    <Navbar className="bg-dark">
      <Container>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link href="/">
            <a className="navbar-brand">Enlace Quadros</a>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {menus.map(menu => (
                <NavItemDropdown key={`menu-${menu.id}`}>
                  <a className="nav-link">
                    {menu.name}
                  </a>
                  <Dropdown>
                    <Container>
                      <DropdownWrap>
                        {menu.children.map(child => (
                          <Link key={`menu-${menu.id}-child-${child.id}`} href={`/${child.slug}`}>
                            <DropdownItem>{child.name}</DropdownItem>
                          </Link>
                        ))}
                      </DropdownWrap>
                    </Container>
                  </Dropdown>
                </NavItemDropdown>
              ))}
            </ul>
          </div>
        </nav>
      </Container>
    </Navbar>
  )
}
