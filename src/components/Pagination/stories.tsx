import { Meta, Story } from '@storybook/react/types-6-0';
import Pagination from '.';

export default {
  component: Pagination,
  title: 'Components/Pagination'
} as Meta;

export const Primary: Story = args => (
  <Pagination
    listLength={1}
    firstPageElement={1}
    lastPageElement={8}
    totalElements={16}
    totalPageNumber={1}
    pageNumber={2}
    onFirstPage={() => {}}
    onPreviousPage={() => {}}
    onNextPage={() => {}}
    onLastPage={() => {}}
    {...args}
  />
);
