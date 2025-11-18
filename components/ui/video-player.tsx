"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Volume1, VolumeX, Maximize, Minimize } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const formatTime = (seconds: number) => {
const minutes = Math.floor(seconds / 60);
const remainingSeconds = Math.floor(seconds % 60);
return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const CustomSlider = ({
value,
onChange,
className,
}: {
value: number;
onChange: (value: number) => void;
className?: string;
}) => {
return (
  <motion.div
    className={cn(
      "relative w-full h-1 bg-white/20 rounded-full cursor-pointer",
      className
    )}
    onClick={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      onChange(Math.min(Math.max(percentage, 0), 100));
    }}
  >
    <motion.div
      className="absolute top-0 left-0 h-full bg-white rounded-full"
      style={{ width: `${value}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${value}%` }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    />
  </motion.div>
);
};

const VideoPlayer = ({ src }: { src: string }) => {
const videoRef = useRef<HTMLVideoElement>(null);
const [isPlaying, setIsPlaying] = useState(false);
const [volume, setVolume] = useState(1);
const [progress, setProgress] = useState(0);
const [isMuted, setIsMuted] = useState(false);
const [playbackSpeed, setPlaybackSpeed] = useState(1);
const [showControls, setShowControls] = useState(false);
const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);
const [isFullscreen, setIsFullscreen] = useState(false);

const togglePlay = () => {
  if (videoRef.current) {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }
};

const handleVolumeChange = (value: number) => {
  if (videoRef.current) {
    const newVolume = value / 100;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  }
};

const handleTimeUpdate = () => {
  if (videoRef.current) {
    const progress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(isFinite(progress) ? progress : 0);
    setCurrentTime(videoRef.current.currentTime);
    setDuration(videoRef.current.duration);
  }
};

const handleSeek = (value: number) => {
  if (videoRef.current && videoRef.current.duration) {
    const time = (value / 100) * videoRef.current.duration;
    if (isFinite(time)) {
      videoRef.current.currentTime = time;
      setProgress(value);
    }
  }
};

const toggleMute = () => {
  if (videoRef.current) {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
    if (!isMuted) {
      setVolume(0);
    } else {
      setVolume(1);
      videoRef.current.volume = 1;
    }
  }
};

const setSpeed = (speed: number) => {
  if (videoRef.current) {
    videoRef.current.playbackRate = speed;
    setPlaybackSpeed(speed);
  }
};

const toggleFullscreen = () => {
  if (!document.fullscreenElement && videoRef.current) {
    // Enter fullscreen
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
    setIsFullscreen(true);
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    setIsFullscreen(false);
  }
};

// Handle fullscreen change event
const handleFullscreenChange = () => {
  setIsFullscreen(!!document.fullscreenElement);
};

// Add event listener for fullscreen changes
React.useEffect(() => {
  const videoElement = videoRef.current;
  if (videoElement) {
    videoElement.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      videoElement.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }
}, []);

return (
  <motion.div
    className="relative w-full max-w-3xl mx-auto bg-gray-900"  // Changed max-w-6xl to max-w-3xl for smaller size
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    onMouseEnter={() => setShowControls(true)}
    onMouseLeave={() => setShowControls(false)}
  >
    {/* Background effect matching hero component */}
    <div
      className="absolute inset-x-0 top-0 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
      aria-hidden="true"
    >
      <div
        className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
        style={{
          clipPath:
            "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
        }}
      />
    </div>

    <video
      ref={videoRef}
      className="w-full aspect-video"  // Added aspect-video to maintain proper video aspect ratio
      onTimeUpdate={handleTimeUpdate}
      src={src}
      onClick={togglePlay}
    />

    <AnimatePresence>
      {showControls && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 m-1 sm:m-2 max-w-3xl mx-auto bg-[#11111198] backdrop-blur-md rounded-xl sm:rounded-2xl"
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "circInOut", type: "spring" }}
        >
          <div className="flex items-center gap-1 mb-1 sm:mb-2">
            <span className="text-white text-[0.6rem] sm:text-xs">
              {formatTime(currentTime)}
            </span>
            <CustomSlider
              value={progress}
              onChange={handleSeek}
              className="flex-1 mx-0.5 sm:mx-1"
            />
            <span className="text-white text-[0.6rem] sm:text-xs">{formatTime(duration)}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  onClick={togglePlay}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-[#111111d1] hover:text-white p-1 h-5 w-5 focus:outline-none focus:ring-0"
                >
                  {isPlaying ? (
                    <Pause className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  ) : (
                    <Play className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  )}
                </Button>
              </motion.div>
              <div className="flex items-center gap-x-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    onClick={toggleMute}
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-[#111111d1] hover:text-white p-1 h-5 w-5 focus:outline-none focus:ring-0"
                  >
                    {isMuted ? (
                      <VolumeX className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    ) : volume > 0.5 ? (
                      <Volume2 className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    ) : (
                      <Volume1 className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                    )}
                  </Button>
                </motion.div>

                <div className="w-8 sm:w-10">
                  <CustomSlider
                    value={volume * 100}
                    onChange={handleVolumeChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  onClick={toggleFullscreen}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-[#111111d1] hover:text-white p-1 h-5 w-5 focus:outline-none focus:ring-0"
                >
                  {isFullscreen ? (
                    <Minimize className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  ) : (
                    <Maximize className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  )}
                </Button>
              </motion.div>
              {[0.5, 1, 1.5].map((speed) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  key={speed}
                >
                  <Button
                    onClick={() => setSpeed(speed)}
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "text-white hover:bg-[#111111d1] hover:text-white text-[0.7rem] p-1 h-5 w-5 focus:outline-none focus:ring-0",
                      playbackSpeed === speed && "bg-[#111111d1]"
                    )}
                  >
                    {speed}x
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);
};

export default VideoPlayer;
