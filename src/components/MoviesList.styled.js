import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesName = styled.li`
  list-style: none;
  text-decoration: none;
  color: black;
  font-weight: 500;
`;

export const Container = styled.div`
  > a {
    color: black;
    text-decoration: none;
    font-weight: 500;
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
