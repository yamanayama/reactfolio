import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  background-color: #333;
  color:#fff;
  font-size: 1em;
  margin: 1em;
  padding: .25em 1em;
  border-radius: 3px;
  display: block;
`;
const RedButton = styled(Button)`
  color: red;
  border-color: red;
`;

render(
  <div>
    <Button>Button</Button>
    <Button as="a" href="/">Link Button</Button>
    <RedButton as="a" href="/">Link with Red Button styles</RedButton>
  </div>
);