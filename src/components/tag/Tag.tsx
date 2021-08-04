import React, { MouseEventHandler, useCallback } from 'react'
import * as r34 from 'r34-types'
import { bias, isBiased, isSupertag } from '../../data/utils'
import Supertag from './Supertag'
import { BiasedTag } from './BiasedTag'

interface TagProps {
  tag: r34.AnyBiasedTag | r34.AnyTag
  isActive: boolean
  detailed: boolean
  onClick: (tag: r34.AnyBiasedTag) => void
}

export default function Tag(props: TagProps) {
  const { tag, isActive, detailed, onClick } = props

  const biasedTag = isSupertag(tag) || isBiased(tag) ? tag : bias(tag, '+')

  const handleClick: MouseEventHandler = useCallback(
    (event) => {
      event?.stopPropagation()
      onClick(biasedTag)
    },
    [onClick, biasedTag]
  )

  return isSupertag(biasedTag) ? (
    <Supertag tag={biasedTag} isActive={isActive} detailed={detailed} onClick={handleClick} />
  ) : (
    <BiasedTag tag={biasedTag} isActive={isActive} detailed={detailed} onClick={handleClick} />
  )
}
