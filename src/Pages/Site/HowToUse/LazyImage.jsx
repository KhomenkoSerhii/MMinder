import useInView from "@/utils/hooks/useInView";
import { memo } from "react";

const LazyImage = memo(({ src, alt }) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-auto object-contain rounded-[16px]"
      />
    </div>
  );
});
LazyImage.displayName = "LazyImage";

export default LazyImage;
