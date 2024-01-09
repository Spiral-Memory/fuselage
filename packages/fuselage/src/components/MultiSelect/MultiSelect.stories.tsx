import { action } from '@storybook/addon-actions';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { MultiSelect, MultiSelectFiltered } from '../..';
import type { SelectOption } from '../Select';

export default {
  title: 'Inputs/MultiSelect',
  component: MultiSelect,
  parameters: {
    docs: {
      description: {
        component: 'An input for selection of options.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title={''} />
        </>
      ),
    },
  },
} as Meta<typeof MultiSelect>;

const options: SelectOption[] = [
  ['1', 'a teste 1'],
  ['2', 'b teste 2', true],
  ['3', 'c teste 3'],
  ['4', 'd teste 4'],
  ['5', 'd teste 5'],
  ['6', 'd teste 6'],
  ['7', 'd teste 7'],
  ['8', 'd teste 8'],
  ['9', 'd teste 9'],
  ['10', 'd teste 10'],
];

const Template: StoryFn<typeof MultiSelect> = (args) => (
  <MultiSelect {...args} />
);

export const Default: StoryFn<typeof MultiSelect> = Template.bind({});
Default.args = {
  placeholder: 'Placeholder here...',
  options,
};

export const WithValue: StoryFn<typeof MultiSelect> = Template.bind({});
WithValue.args = {
  placeholder: 'Placeholder here...',
  options,
  value: ['1', '2'],
};

export const Error: StoryFn<typeof MultiSelect> = Template.bind({});
Error.args = {
  error: 'Error',
  placeholder: 'Placeholder here...',
  options,
};

export const Disabled: StoryFn<typeof MultiSelect> = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Placeholder here...',
  options,
};

export const CustomEmpty: StoryFn<typeof MultiSelect> = Template.bind({});
CustomEmpty.args = {
  customEmpty: 'Custom Empty Placeholder',
  placeholder: 'Placeholder here...',
  options: [],
};

const FilteredTemplate: StoryFn<typeof MultiSelectFiltered> = (args) => (
  <MultiSelectFiltered {...args} />
);

export const WithFilter: StoryFn<typeof MultiSelectFiltered> =
  FilteredTemplate.bind({});
WithFilter.args = {
  placeholder: 'Placeholder here...',
  onChange: action('change'),
  options,
};
