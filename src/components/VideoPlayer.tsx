import { useState } from 'react';
import { X, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoPlayer = ({ videoUrl, title, isOpen, onClose }: VideoPlayerProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-white">
          <div>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-600">Demo Video</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors duration-200"
          >
            <X size={20} className="text-slate-600" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative bg-black aspect-video">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-white text-sm">Loading video...</p>
              </div>
            </div>
          )}
          
          <video
            className="w-full h-full"
            controls
            muted={isMuted}
            autoPlay={false}
            preload="metadata"
            onLoadedData={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Custom Controls Overlay */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors duration-200"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <p className="text-sm text-slate-600 text-center">
            Click outside the video or press the X button to close
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
