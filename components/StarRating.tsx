interface Props {
  rating: number; // 0–5
}

export default function StarRating({ rating }: Props) {
  return (
    <span className="text-sm">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={i <= Math.round(rating) ? 'text-yellow-400' : 'text-ink-soft'}>★</span>
      ))}
      <span className="text-ink-soft ml-1">{rating.toFixed(1)}</span>
    </span>
  );
}
