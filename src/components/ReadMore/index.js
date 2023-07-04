// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  ReactHeading,
  Text,
  ReactImage,
  ReactText,
  ReactBtn,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const shortDescription = reactHooksDescription.slice(0, 170)
  const fullDescription = reactHooksDescription.slice(0)
  const [description, setText] = useState(false)

  const btnText = description ? 'Read less' : 'Read More'
  const hookDescription = description
    ? `${fullDescription}`
    : `${shortDescription}`
  const onChangeDescription = () => {
    setText(prevState => !prevState)
  }

  return (
    <MainContainer>
      <ReactHeading>React Hooks</ReactHeading>
      <Text>Hooks are a new addition to react</Text>
      <ReactImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
        className="react-img"
      />
      <ReactText>{hookDescription}</ReactText>
      <ReactBtn type="button" onClick={onChangeDescription}>
        {btnText}
      </ReactBtn>
    </MainContainer>
  )
}
export default ReadMore
