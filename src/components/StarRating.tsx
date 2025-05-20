
import { useMemo } from "react";

type StarRatingProps = {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md" | "lg";
};

export function StarRating({ rating, maxStars = 5, size = "md" }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  const sizeClass = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  const stars = useMemo(() => {
    return Array.from({ length: maxStars }).map((_, index) => {
      if (index < fullStars) {
        return (
          <svg
            key={index}
            className={`${sizeClass[size]} text-amazon-orange fill-current`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      } else if (index === fullStars && hasHalfStar) {
        return (
          <svg
            key={index}
            className={`${sizeClass[size]} text-amazon-orange fill-current`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            <path
              fill="#e5e7eb"
              d="M12 17.27V2l2.81 6.63 7.19.61-5.46 4.73 1.64 7.03z"
            />
          </svg>
        );
      } else {
        return (
          <svg
            key={index}
            className={`${sizeClass[size]} text-gray-300 fill-current`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        );
      }
    });
  }, [fullStars, hasHalfStar, maxStars, size, sizeClass]);

  return <div className="rating-stars flex items-center">{stars}</div>;
}
