import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: 20px;
  /* margin-top: 60px;  */
  text-align: center;
`;

const SongList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Song = styled.div`
  padding: 10px;
  background-color: #282828;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #383838;
  }
`;

export { ContentWrapper, SongList, Song };
