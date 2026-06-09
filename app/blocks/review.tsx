"use client";
 
import StarRatingBasic from "@/components/commerce-ui/star-rating-basic";
import { useState } from "react";
 
export default function Rating() {
  const [rating, setRating] = useState(3);
  return (
    <div className="flex flex-row items-center gap-4">
      <StarRatingBasic value={rating} onChange={setRating} maxStars={9} />
      <p>({rating}) Stars</p>
       {/* Rest of your code... */}
    </div>
  );
}