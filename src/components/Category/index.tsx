import React from 'react'
import { Anchor, Image, ContainerCategorySkeleton, CategoryImage, CategoryTitle } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/NM7WAgs.jpeg'

interface CategorySkeletonProps {
  light: boolean;
}

 export const CategorySkeleton: React.FC<CategorySkeletonProps> = ({ light }) => {
  return (
    <ContainerCategorySkeleton>
      <CategoryImage light={light} />
      <CategoryTitle light={light} />
    </ContainerCategorySkeleton>
  )
}

interface CategoryProps {
  cover?: string;
  path: string;
  emoji?: string;
}

 export const Category: React.FC<CategoryProps> = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} alt='cover' />
      {emoji}
    </Anchor>
  )
}
