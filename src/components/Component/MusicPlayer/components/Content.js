import React from 'react';
import { ContentWrapper, SongList, Song } from '../styles/ContentStyles';
import { usePlayer } from './../../contexts/PlayerContext';


const Content = () => {
  const { playTrack, tracks } = usePlayer();

  return (
    <ContentWrapper>
      <h2>Music List</h2>
      <SongList>
        {tracks.map((track, index) => (
          <Song key={index} onClick={() => playTrack(track)}>
            {track.title} - {track.artist}
          </Song>
        ))}
      </SongList>
    </ContentWrapper>
  );
};

export default Content;
