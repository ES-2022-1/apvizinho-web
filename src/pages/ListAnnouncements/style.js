import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  // div with display grid and 3 columns
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const WrapperSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 6em;
  gap: 1rem;
  .ant-input-search {
    max-width: 31.25rem;
  }
`;
