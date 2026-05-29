// data.js - Centralized data configuration
export const landscapingData = {
  breadcrumbs: [
    { name: 'Home', href: '/' },
  
    { name: 'Garden Maintenance', href: '/maintenance', current: true }
  ],
  
  bannerConfig: {
    image: '/maintenancee.svg',
    title: 'Garden Maintenance',
    subtitle: 'Creating Beautiful Outdoor Spaces'
  },

  products: [
    {
      id: 1,
      images: ['/maintenancee1.svg'],
      Name: 'Balcony Gardens',
      description: 'Transform your outdoor space with our award-winning landscape architecture.',
      category: 'Residential'
    },
   
    {
      id: 3,
      images: ['/maintenance3.svg'],
      Name: 'Sustainable Designs',
      description: 'Eco-friendly designs that respect and enhance natural ecosystems.',
      category: 'Eco-Friendly'
    },
    {
      id: 4,
      images: ['/maintenance4.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 5,
      images: ['/maintenance5.svg'],
      Name: 'Urban Garden Design',
      description: 'Maximizing green spaces in urban environments with innovative solutions.',
      category: 'Urban'
    },
    {
      id: 6,
      images: ['/maintenance6.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 7,
      images: ['/maintenance7.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 8,
      images: ['/maintenance8.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 9,
      images: ['/maintenancee9.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 10,
      images: ['/maintenance10.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 11,
      images: ['/maintenance11.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 12,
      images: ['/maintenace12.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 13,
      images: ['/maintenance14.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    },
    {
      id: 15,
      images: ['/maintenance15.svg'],
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