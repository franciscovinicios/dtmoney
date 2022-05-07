import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  @media (max-width:610px){
    margin-top: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem; 

      @media (max-width:612px) {
        padding: 1rem 1rem;
        text-align: center;
      }

      @media (max-width:494px) {
        padding: 1rem 0.5rem
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;

      @media (max-width:612px) {
        padding: 1rem 1rem;
        font-size: 0.8rem;
        text-align: center;
      }

      @media (max-width:494px) {
        padding: 1rem 0.5rem
      }

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green );
      }
      &.withdraw {
        color: var(--red)
      }

    }
  }
`
