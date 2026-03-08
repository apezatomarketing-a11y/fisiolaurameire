const GALLERY_BUCKET_URL = "https://evaoqyroqmmlojtzrulj.supabase.co/storage/v1/object/public/gallery/";

// 37 fotos identificadas no bucket gallery
const GALLERY_FILES = [
  "foto destaque sobre mim.jpeg",
  "foto galeria slide rotativo animado sobre mim (1).jpeg",
  "foto galeria slide rotativo animado sobre mim (2).jpeg",
  "foto galeria slide rotativo animado sobre mim (3).jpeg",
  "foto galeria slide rotativo animado sobre mim (4).jpeg",
  "foto galeria slide rotativo animado sobre mim (5).jpeg",
  "foto galeria slide rotativo animado sobre mim (6).jpeg",
  "foto galeria slide rotativo animado sobre mim (7).jpeg",
  "foto galeria slide rotativo animado sobre mim (8).jpeg",
  "foto galeria slide rotativo animado sobre mim (9).jpeg",
  "foto galeria slide rotativo animado sobre mim (10).jpeg",
  "foto galeria slide rotativo animado sobre mim (11).jpeg",
  "foto galeria slide rotativo animado sobre mim (12).jpeg",
  "foto galeria slide rotativo animado sobre mim (13).jpeg",
  "foto galeria slide rotativo animado sobre mim (14).jpeg",
  "foto galeria slide rotativo animado sobre mim (15).jpeg",
  "foto galeria slide rotativo animado sobre mim (16).jpeg",
  "foto galeria slide rotativo animado sobre mim (17).jpeg",
  "foto galeria slide rotativo animado sobre mim (18).jpeg",
  "foto galeria slide rotativo animado sobre mim (19).jpeg",
  "foto galeria slide rotativo animado sobre mim (20).jpeg",
  "foto galeria slide rotativo animado sobre mim (21).jpeg",
  "foto galeria slide rotativo animado sobre mim (22).jpeg",
  "foto galeria slide rotativo animado sobre mim (23).jpeg",
  "foto galeria slide rotativo animado sobre mim (24).jpeg",
  "foto galeria slide rotativo animado sobre mim (25).jpeg",
  "foto galeria slide rotativo animado sobre mim (26).jpeg",
  "foto galeria slide rotativo animado sobre mim (27).jpeg",
  "foto galeria slide rotativo animado sobre mim (28).jpeg",
  "foto galeria slide rotativo animado sobre mim (29).jpeg",
  "foto galeria slide rotativo animado sobre mim (30).jpeg",
  "foto galeria slide rotativo animado sobre mim (31).jpeg",
  "foto galeria slide rotativo animado sobre mim (32).jpeg",
  "foto galeria slide rotativo animado sobre mim (33).jpeg",
  "foto galeria slide rotativo animado sobre mim (34).jpeg",
  "foto galeria slide rotativo animado sobre mim (35).jpeg",
  "foto galeria slide rotativo animado sobre mim (36).jpeg",
  "foto galeria slide rotativo animado sobre mim (37).jpeg"
];

export default function Gallery() {
  // Duplicate images for seamless loop
  const duplicatedImages = [...GALLERY_FILES, ...GALLERY_FILES];

  return (
    <div className="w-full overflow-hidden py-10">
      <div className="relative group">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Gallery Container */}
        <div className="flex overflow-hidden">
          <div className="flex gap-6 animate-gallery-slide hover:[animation-play-state:paused] whitespace-nowrap">
            {duplicatedImages.map((fileName, index) => (
              <div
                key={`${fileName}-${index}`}
                className="flex-shrink-0 w-64 h-80 md:w-80 md:h-[450px] rounded-[2.5rem] overflow-hidden border-4 border-card shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-2"
              >
                <img
                  src={`${GALLERY_BUCKET_URL}${encodeURIComponent(fileName)}`}
                  alt={`Susi Farias Galeria ${index}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
