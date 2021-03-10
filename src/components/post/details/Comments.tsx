import styled from 'styled-components'
import { Faded } from '../../common/Text'
import CommentDataClass from '../../../data/CommentDataClass'
import React from 'react'
import { AdditionalDetails } from './AdditonalDetails'
import { flexColumnGap } from '../../../styled/mixins'

const Comment = styled.div`
  display: flex;
  flex-direction: column;
  ${flexColumnGap('4px')}
`

const Username = styled.span`
  line-height: 20px;
`

const Message = styled(Faded)`
  line-height: 20px;
`

interface CommentsProps {
  comments?: CommentDataClass[]
}

export default function Comments(props: CommentsProps) {
  const { comments = [] } = props

  return (
    <AdditionalDetails>
      {comments &&
        comments.map((comment, index) => (
          <Comment key={index}>
            <Username>{comment.creator}</Username>
            <Message>{comment.body}</Message>
          </Comment>
        ))}
    </AdditionalDetails>
  )
}
