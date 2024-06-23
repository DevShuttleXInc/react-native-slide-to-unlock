import { ReactNode, Component } from 'react'
interface ButtonProps {
  childrenContainer?: any,
  onEndReached: () => void,
  containerStyle?: any,
  sliderElement?: ReactNode,
  disableSliding?: boolean,
  children?: ReactNode
}

export default class SliderButton extends Component<ButtonProps> {}
