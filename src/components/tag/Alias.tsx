import React, { MouseEventHandler, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'
import { TagModifier } from 'r34-types'
import { addTag } from '../../redux/actions'
import { flexRowWithGap } from '../../styled/mixins'
import TagName from './TagName'

interface AliasProps {
  modifier: TagModifier
  name: string
  count: number
}

const AliasWrapper = styled.div(
  ({ theme }) => css`
    ${flexRowWithGap({ theme })}
    padding: 0 ${theme.dimensions.bigSpacing};
    height: ${theme.dimensions.blockHeight};
    font-size: ${theme.fontSizes.content};
  `
)

export default function Alias(props: AliasProps) {
  const { name, count, modifier } = props

  const dispatch = useDispatch()

  const handleClick: MouseEventHandler = useCallback(
    (event) => {
      event.stopPropagation()
      dispatch(addTag({ name, types: [], count, modifier }))
    },
    [count, dispatch, modifier, name]
  )

  return (
    <AliasWrapper onClick={handleClick}>
      <TagName modifier={modifier} name={name} count={count} />
    </AliasWrapper>
  )
}
