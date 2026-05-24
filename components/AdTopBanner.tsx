import AdUnit from './AdUnit';

export default function AdTopBanner() {
  return (
    <div className="bg-gray-100 border-b border-gray-200 py-1">
      <div className="max-w-6xl mx-auto px-6 flex justify-center min-h-[90px] items-center">
        <AdUnit
          slot="TOP_BANNER_SLOT_ID"
          format="horizontal"
          style={{ display: 'block', width: '100%', maxWidth: '728px', minHeight: '90px' }}
        />
      </div>
    </div>
  );
}
