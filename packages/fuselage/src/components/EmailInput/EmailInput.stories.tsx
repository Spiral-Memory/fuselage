import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { Icon, EmailInput } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Inputs/EmailInput',
  component: EmailInput,
  parameters: {
    docs: {
      description: {
        component: 'An input for email addresses.',
      },

      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title={'Props from InputBox'} />
        </>
      ),
    },
  },
} as Meta<typeof EmailInput>;

const Template: StoryFn<typeof EmailInput> = (args) => <EmailInput {...args} />;

export const Default: StoryFn<typeof EmailInput> = Template.bind({});

export const WithIconAddon: StoryFn<typeof EmailInput> = () => (
  <EmailInput addon={<Icon name='send' size='x20' />} />
);

export const Invalid: StoryFn<typeof EmailInput> = Template.bind({});
Invalid.args = {
  error: 'Error',
};

export const Disabled: StoryFn<typeof EmailInput> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder: StoryFn<typeof EmailInput> = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithValue: StoryFn<typeof EmailInput> = Template.bind({});
WithValue.args = {
  defaultValue: 'support@rocket.chat',
};

export const States: StoryFn<typeof EmailInput> = () => (
  <PropsVariationSection
    component={EmailInput}
    common={{ onChange: () => {} }}
    xAxis={{
      'default': {},
      'with placeholder': { placeholder: 'Placeholder' },
      'with value': { value: 'support@rocket.chat' },
      'with icon': {
        addon: <Icon name='at' size='x20' />,
        value: 'support@rocket.chat',
      },
    }}
    yAxis={{
      'default': {},
      'hover': { className: 'hover' },
      'active': { className: 'active' },
      'focus': { className: 'focus' },
      'disabled': { disabled: true },
      'errored': { error: 'Error' },
      'errored + hover': { className: 'hover', error: 'Error' },
      'errored + active': { className: 'active', error: 'Error' },
      'errored + focus': { className: 'focus', error: 'Error' },
    }}
  />
);
