import styled from 'styled-components'
import TagSelector from '../tagSelector/TagSelector'
import Options from './Options'
import { Title } from '../designsystem/Text'
import { Surface } from '../designsystem/Surface'
import SearchButton from '../widgets/SearchButton'
import ActiveTags from '../widgets/ActiveTags'
import useFirebaseAuthState from '../../hooks/useFirebaseAuthState'
import { useActivateTag } from '../../hooks/useActivateTag'
import { defaultSpacing } from '../../styled/mixins/gap'
import { centeredMaxWidth, flexColumn } from '../../styled/mixins/layout'

const ConfigWrapper = styled.section`
  ${flexColumn}
  ${defaultSpacing}
  ${centeredMaxWidth}
`

export default function Config(props: { onLoad: () => void }) {
  const { onLoad } = props

  const [isSignedIn] = useFirebaseAuthState()
  const activateTag = useActivateTag()

  return (
    <ConfigWrapper>
      <Title>
        <label htmlFor='tag-input'>Search</label>
      </Title>
      <Surface>
        <TagSelector onSubmit={activateTag} showSupertags />
        <ActiveTags onChange={onLoad} offerSupertags={isSignedIn} />
        <Options />
        <SearchButton />
      </Surface>
    </ConfigWrapper>
  )
}
