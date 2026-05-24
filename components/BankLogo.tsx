import { getBankById } from '@/lib/data';

interface Props {
  bankId: string;
  size?: 'sm' | 'md';
}

export default function BankLogo({ bankId, size = 'md' }: Props) {
  const bank = getBankById(bankId);
  if (!bank) return null;
  const dim = size === 'sm' ? 'w-8 h-8 text-[10px]' : 'w-10 h-10 text-xs';
  return (
    <div
      className={`${dim} rounded-lg flex items-center justify-center font-bold text-white shrink-0`}
      style={{ backgroundColor: bank.color }}
    >
      {bank.shortName}
    </div>
  );
}
