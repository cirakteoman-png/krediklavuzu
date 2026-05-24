'use client';

import AdUnit from './AdUnit';

export default function AdSidebars() {
  return (
    <>
      {/* Sol sidebar — 1280px+ ekranlarda görünür */}
      <div className="hidden xl:flex fixed left-0 top-1/3 z-40 flex-col items-center"
           style={{ width: '160px', left: 'max(0px, calc(50vw - 760px))' }}>
        <AdUnit
          slot="LEFT_SIDEBAR_SLOT_ID"
          format="vertical"
          style={{ display: 'block', width: '160px', minHeight: '600px' }}
        />
      </div>

      {/* Sağ sidebar — 1280px+ ekranlarda görünür */}
      <div className="hidden xl:flex fixed top-1/3 z-40 flex-col items-center"
           style={{ width: '160px', right: 'max(0px, calc(50vw - 760px))' }}>
        <AdUnit
          slot="RIGHT_SIDEBAR_SLOT_ID"
          format="vertical"
          style={{ display: 'block', width: '160px', minHeight: '600px' }}
        />
      </div>
    </>
  );
}
