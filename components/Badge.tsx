interface Props {
  type: 'best' | 'low' | 'new';
}

const MAP = {
  best: { label: 'En İyi',    cls: 'bg-yellow-100 text-yellow-800' },
  low:  { label: 'En Düşük', cls: 'bg-brand/10  text-brand-dark'  },
  new:  { label: 'Yeni',      cls: 'bg-purple-100 text-purple-800' },
};

export default function Badge({ type }: Props) {
  const { label, cls } = MAP[type];
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-[11px] font-bold ml-1.5 ${cls}`}>
      {label}
    </span>
  );
}
