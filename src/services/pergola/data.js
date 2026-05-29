// data.js - Centralized data configuration
export const landscapingData = {
  breadcrumbs: [
    { name: 'Home', href: '/' },
  
    { name: 'Garden Pergola', href: '/pergola', current: true }
  ],
  
  bannerConfig: {
    image: '/Bannerr.jpg',
    title: 'Garden Pergola',
    subtitle: 'Creating Beautiful Outdoor Spaces'
  },

  products: [
    {
      id: 1,
      images: ['/Bannerr.jpg', '/image61.jpg', '/image62.jpg', '/image63.jpg'],
      Name: 'Balcony Gardens',
      description: 'Transform your outdoor space with our award-winning landscape architecture.',
      category: 'Residential'
    },
    {
      id: 2,
      images: ['/image64.jpg', '/image65.avif', '/image66.jpg', '/image67.jpg'],
      Name: 'Modern outdoors Solutions',
      description: 'Contemporary designs that blend nature with modern living spaces.',
      category: 'Commercial'
    },
    {
      id: 3,
      images: ['/image68.jpg', '/image69.avif', '/image70.avif', '/image71.jpg'],
      Name: 'Sustainable Designs',
      description: 'Eco-friendly designs that respect and enhance natural ecosystems.',
      category: 'Eco-Friendly'
    },
    {
      id: 4,
      images: ['/image68.jpg', '/image69.avif', '/image70.avif', '/image71.jpg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 5,
      images: ['/image64.jpg', '/image65.avif', '/image66.jpg', '/image67.jpg'],
      Name: 'Urban Garden Design',
      description: 'Maximizing green spaces in urban environments with innovative solutions.',
      category: 'Urban'
    },
    {
      id: 6,
      images: ['/Bannerr.jpg', '/image61.jpg', '/image62.jpg', '/image63.jpg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
  ],

  categoryColors: {
    'Residential': 'bg-emerald-500',
    'Commercial': 'bg-blue-500',
    'Eco-Friendly': 'bg-green-500',
    'Luxury': 'bg-purple-500',
    'Urban': 'bg-orange-500',
    'Water Features': 'bg-cyan-500'
  },

  sortOptions: [
    { value: 'name', label: 'Name' },
    { value: 'category', label: 'Category' }
  ],

  itemsPerPageOptions: [6, 9, 12, 18, 24]
};

// Example data for different use cases
export const portfolioData = {
  breadcrumbs: [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio', current: true }
  ],
  
  bannerConfig: {
    image: '/portfolio-banner.jpg',
    title: 'Our Portfolio',
    subtitle: 'Showcasing Our Best Work'
  },

  products: [
    {
      id: 1,
      images: ['/portfolio1.jpg', '/portfolio2.jpg'],
      Name: 'Residential Project Alpha',
      description: 'A stunning transformation of a suburban backyard.',
      category: 'Residential'
    },
    {
      id: 2,
      images: ['/portfolio3.jpg', '/portfolio4.jpg'],
      Name: 'Commercial Plaza Design',
      description: 'Modern landscaping for a corporate headquarters.',
      category: 'Commercial'
    }
  ],

  categoryColors: {

  },

  sortOptions: [
    { value: 'name', label: 'Project Name' },
    { value: 'category', label: 'Type' }
  ],

  itemsPerPageOptions: [6, 12, 18]
};