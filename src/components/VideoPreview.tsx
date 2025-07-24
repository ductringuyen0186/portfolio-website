import { Play } from 'lucide-react';

interface VideoPreviewProps {
  title: string;
  onClick: () => void;
  className?: string;
}

const VideoPreview = ({ title, onClick, className = '' }: VideoPreviewProps) => {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 ${className}`}
    >
      {/* Video Thumbnail Background */}
      <div className="w-full h-32 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center relative">
        {/* Play Button */}
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 border-2 border-white/40">
          <Play size={24} className="text-white ml-1 group-hover:scale-110 transition-transform duration-300" fill="white" />
        </div>
        
        {/* Video Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <p className="text-white text-sm font-medium truncate">{title}</p>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Demo Label */}
      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
        DEMO
      </div>
    </button>
  );
};

export default VideoPreview;
