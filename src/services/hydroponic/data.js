// data.js - Centralized data configuration
export const landscapingData = {
  breadcrumbs: [
    { name: 'Home', href: '/' },
  
    { name: 'HydroPonic Plants', href: '/HydroPonic', current: true }
  ],
  
  bannerConfig: {
    image: '/hydroponic13.svg',
    title: 'HydroPonic Plants',
    subtitle: 'Creating Beautiful Outdoor Spaces'
  },

  products: [
    {
      id: 1,
      images: ['/hydroponic.svg'],
      Name: 'Balcony Gardens',
      description: 'Transform your outdoor space with our award-winning landscape architecture.',
      category: 'Residential'
    },
    {
      id: 2,
      images: ['/hydroponic1.svg'],
      Name: 'Modern outdoors Solutions',
      description: 'Contemporary designs that blend nature with modern living spaces.',
      category: 'Commercial'
    },
    {
      id: 3,
      images: ['/hydroponic2.svg'],
      Name: 'Sustainable Designs',
      description: 'Eco-friendly designs that respect and enhance natural ecosystems.',
      category: 'Eco-Friendly'
    },
    {
      id: 4,
      images: ['/hydroponic3.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 5,
      images: ['/hydroponic4.svg'],
      Name: 'Urban Garden Design',
      description: 'Maximizing green spaces in urban environments with innovative solutions.',
      category: 'Urban'
    },
    {
      id: 6,
      images: ['/hydroponic5.svg'],
      Name: 'Water Feature Integration',
      description: 'Incorporating beautiful water elements to create serene outdoor sanctuaries.',
      category: 'Water Features'
    }
    ,
    {
      id: 7,
      images: ['/hydroponic6.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 8,
      images: ['/hydroponic7.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 9,
      images: ['/hydroponic8.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 10,
      images: ['/hydroponic9.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 11,
      images: ['/hydroponic10.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 12,
      images: ['/hydroponic11.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 13,
      images: ['/hydroponic12.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 14,
      images: ['/hydroponic14.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 15,
      images: ['/hydroponiuc15.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 16,
      images: ['/hydroponic16.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 17,
      images: ['/hydroponic17.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 18,
      images: ['/hydroponic18.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 19,
      images: ['/hydroponic19.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 20,
      images: ['/hydroponic20.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 21,
      images: ['/hydroponic21.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 22,
      images: ['/hydroponic22.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
    },
    {
      id: 23,
      images: ['/hydroponic23.svg'],
      Name: 'Luxury Outdoor Spaces',
      description: 'Exquisite outdoor environments designed for sophisticated living.',
      category: 'Luxury'
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