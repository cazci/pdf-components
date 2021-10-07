import { FC, ReactElement } from 'react';
import { View as RPDFView } from '@react-pdf/renderer';
import { TextNodeProps } from '../text-node';
import { ListProps } from '../list';
import { addPropsToReactElement } from '../../utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addPropsToChildren = (children: any, index: any) => {
  if (!Array.isArray(children)) {
    return addPropsToReactElement(children, { index });
  }

  return children.map((childElement) =>
    addPropsToReactElement(childElement, { key: index, index })
  );
};

export interface ListItemProps {
  children:
    | ReactElement<TextNodeProps>
    | [ReactElement<TextNodeProps>, ReactElement<ListProps>];

  // index should be available if the list is ordered
  index?: number;
}

export const ListItem: FC<ListItemProps> = ({ children, index }) => {
  return (
    <RPDFView>
      {addPropsToChildren(children, index !== undefined ? index + 1 : 255)}
    </RPDFView>
  );
};
