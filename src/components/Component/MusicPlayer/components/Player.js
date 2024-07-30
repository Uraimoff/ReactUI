import React from 'react';
import { PlayerWrapper, Controls, TrackInfo, ProgressBar, TimeInfo } from '../styles/PlayerStyles';
import { usePlayer } from './../../contexts/PlayerContext';


const Player = () => {
  const { currentTrackIndex, tracks, isPlaying, currentTime, duration, togglePlayPause, nextTrack, prevTrack, audioRef } = usePlayer();

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <PlayerWrapper>
      {tracks.length > 0 ? (
        <TrackInfo>
          <img src="https://via.placeholder.com/50" alt="Track" />
          <div>
            <h3>{tracks[currentTrackIndex].title}</h3>
            <p>{tracks[currentTrackIndex].artist}</p>
          </div>
        </TrackInfo>
      ) : (
        <div>Select a track to play</div>
      )}
      <ProgressBar>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
        />
        <TimeInfo>
          <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
        </TimeInfo>
      </ProgressBar>
      <Controls>
        <button onClick={prevTrack}>⏮️</button>
        <button onClick={togglePlayPause}>{isPlaying ? '⏸️' : '⏯️'}</button>
        <button onClick={nextTrack}>⏭️</button>
      </Controls>
    </PlayerWrapper>
  );
};

export default Player;
