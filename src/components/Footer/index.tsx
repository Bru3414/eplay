import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar os jogos de Ação"
              to={'/categories#action'}
            >
              Ação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar os jogos de esportes"
              to={'/categories#sport'}
            >
              Esporte
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar os jogos de luta"
              to={'/categories#fight'}
            >
              Luta
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar os jogos de RPG"
              to={'/categories#rpg'}
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar os jogos de simulação"
              to={'/categories#simulation'}
            >
              Simulação
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar a seção de promoção"
              to={'/#on-sale'}
            >
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a seção de em breve"
              to={'/#coming-soon'}
            >
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} &copy; - EPLAY todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
