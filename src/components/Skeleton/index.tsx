import React from 'react';

import * as S from './styles';

interface SkeletonProps {
  children?: React.ReactNode;
  width?: string;
  minWidth?: string;
  height?: string;
  margin?: string;
  borderRadius?: string;
}

const Skeleton = ({
  children,
  width = '100%',
  minWidth,
  height = '1.0rem',
  margin = '0.5rem 0',
  borderRadius,
}: SkeletonProps) => (
  <S.Wrapper
    width={width}
    height={height}
    minWidth={minWidth}
    margin={margin}
    borderRadius={borderRadius}
  >
    {children}
  </S.Wrapper>
);

export type { SkeletonProps };

export default Skeleton;
