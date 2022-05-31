import styled from 'styled-components'

export const Navbar = styled.div`
  position: relative;
  z-index: 10;
`

export const Dropdown = styled.div.attrs({
  className: 'bg-dark'
})`
  position: fixed;
  top: auto;
  left: 0;
  right: 0;
  display: none;
`

export const DropdownWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
`

export const DropdownItem = styled.a`
  flex: 1 0 20%;
  max-width: 20%;
  padding: 10px;

  &, &:hover {
    color: var(--light);
    text-decoration: none;
  }
  &:hover {
    background: rgba(0, 0, 0, .2)
  }
  
`

export const NavItemDropdown = styled.div.attrs({
  className: "nav-item dropdown"
})`
  &:hover {
    ${Dropdown} {
      display: block !important;
    }
  }
`
