'use client';
import { Review } from '@/types';
import { Divide } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import ReviewForm from './review-form';

const ReviewList = ({
  userId,
  productId,
  productSlug,
}: {
  userId: string;
  productId: string;
  productSlug: string;
}) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const reload = () => {
    console.log('review submitted');
  };

  return (
    <div className="space-y-4">
      {reviews.length === 0 && <div>Be the first to leave a review.</div>}
      {userId ? (
        <ReviewForm userId={userId} productId={productId} onReviewSubmitted={reload} />
      ) : (
        <div>
          Please
          <Link
            className="text-blue-700 px-2"
            href={`/sign-in?callbackUrl=/product/${productSlug}`}
          >
            sign in
          </Link>
          to leave a review.
        </div>
      )}
      <div className="flex flex-col gap-3">{/* reviews here */}</div>
    </div>
  );
};

export default ReviewList;
