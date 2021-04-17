import {HeaderWrapper, HeaderContent} from './styles';
import {Container, Row, Col} from 'react-bootstrap';
import { FiSearch, FiLogIn } from "react-icons/fi";

export const Header = ({children}) => {
  return (
    <HeaderWrapper>
      <Container>
        <Row>
          <Col>
            <HeaderContent>
              <div className="header-content__logo">
                <a href="#">
                  <img src="img/logo.svg" className="img=fluid" alt="Logo"/>
                </a>
              </div>
              <div className="header-content__menu">
                <ul>
                  <li><a href="#">Início</a></li>
                  <li><a href="#">Mais assistidos</a></li>
                  <li><a href="#">Gêneros</a></li>
                  <li><a href="#">Filmes</a></li>
                  <li><a href="#">Séries</a></li>
                </ul>
              </div>
              <div className="header-content__actions">
                <div className="actions-search">
                  <FiSearch />
                  <input type="text" placeholder="Digite o nome do filme"/>
                </div>
                <a href="#" className="btn-login">
                  Entrar
                  <FiLogIn />
                </a>
              </div>
            </HeaderContent>
          </Col>
        </Row>
      </Container>
    </HeaderWrapper>
  );
}
