// data.js - Centralized data configuration
export const landscapingData = {
  breadcrumbs: [
    { name: 'Home', href: '/' },
   
    { name: 'Experience Superviser & Maali Service', href: '/Maali', current: true }
  ],
  
  bannerConfig: {
    image: '/maali.svg',
    title: 'Experience Superviser & Maali Service',
    subtitle: 'Creating Beautiful Outdoor Spaces'
  },

  products: [
    {
      id: 1,
      images: ['/maali1.svg'],
      Name: 'Premium Landscape Design',
      description: 'Transform your outdoor space with our award-winning landscape architecture.',
      category: 'Residential'
    },
    {
      id: 2,
      images: ['/maali2.svg'],
      Name: 'Modern Garden Solutions',
      description: 'Contemporary designs that blend nature with modern living spaces.',
      category: 'Commercial'
    },
    {
      id: 3,
      images: ['/maali3.svg'],
      Name: 'Sustainable Landscaping',
      description: 'Eco-friendly designs that respect and enhance natural ecosystems.',
      category: 'Eco-Friendly'
    },
    {
      id: 4,
      images: ['/maali4.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 5,
      images: ['/maali5.svg'],
      Name: 'Urban Garden Design',
      description: 'Maximizing green spaces in urban environments with innovative solutions.',
      category: 'Urban'
    },
    
    {
      id: 7,
      images: ['/maali7.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 8,
      images: ['/maali8.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 9,
      images: ['/maali9.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 10,
      images: ['/maali10.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 11,
      images: ['/maali11.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 12,
      images: ['/maali12.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 13,
      images: ['/maali13.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 14,
      images: ['/maali14.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 15,
      images: ['/maali15.svg'],
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
    'Residential': 'bg-blue-500',
    'Commercial': 'bg-green-500'
  },

  sortOptions: [
    { value: 'name', label: 'Project Name' },
    { value: 'category', label: 'Type' }
  ],

  itemsPerPageOptions: [6, 12, 18]
};