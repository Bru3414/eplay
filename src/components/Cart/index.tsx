import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Tag from '../Tag'

import { close, remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'

import { RootReducer } from '../../store'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeCart = () => {
    dispatch(close())
  }

  const removeGame = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBrl(item.prices.current)}</span>
                  </div>
                  <button type="button" onClick={() => removeGame(item.id)} />
                </S.CartItem>
              ))}
            </ul>
            <S.Quatity>{items.length} jogo(s) no carrinho</S.Quatity>
            <S.Prices>
              Total de {parseToBrl(getTotalPrice(items))}{' '}
              <span>
                Em até 6x de {parseToBrl(getTotalPrice(items) / 6)} sem juros
              </span>
            </S.Prices>
            <Button
              title="Clique aqui para prosseguir a compra"
              type="button"
              onClick={goToCheckout}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra.
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
