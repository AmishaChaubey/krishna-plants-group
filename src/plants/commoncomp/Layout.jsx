// ProductGrid.jsx - Enhanced with Smooth Animations
import React, { useState, useEffect } from 'react';

// Simplified Product Card Component - Image Only with Enhanced Animations
function ProductCard({ card, viewMode = 'grid', categoryColors = {}, onCardClick, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Staggered entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100); // Stagger by 100ms per card

    return () => clearTimeout(timer);
  }, [index]);

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(card);
    }
  };

  // List view layout - Image only with animations
  if (viewMode === 'list') {
    return (
      <div
        className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 group cursor-pointer transform transition-all duration-700 ease-out ${
          isVisible 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-8 opacity-0'
        } ${
          isHovered 
            ? 'scale-[1.02] shadow-2xl border-emerald-200' 
            : 'scale-100'
        }`}
        style={{ transitionDelay: isVisible ? '0ms' : `${index * 50}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        <div className="relative h-64 w-full overflow-hidden">
          <img
            src={card.image || card.images?.[0]}
            alt={card.Name}
            className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
              isHovered 
                ? 'scale-110 brightness-110' 
                : 'scale-105'
            }`}
          />
          {/* Animated overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
          {/* Animated shimmer effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
            isHovered ? 'translate-x-full' : '-translate-x-full'
          }`} />
        </div>
      </div>
    );
  }
  

  // Grid view layout - Image only with enhanced animations
  return (
    <div
      className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 group cursor-pointer transform transition-all duration-700 ease-out ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-8 opacity-0 scale-95'
      } ${
        isHovered 
          ? '-translate-y-3 shadow-2xl border-emerald-200 scale-105' 
          : 'translate-y-0 scale-100'
      }`}
      style={{ transitionDelay: isVisible ? '0ms' : `${index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Image with enhanced animations */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={card.image || card.images?.[0]}
          alt={card.Name}
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
            isHovered 
              ? 'scale-110 brightness-110 saturate-110' 
              : 'scale-100'
          }`}
        />
        {/* Animated gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-emerald-500/20 via-transparent to-transparent transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
        {/* Animated shimmer effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ease-out ${
          isHovered ? 'translate-x-full opacity-100' : '-translate-x-full opacity-0'
        }`} />
        {/* Subtle pulse animation on hover */}
        <div className={`absolute inset-0 bg-emerald-400/5 transition-all duration-300 ${
          isHovered ? 'animate-pulse' : ''
        }`} />
      </div>
    </div>
  );
}

// Main ProductGrid Component with Enhanced Animations
export default function ProductGrid({ 
  data,
  onCardClick,
  customFilters,
  showBanner = true,
  showBreadcrumbs = true,
  defaultViewMode = 'grid',
  defaultItemsPerPage = 9,
  defaultSortBy = 'name'
}) {
  const [viewMode, setViewMode] = useState(defaultViewMode);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  const [sortBy, setSortBy] = useState(defaultSortBy);
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Use provided data or fallback to empty arrays
  const {
    breadcrumbs = [],
    bannerConfig = {},
    products = [],
    categoryColors = {},
    sortOptions = [{ value: 'name', label: 'Name' }],
    itemsPerPageOptions = [6, 9, 12, 18, 24]
  } = data || {};

  // Sort and filter cards
  const sortedCards = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return (a.Name || '').localeCompare(b.Name || '');
      case 'category':
        return (a.category || '').localeCompare(b.category || '');
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedCards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = sortedCards.slice(startIndex, endIndex);

  const handleViewModeChange = (mode) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setViewMode(mode);
      setIsTransitioning(false);
    }, 150);
  };

  const handleItemsPerPageChange = (items) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setItemsPerPage(items);
      setCurrentPage(1);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePageChange = (page) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <>
      {/* Dynamic Breadcrumb with slide-in animation */}
      {showBreadcrumbs && breadcrumbs.length > 0 && (
        <nav className="px-6 py-4 bg-gray-50 border-b border-gray-200 transform transition-all duration-500 ease-out animate-in slide-in-from-top-2">
          <div className="max-w-7xl mx-auto">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((breadcrumb, index) => (
                <li 
                  key={breadcrumb.name} 
                  className={`flex items-center transform transition-all duration-500 ease-out animate-in slide-in-from-left-2`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {index > 0 && (
                    <svg className="w-4 h-4 text-gray-400 mx-2 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {breadcrumb.current ? (
                    <span className="text-emerald-600 font-medium transition-colors duration-300">{breadcrumb.name}</span>
                  ) : (
                    <a
                      href={breadcrumb.href}
                      className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105"
                    >
                      {breadcrumb.name}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </nav>
      )}

      {/* Enhanced Banner with advanced animations */}
      {showBanner && bannerConfig.image && (
        <div className='px-6 animate-in fade-in-0 slide-in-from-top-4 duration-1000'>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer pt-5 group">
            {/* Animated backdrop with breathing effect */}
            <div className="absolute backdrop-blur-xs inset-0 z-10 transition-all duration-1000 group-hover:backdrop-blur-sm"></div>
            
            {/* Main banner image with parallax-like effect */}
            <img
              src={bannerConfig.image}
              alt="Banner"
              className="h-48 sm:h-64 md:h-96 w-full object-cover group-hover:scale-110 transition-all duration-1500 ease-out filter group-hover:brightness-110 group-hover:saturate-110"
            />
            
          

            {/* Multiple animated overlay gradients */}
            <div className="absolute inset-0 z-15 bg-gradient-to-t from-black/30 via-transparent to-black/10 group-hover:from-black/20 transition-all duration-700"></div>
            <div className="absolute inset-0 z-16 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 group-hover:from-emerald-400/10 group-hover:to-blue-400/10 transition-all duration-1000"></div>
            
            {/* Animated shine effect */}
            
            {/* Content with advanced text animations */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center text-white transform transition-all duration-700 group-hover:scale-105">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-wide animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 group-hover:tracking-wider transition-all duration-500 relative">
                  {bannerConfig.title}
                  {/* Animated underline */}
                </h1>
                <p className="text-lg md:text-xl font-light opacity-90 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-1">
                  {bannerConfig.subtitle}
                </p>
                
                {/* Animated decorative elements */}
           
              </div>
            </div>

            {/* Corner accent animations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/30 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500 delay-100"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/30 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500 delay-200"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/30 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500 delay-300"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/30 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500 delay-400"></div>

            {/* Breathing border effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-400/30 transition-all duration-1000 animate-pulse"></div>
          </div>
        </div>
      )}

      {/* Show Options and Filters with slide-up animation */}
      <div className="max-w-7xl mx-auto px-6 py-6 animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all duration-300 hover:shadow-md hover:border-gray-200">
          {/* Left side - Show options */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700 transition-colors duration-300">Show:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => handleItemsPerPageChange(parseInt(e.target.value))}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300"
              >
                {itemsPerPageOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <span className="text-sm text-gray-500 transition-colors duration-300">
                / {sortedCards.length} / {Math.ceil(sortedCards.length / itemsPerPage)} / {sortedCards.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700 transition-colors duration-300">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:border-emerald-300"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Right side - View mode and filters */}
          <div className="flex items-center gap-4">
            {/* View Mode Toggle with enhanced animations */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 transition-all duration-300 hover:bg-gray-150">
              <button
                onClick={() => handleViewModeChange('grid')}
                className={`p-2 rounded-md transition-all duration-300 transform hover:scale-110 ${
                  viewMode === 'grid'
                    ? 'bg-white text-emerald-600 shadow-md scale-105'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
                title="Grid View"
              >
                <svg className="w-4 h-4 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => handleViewModeChange('list')}
                className={`p-2 rounded-md transition-all duration-300 transform hover:scale-110 ${
                  viewMode === 'list'
                    ? 'bg-white text-emerald-600 shadow-md scale-105'
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
                title="List View"
              >
                <svg className="w-4 h-4 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Custom Filters */}
            {customFilters && customFilters}

            {/* Default Filters Button with enhanced animations */}
            {!customFilters && (
              <button className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-all duration-300 transform hover:scale-105 hover:shadow-md group">
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                </svg>
                <span className="text-sm font-medium">Filters</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Product Grid with staggered animations */}
      <div className={`max-w-7xl mx-auto px-6 pb-10 transition-all duration-500 ease-out ${
        isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      } ${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
          : 'space-y-6'
      }`}>
        {currentCards.map((card, index) => (
          <ProductCard 
            key={`${card.id}-${card.Name}-${currentPage}`} 
            card={card} 
            viewMode={viewMode}
            categoryColors={categoryColors}
            onCardClick={onCardClick}
            index={index}
          />
        ))}
      </div>

      {/* Pagination with enhanced animations */}
      {totalPages > 1 && (
        <div className="max-w-7xl mx-auto px-6 pb-10 animate-in fade-in-0 slide-in-from-bottom-2 duration-500">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-md ${
                  currentPage === page
                    ? 'text-white bg-emerald-600 border border-emerald-600 shadow-md scale-105'
                    : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-emerald-300'
                }`}
              >
                {page}
              </button>
            ))}
            
            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}