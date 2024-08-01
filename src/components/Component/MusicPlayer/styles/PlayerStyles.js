import styled from 'styled-components';

const PlayerWrapper = styled.div`
  width: 100%;
  background-color: ${(props)=>(props.theme==='light'?'#E5E7EB':'#181818' )};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  flex-direction: column;
`;

const TrackInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
    border-radius: 5px;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #999;
  }
`;

const Controls = styled.div`
  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    margin: 0 5px;
    color: #fff;

    &:hover {
      color: #1db954;
    }
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;

  input[type='range'] {
    width: 100%;
  }
`;

const TimeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 0.9rem;
  color: #999;
`;

export { PlayerWrapper, TrackInfo, Controls, ProgressBar, TimeInfo };
