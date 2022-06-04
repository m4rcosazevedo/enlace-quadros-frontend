import styled from 'styled-components'

export const Navbar = styled.div`
  position: relative;
  z-index: 10;
`

export const Dropdown = styled.div`
  position: fixed;
  top: auto;
  left: 0;
  right: 0;
  display: none;
  background: rgb(52,58,64);
  background: linear-gradient(180deg, rgba(52,58,64,1) 0%, rgba(83,90,97,1) 100%);
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
    background: rgba(0, 0, 0, .1)
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
