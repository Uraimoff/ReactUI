import React, { createContext, useState, useRef, useContext, useEffect } from 'react';
import axios from 'axios';

const PlayerContext = createContext();

export const usePlayer = () => useContext(PlayerContext);

const PlayerProvider = ({ children }) => {
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio());

  const playTrack = (track) => {
    setCurrentTrackIndex(tracks.indexOf(track));
    audioRef.current.src = track.src;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(tracks[nextIndex]);
  };

  const prevTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    playTrack(tracks[prevIndex]);
  };

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get('https://osdb.confidence.sh/tracks', {
          headers: {
            'Authorization': 'Bearer hKA3WnSrhOtIaDoN2wCvb'
          }
        });
        setTracks(response.data.tracks);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    };

    fetchTracks();

    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
    };

    audioElement.addEventListener('timeupdate', handleTimeUpdate);
    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <PlayerContext.Provider value={{ tracks, currentTrackIndex, isPlaying, currentTime, duration, playTrack, togglePlayPause, nextTrack, prevTrack, audioRef }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
