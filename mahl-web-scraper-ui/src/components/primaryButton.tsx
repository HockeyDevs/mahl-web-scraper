import * as React from 'react'
import {Button} from '@rebass/emotion'

interface IProps {
  onClick?: Function
}

const PrimaryButton: React.SFC<IProps> = (props: IProps) => <Button bg="primary" {...props} />

export default PrimaryButton
