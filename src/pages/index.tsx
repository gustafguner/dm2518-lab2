import * as React from 'react';
import * as ons from 'onsenui';
import * as Ons from 'react-onsenui';

interface Props {
  title: string;
  key: string;
}

const Page: React.FC<Props> = ({ title, key }) => (
  <Ons.Page>
    {title}
  </Ons.Page>
)

export default Page;