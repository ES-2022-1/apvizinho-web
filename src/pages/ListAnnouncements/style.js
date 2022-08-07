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
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const WrapperSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 6em;
  gap: 1rem;
  .ant-input-search {
    max-width: 31.25rem;
  }
`;
