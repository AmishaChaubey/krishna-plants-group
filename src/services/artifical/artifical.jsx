// ProductDetail.jsx - Implementation using the reusable component
import React from 'react';
import ProductGrid from '../commoncomp/Design';
import { landscapingData } from './data';

export default function ProductDetail() {
  // Handle card click events
  const handleCardClick = (card) => {
    console.log('Card clicked:', card);
    // You can implement navigation, modal opening, or any other action here
    // For example:
    // navigate(`/product/${card.id}`);
    // setSelectedProduct(card);
    // openModal(true);
  };

  // Custom filters component (optional)
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

// Alternative implementation examples:

// Example 1: Portfolio page with different data

// Example 2: Simple grid without banner or breadcrumbs


// Example 3: E-commerce product grid
