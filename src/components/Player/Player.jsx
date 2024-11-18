import PlayIcon from "./icon/PlayerIcon";
import PauseIcon from "./icon/Pause";
import React, { useRef, useState, useEffect } from "react";
import PianoAudio from '@components/Player/audio/piano.mp3';
import VolumeIcon from "./icon/VolumeIcon";

const Player = () => {
    const [play, setPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [showVolume, setShowVolume] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const savedVolume = localStorage.getItem("volume");
        if (savedVolume) {
            setVolume(parseFloat(savedVolume));
            if (audioRef.current) {
                audioRef.current.volume = parseFloat(savedVolume);
            }
        }
    }, []);

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setPlay(true);
        } else {
            audioRef.current.pause();
            setPlay(false);
        }
    };

    const changeVolume = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
        localStorage.setItem("volume", newVolume);
    };

    const updateTime = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleTimeChange = (e) => {
        const newTime = parseFloat(e.target.value);
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="flex items-center gap-4 mt-8 w-full">
                <button
                    className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full hover:bg-purple-500 text-purple-500 transition duration-300"
                    onClick={togglePlay}
                >
                   <p className="flex items-center justify-center w-[30px] h-[30px]">{play ? <PauseIcon /> : <PlayIcon />}</p> 
                </button>
                <audio
                    ref={audioRef}
                    onTimeUpdate={updateTime}
                    onLoadedMetadata={handleLoadedMetadata}
                >
                    <source src={PianoAudio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <span className="font-normal text-light-col text-xs">
                    {formatTime(currentTime)}
                </span>
                <input
                    type="range"
                    className="w-full max-w-[500px] h-[7px] bg-light-col border border-gray rounded-lg appearance-none accent-light-col"
                    value={currentTime}
                    max={duration}
                    step="0.1"
                    onChange={handleTimeChange}
                    style={{
                        background: `linear-gradient(to right, #000 ${(currentTime / duration) * 100}%, #f5f5f5 ${(currentTime / duration) * 100}%)`
                    }}
                />
                <span className="font-normal text-light-col text-xs">
                    {formatTime(duration)}
                </span>
                <div className="relative">
                    <button
                        type="button"
                        aria-label="Setting the volume"
                        onClick={() => setShowVolume(!showVolume)}
                        className="flex items-center justify-center w-8 h-8"
                    >
                        <VolumeIcon />
                    </button>
                    {showVolume && (
                        <label
                        className={`flex items-center absolute left-10 top-1 w-[100px] justify-center px-2 h-6 rounded-2xl transition-all duration-500 ease-in-out transform border border-light-col   ${showVolume ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px] pointer-events-none'}`}
                        htmlFor="volume-control"
                    >
                        <input
                            id="volume-control"
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={changeVolume}
                            className={`w-full h-1 rounded-lg cursor-pointer transition-all focus:outline-none bg-purple accent-purple hover:bg-purple  `}
                        />
                    </label>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Player;
