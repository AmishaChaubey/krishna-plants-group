// data.js - Centralized data configuration
export const landscapingData = {
  breadcrumbs: [
    { name: 'Home', href: '/' },
   
    { name: 'Timber Plants', href: '/timber', current: true }
  ],
  
  bannerConfig: {
    image: '/timber.jpg',
    title: 'Timber Plants',
    subtitle: 'Creating Beautiful Outdoor Spaces'
  },

  products: [
    // {
    //   id: 1,
    //   images: ['/timber11.svg'],
    //   Name: 'Premium Landscape Design',
    //   description: 'Transform your outdoor space with our award-winning landscape architecture.',
    //   category: 'Residential'
    // },
    {
      id: 2,
      images: ['/timber10.svg'],
      Name: 'Modern Garden Solutions',
      description: 'Contemporary designs that blend nature with modern living spaces.',
      category: 'Commercial'
    },
    {
      id: 3,
      images: ['/timber11.svg'],
      Name: 'Sustainable Landscaping',
      description: 'Eco-friendly designs that respect and enhance natural ecosystems.',
      category: 'Eco-Friendly'
    },
    {
      id: 4,
      images: ['/timber24.avif'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 5,
      images: ['/timber25.svg'],
      Name: 'Urban Garden Design',
      description: 'Maximizing green spaces in urban environments with innovative solutions.',
      category: 'Urban'
    },
    {
      id: 6,
      images: ['/timber6.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 7,
      images: ['/timber7.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 8,
      images: ['/timber8.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 9,
      images: ['/timber9.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 10,
      images: ['/timber3.avif'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 11,
      images: ['/timber2.jpg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    },
    {
      id: 13,
      images: ['/timber13.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 14,
      images: ['/timber14.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
     {
      id: 21,
      images: ['/timber21.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    },
    {
      id: 22,
      images: ['/timber22.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    },
    {
      id: 23,
      images: ['/timber23.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    },
    {
      id: 24,
      images: ['/timber4.avif'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    },
    {
      id: 25,
      images: ['/timber5.svg'],
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