import { Camera } from "lucide-react";

interface PhotoUploadProps {
  onPhotoSelect?: (file: File) => void;
}

const PhotoUpload = ({ onPhotoSelect }: PhotoUploadProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && onPhotoSelect) {
      onPhotoSelect(file);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col items-start gap-2 mb-8">
        <div className="relative flex items-center justify-center rounded-full w-18 h-18 overflow-hidden bg-black">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div className="w-24 h-24  bg-foreground rounded-full flex items-center justify-center cursor-pointer hover:bg-foreground/90 transition-colors">
            <Camera className="w-8 h-8 text-white text-background" />
          </div>
        </div>
        <div className="text-primary font-light text-blue-300 cursor-pointer hover:text-primary/80 transition-colors">
          Upload your photo
        </div>
      </div>
    </div>
  );
};

export default PhotoUpload;
