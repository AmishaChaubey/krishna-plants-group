// ProductDetail.jsx - Implementation using the reusable component
import React from 'react';
import ProductGrid from '../commoncomp/Design';
import { landscapingData } from './data';

export default function ProductDetail() {
  // Handle card click events
  const handleCardClick = (card) => {
    console.log('Card clicked:', card);
  
  };

    const CustomFilters = () => (
    <div className="flex items-center gap-2">
      <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
        <option value="">All Categories</option>
        <option value="residential">Residential</option>
        <option value="commercial">Commercial</option>
        <option value="eco-friendly">Eco-Friendly</option>
        <option value="luxury">Luxury</option>
        <option value="urban">Urban</option>
        <option value="water-features">Water Features</option>
      </select>
      
      <button className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors duration-200">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
        </svg>
        <span className="text-sm font-medium">Advanced Filters</span>
      </button>
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-50">
      <ProductGrid
        data={landscapingData}
        onCardClick={handleCardClick}
        customFilters={<CustomFilters />}
        showBanner={true}
        showBreadcrumbs={true}
        defaultViewMode="grid"
        defaultItemsPerPage={9}
        defaultSortBy="name"
      />
    </div>
  );
}


