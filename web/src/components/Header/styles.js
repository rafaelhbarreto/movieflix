import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  height: 100px;
`;


export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .header-content__menu {

    display: flex;
    flex: 1;
    padding: 0 30px;
    height: 100px;

    ul {
      list-style: none;
      color: var(--text-color);
      display: flex;
      flex: 1;
      justify-content: space-around;
      align-items: center;
      margin: 0;

      li a {
        color: var(--white);
        transition: all .2s linear;
        font-weight: 500;

        &:hover {
          text-decoration: none;
          color: var(--icon-color);
        }
      }
    }
  }

  .header-content__actions {

    display: flex;
    align-items: center;
    justify-content: space-between;

    .actions-search {

      padding: 7px 20px 7px 20px;
      background: white;
      border-radius: 25px;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      background-color: var(--background-search-color);
      margin-right: 20px;

      input {
        border: none;
        outline: none;
        background-color: var(--background-search-color);
        color: var(--text-color);
        font-size: .875rem;

        &::placeholder {
          color: var(--text-color);
        }
      }

      svg {
        color: var(--icon-color);
        transition: all .2s linear;

        &:hover {
          color: white;
        }
      }
    }

    .btn-login {
      color: var(--white);
      font-size: .937rem;
      display: flex;
      align-items: center;
      transition: all .2s linear;

      &:hover {
        text-decoration: none;
        color: var(--icon-color);
      }

      svg {
        color: var(--icon-color);
        margin-left: 10px;
        font-size: 16px;
      }
    }
  }

`;
