import { useGetFeatureGameQuery } from '../../services/api'

import Tag from '../../components/Tag'
import Button from '../Button'
import * as S from './styles'
import { parseToBrl } from '../../utils'
import Loader from '../Loader'

const Banner = () => {
  const { data: game } = useGetFeatureGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Price>
            De <span>{parseToBrl(game.prices.old)}</span> <br />
            por apenas {parseToBrl(game.prices.current)}
          </S.Price>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
