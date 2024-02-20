import * as S from './styles'

type Props = {
  title: string
  children: JSX.Element
}

const Card = ({ title, children }: Props) => (
  <S.Container>
    <h2>{title}</h2>
    {children}
  </S.Container>
)

export default Card
