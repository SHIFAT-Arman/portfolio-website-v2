import VideoPlayer from "@/components/ui/video-player";

const VideoPlayerDemo = () => {
  return (
    <div className="bg-gray-900 backdrop-blur-md pt-20">
      <VideoPlayer src="/1000011790.mp4" />
    </div>
  );
};

export { VideoPlayerDemo };
