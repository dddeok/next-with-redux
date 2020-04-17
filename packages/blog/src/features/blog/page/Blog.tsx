import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { CircleButton } from 'core/src/components/Button/CircleButton';
import { manageStateStart } from '../utils/blog.slice';
const Container = styled.div`
  width: 1400px;
  height: 100%;
`;

interface Props {
  title?: string;
}

const Main = ({ title }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <CircleButton onClick={() => dispatch(manageStateStart('TEST'))}>
        {title}
      </CircleButton>
    </Container>
  );
};
export default Main;
