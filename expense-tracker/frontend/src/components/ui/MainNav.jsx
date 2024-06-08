import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { IconName } from "react-icons/hi2";
import { HiHome } from "react-icons/hi2";
import { HiMiniUser } from "react-icons/hi2";
import { HiCalendarDays, HiHomeModern, HiOutlineUsers, HiCog6Tooth } from "react-icons/hi2";
import { GiExpense, GiTakeMyMoney } from "react-icons/gi";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;


function MainNav() {
  return (
    <nav>
      <NavList>
        <li><StyledNavLink to='/dashboard'><HiHome />
          <span>Home</span>
        </StyledNavLink></li>
        <li><StyledNavLink to='/expenses'><GiTakeMyMoney />
          <span>Expense</span>
        </StyledNavLink></li>
        <li><StyledNavLink to='/split'><GiExpense />
          <span>Split Expense</span>
        </StyledNavLink></li>
        <li><StyledNavLink to='/account'><HiMiniUser />
          <span>Account</span>
        </StyledNavLink></li>
        <li><StyledNavLink to='/users'><HiOutlineUsers />
          <span>Users</span>
        </StyledNavLink></li>
        {/* <li><StyledNavLink to='/settings'><HiCog6Tooth />
          <span>Settings</span>
        </StyledNavLink></li> */}
      </NavList>
    </nav>
  )
}

export default MainNav;