import Button from '../Button'
import { parseToBrl } from '../../utils'
import Tag from '../Tag'
import * as S from './styles'
import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <span>De {parseToBrl(game.prices.old)}</span>
            )}
            {game.prices.current && <>Por {parseToBrl(game.prices.current)}</>}
            {game.release_date && (
              <>
                <br />
                Lançamento: {game.release_date}
              </>
            )}
          </p>
          {game.prices.current && (
            <Button
              title="Clique aqui para adicionar ao carrinho"
              type="button"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
