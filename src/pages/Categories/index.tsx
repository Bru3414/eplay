import ProdutcsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

  return (
    <>
      <ProdutcsList
        id="action"
        title="Ação"
        background="black"
        games={actionGames}
        isLoading={isLoadingAction}
      />
      <ProdutcsList
        id="sport"
        title="Esporte"
        background="gray"
        games={sportGames}
        isLoading={isLoadingSport}
      />
      <ProdutcsList
        id="fight"
        title="Luta"
        background="black"
        games={fightGames}
        isLoading={isLoadingFight}
      />
      <ProdutcsList
        id="rpg"
        title="RPG"
        background="gray"
        games={rpgGames}
        isLoading={isLoadingRPG}
      />
      <ProdutcsList
        id="simulation"
        title="Simulação"
        background="black"
        games={simulationGames}
        isLoading={isLoadingSimulation}
      />
    </>
  )
}

export default Categories
