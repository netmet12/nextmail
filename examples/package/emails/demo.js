import React from 'react';

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlRaw,
} from 'nextmail/mjml-react';

function Demo(props) {
  const { firstName } = props;

  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Last Minute Offer</MjmlTitle>
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlSection fullWidth backgroundColor="#efefef">
          <MjmlColumn>
            <MjmlText align="center">{`Hello ${firstName}`}</MjmlText>
            <MjmlRaw>
              <div>But its ok</div>
            </MjmlRaw>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
}

export default Demo;
