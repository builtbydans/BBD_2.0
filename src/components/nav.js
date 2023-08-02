import React from 'react'
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: red;
  height: 100px;
  display: flex;

`

const Nav = () => {
  return (
    <StyledNav>
      <div>
        <a href="http://builtbydan.com"><h3>BBD</h3></a>
      </div>
    </StyledNav>
  )
}

export default Nav;
