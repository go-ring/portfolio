interface ProjectAppPreviewProps {
  screens?: string[];
  title: string;
}

interface PhoneFrameProps {
  image: string;
  alt: string;
  className: string;
  notchClassName?: string;
}

function PhoneFrame({ image, alt, className, notchClassName = 'w-14 h-4 bg-gray-800' }: PhoneFrameProps) {
  return (
    <div className={`absolute rounded-[32px] bg-white shadow-lg overflow-hidden transition-all hover:scale-105 hover:z-30 ${className}`}>
      <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-10">
        <div className={`${notchClassName} rounded-b-xl`} />
      </div>
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

export function ProjectAppPreview({ screens = [], title }: ProjectAppPreviewProps) {
  const sideScreens = screens.slice(0, 2);

  if (sideScreens.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[460px] flex items-center justify-center mt-4">
      {sideScreens[0] && (
        <PhoneFrame
          image={sideScreens[0]}
          alt={`${title} app screen 1`}
          className="left-2 top-0 w-[190px] h-[400px] border-[6px] border-gray-800 transform -rotate-12 z-0 opacity-80 hover:opacity-100 hover:-rotate-6"
        />
      )}

      {sideScreens[1] && (
        <PhoneFrame
          image={sideScreens[1]}
          alt={`${title} app screen 2`}
          className="right-2 top-8 w-[190px] h-[400px] border-[6px] border-gray-800 transform rotate-6 z-10 opacity-90 hover:opacity-100 hover:rotate-0"
        />
      )}
    </div>
  );
}
