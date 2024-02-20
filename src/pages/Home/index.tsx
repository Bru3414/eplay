import Banner from '../../components/Banner'
import ProdutcsList from '../../components/ProductsList'
import {
  useGetOnSaleGamesQuery,
  useGetSoonGamesQuery
} from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } =
    useGetOnSaleGamesQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonGamesQuery()

  return (
    <>
      <Banner />
      <ProdutcsList
        id="on-sale"
        title="Promoções"
        background="gray"
        games={onSaleGames}
        isLoading={isLoadingSale}
      />
      <ProdutcsList
        id="coming-soon"
        title="Em breve"
        background="black"
        games={soonGames}
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
