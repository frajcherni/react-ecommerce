import React from 'react';
import HomeBanner from './HomeBanner';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopCategory from './Categorie/shopCategory';
import img from './assets/img.webp';
import './assets/scss/app.scss'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'remixicon/fonts/remixicon.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CartProvider from './Cart/CartProvider';
import ProductWrapper from './Products/ProductWrapper';
import BasicHeader from './Header/BasicHeader';
import OfferBanner from './NewsLetter/OffreBanner';
import TwoBanner from './OffreBanner/TwoBanner';
import Footer from './Footer/Footer';
import MobileFooter from './Footer/MobileFooter';
import {madridFullSlider} from './Products/SliderSettings';
const queryClient = new QueryClient();

const App: React.FC = () => {
  // Sample banner data
  const bannersData = [
    {
      status: true,
      image_url: 'https://laravel.pixelstrap.net/fastkart/storage/675/madrid_01.jpg',
      redirect_link: {
        link_type: 'external_url',
        link: 'https://example.com'
      }
    },
    {
      status: true,
      image_url: 'https://laravel.pixelstrap.net/fastkart/storage/675/madrid_01.jpg',
      redirect_link: {
        link_type: 'external_url',
        link: 'https://example.com'
      }
    },    {
      status: true,
      image_url: 'https://laravel.pixelstrap.net/fastkart/storage/675/madrid_01.jpg',
      redirect_link: {
        link_type: 'external_url',
        link: 'https://example.com'
      }
    },    {
      status: true,
      image_url: 'https://laravel.pixelstrap.net/fastkart/storage/675/madrid_01.jpg',
      redirect_link: {
        link_type: 'external_url',
        link: 'https://example.com'
      }
    },    {
      status: true,
      image_url: 'https://laravel.pixelstrap.net/fastkart/storage/675/madrid_01.jpg',
      redirect_link: {
        link_type: 'external_url',
        link: 'https://example.com'
      }
    },
  ];

   const categories = [
    {
      id: 1,
      slug: 'electronics',
      name: 'Electronics',
      products_count: 120,
      category_image: {
        original_url: img
      }
    },
    {
      id: 2,
      slug: 'clothing',
      name: 'Clothing',
      products_count: 85,
      category_image: {
        original_url: img
      }
    },
    {
      id: 3,
      slug: 'home-garden',
      name: 'Home & Garden',
      products_count: 67,
      category_image: {
        original_url: img
      }
    },
    {
      id: 4,
      slug: 'sports',
      name: 'Sports',
      products_count: 42,
      category_image: {
        original_url: img
      }
    },
    {
      id: 5,
      slug: 'books',
      name: 'Books',
      products_count: 156,
      category_image: {
        original_url: img
      }
    },
    {
      id: 6,
      slug: 'beauty',
      name: 'Beauty',
      products_count: 78,
      category_image: {
        original_url: img
      }
    },
    {
      id: 7,
      slug: 'toys',
      name: 'Toys',
      products_count: 93,
      category_image: {
        original_url: img
      }
    },
    {
      id: 8,
      slug: 'jewelry',
      name: 'Jewelry',
      products_count: 64,
      category_image: {
        original_url: img
      }
    }
  ];

   const shopCategoryData = {
    title: 'Shop by Category',
    category_ids: [1, 2, 3, 4, 5, 6, 7, 8]
  };

   const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    slug: "wireless-bluetooth-headphones",
    short_description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    description: "Experience crystal-clear audio with our premium wireless Bluetooth headphones. Features active noise cancellation, comfortable ear cushions, and 30 hours of battery life. Perfect for music lovers and professionals alike.",
    price: 199.99,
    sale_price: 149.99,
    discount: 25,
    sku: "WBH-001",
    unit: "piece",
    quantity: 50,
    stock_status: "in_stock",
    rating_count: 4.5,
    reviews_count: 128,
    product_thumbnail: img,
    product_galleries: [
      { original_url: "https://picsum.photos/500/500?random=1" },
      { original_url: "https://picsum.photos/500/500?random=2" },
      { original_url: "https://picsum.photos/500/500?random=3" }
    ],
    attributes: [
      {
        id: 1,
        name: "Color",
        style: "color",
        attribute_values: [
          { id: 1, value: "Black", hex_color: "#000000" },
          { id: 2, value: "White", hex_color: "#FFFFFF" },
          { id: 3, value: "Blue", hex_color: "#0000FF" }
        ]
      }
    ],
    variations: [
      {
        id: 1,
        product_id: 1,
        sku: "WBH-001-BLK",
        price: 199.99,
        sale_price: 149.99,
        quantity: 20,
        stock_status: "in_stock",
        attribute_values: [{ id: 1, value: "Black" }]
      },
      {
        id: 2,
        product_id: 1,
        sku: "WBH-001-WHT",
        price: 199.99,
        sale_price: 149.99,
        quantity: 15,
        stock_status: "in_stock",
        attribute_values: [{ id: 2, value: "White" }]
      },
      {
        id: 3,
        product_id: 1,
        sku: "WBH-001-BLU",
        price: 199.99,
        sale_price: 149.99,
        quantity: 15,
        stock_status: "in_stock",
        attribute_values: [{ id: 3, value: "Blue" }]
      }
    ]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    slug: "smart-fitness-watch",
    short_description: "Advanced fitness tracker with heart rate monitoring and GPS.",
    description: "Track your fitness goals with our advanced smart watch. Features heart rate monitoring, GPS tracking, sleep analysis, and 7-day battery life. Water resistant and compatible with iOS and Android.",
    price: 299.99,
    sale_price: 249.99,
    discount: 17,
    sku: "SFW-002",
    unit: "piece",
    quantity: 30,
    stock_status: "in_stock",
    rating_count: 4.8,
    reviews_count: 89,
    product_thumbnail: "https://picsum.photos/300/300?random=4",
    product_galleries: [
      { original_url: "https://picsum.photos/500/500?random=4" },
      { original_url: "https://picsum.photos/500/500?random=5" }
    ],
    attributes: [
      {
        id: 2,
        name: "Size",
        style: "radio",
        attribute_values: [
          { id: 4, value: "40mm" },
          { id: 5, value: "44mm" }
        ]
      },
      {
        id: 3,
        name: "Band Color",
        style: "color",
        attribute_values: [
          { id: 6, value: "Black", hex_color: "#000000" },
          { id: 7, value: "Silver", hex_color: "#C0C0C0" }
        ]
      }
    ],
    variations: [
      {
        id: 4,
        product_id: 2,
        sku: "SFW-002-40-BLK",
        price: 299.99,
        sale_price: 249.99,
        quantity: 10,
        stock_status: "in_stock",
        attribute_values: [{ id: 4, value: "40mm" }, { id: 6, value: "Black" }]
      },
      {
        id: 5,
        product_id: 2,
        sku: "SFW-002-44-BLK",
        price: 299.99,
        sale_price: 249.99,
        quantity: 8,
        stock_status: "in_stock",
        attribute_values: [{ id: 5, value: "44mm" }, { id: 6, value: "Black" }]
      },
      {
        id: 6,
        product_id: 2,
        sku: "SFW-002-40-SLV",
        price: 299.99,
        sale_price: 249.99,
        quantity: 7,
        stock_status: "in_stock",
        attribute_values: [{ id: 4, value: "40mm" }, { id: 7, value: "Silver" }]
      },
      {
        id: 7,
        product_id: 2,
        sku: "SFW-002-44-SLV",
        price: 299.99,
        sale_price: 249.99,
        quantity: 5,
        stock_status: "in_stock",
        attribute_values: [{ id: 5, value: "44mm" }, { id: 7, value: "Silver" }]
      }
    ]
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    slug: "organic-cotton-t-shirt",
    short_description: "100% organic cotton t-shirt, comfortable and eco-friendly.",
    description: "Made from 100% certified organic cotton, this t-shirt is soft, comfortable, and environmentally friendly. Available in multiple colors and sizes. Perfect for everyday wear.",
    price: 29.99,
    sale_price: 24.99,
    discount: 17,
    sku: "OCT-003",
    unit: "piece",
    quantity: 100,
    stock_status: "in_stock",
    rating_count: 4.3,
    reviews_count: 67,
    product_thumbnail: "https://picsum.photos/300/300?random=7",
    product_galleries: [
      { original_url: "https://picsum.photos/500/500?random=7" },
      { original_url: "https://picsum.photos/500/500?random=8" }
    ],
    attributes: [
      {
        id: 4,
        name: "Size",
        style: "dropdown",
        attribute_values: [
          { id: 8, value: "S" },
          { id: 9, value: "M" },
          { id: 10, value: "L" },
          { id: 11, value: "XL" }
        ]
      },
      {
        id: 5,
        name: "Color",
        style: "color",
        attribute_values: [
          { id: 12, value: "White", hex_color: "#FFFFFF" },
          { id: 13, value: "Black", hex_color: "#000000" },
          { id: 14, value: "Navy", hex_color: "#000080" }
        ]
      }
    ],
    variations: [
      {
        id: 8,
        product_id: 3,
        sku: "OCT-003-S-WHT",
        price: 29.99,
        sale_price: 24.99,
        quantity: 25,
        stock_status: "in_stock",
        attribute_values: [{ id: 8, value: "S" }, { id: 12, value: "White" }]
      },
      {
        id: 9,
        product_id: 3,
        sku: "OCT-003-M-WHT",
        price: 29.99,
        sale_price: 24.99,
        quantity: 30,
        stock_status: "in_stock",
        attribute_values: [{ id: 9, value: "M" }, { id: 12, value: "White" }]
      },
      // More variations would be defined here
    ]
  },
  {
    id: 4,
    name: "Premium Coffee Beans",
    slug: "premium-coffee-beans",
    short_description: "100% Arabica coffee beans, freshly roasted.",
    description: "Our premium Arabica coffee beans are sourced from the best regions and freshly roasted to perfection. Rich flavor with notes of chocolate and caramel. Perfect for coffee enthusiasts.",
    price: 24.99,
    sale_price: 19.99,
    discount: 20,
    sku: "PCB-004",
    unit: "500g bag",
    quantity: 0,
    stock_status: "out_of_stock",
    rating_count: 4.7,
    reviews_count: 156,
    product_thumbnail: "https://picsum.photos/300/300?random=10",
    product_galleries: [
      { original_url: "https://picsum.photos/500/500?random=10" }
    ],
    attributes: [
      {
        id: 6,
        name: "Roast Level",
        style: "radio",
        attribute_values: [
          { id: 15, value: "Light" },
          { id: 16, value: "Medium" },
          { id: 17, value: "Dark" }
        ]
      }
    ],
    variations: [
      {
        id: 10,
        product_id: 4,
        sku: "PCB-004-LGT",
        price: 24.99,
        sale_price: 19.99,
        quantity: 0,
        stock_status: "out_of_stock",
        attribute_values: [{ id: 15, value: "Light" }]
      },
      {
        id: 11,
        product_id: 4,
        sku: "PCB-004-MED",
        price: 24.99,
        sale_price: 19.99,
        quantity: 0,
        stock_status: "out_of_stock",
        attribute_values: [{ id: 16, value: "Medium" }]
      },
      {
        id: 12,
        product_id: 4,
        sku: "PCB-004-DRK",
        price: 24.99,
        sale_price: 19.99,
        quantity: 0,
        stock_status: "out_of_stock",
        attribute_values: [{ id: 17, value: "Dark" }]
      }
    ]
  },
  {
    id: 5,
    name: "Wireless Charging Pad",
    slug: "wireless-charging-pad",
    short_description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    description: "Charge your devices wirelessly with our fast charging pad. Compatible with all Qi-enabled smartphones, earbuds, and smartwatches. Sleek design with LED charging indicator.",
    price: 49.99,
    sale_price: 39.99,
    discount: 20,
    sku: "WCP-005",
    unit: "piece",
    quantity: 15,
    stock_status: "in_stock",
    rating_count: 4.2,
    reviews_count: 42,
    product_thumbnail: "https://picsum.photos/300/300?random=11",
    product_galleries: [
      { original_url: "https://picsum.photos/500/500?random=11" },
      { original_url: "https://picsum.photos/500/500?random=12" }
    ],
    attributes: [],
    variations: []
  },
  {
    id: 6,
    name: "Yoga Mat Premium",
    slug: "yoga-mat-premium",
    short_description: "Eco-friendly yoga mat with superior grip and cushioning.",
    description: "Practice yoga in comfort with our premium eco-friendly mat. Features superior grip, extra cushioning, and is made from sustainable materials. Perfect for all types of yoga practice.",
    price: 79.99,
    sale_price: 64.99,
    discount: 19,
    sku: "YMP-006",
    unit: "piece",
    quantity: 22,
    stock_status: "in_stock",
    rating_count: 4.6,
    reviews_count: 93,
    product_thumbnail: "https://picsum.photos/300/300?random=13",
    product_galleries: [
      { original_url: "https://picsum.photos/500/500?random=13" },
      { original_url: "https://picsum.photos/500/500?random=14" }
    ],
    attributes: [
      {
        id: 7,
        name: "Color",
        style: "image",
        attribute_values: [
          { 
            id: 18, 
            value: "Purple",
            variation_image: { original_url: "https://picsum.photos/100/100?random=15" }
          },
          { 
            id: 19, 
            value: "Green",
            variation_image: { original_url: "https://picsum.photos/100/100?random=16" }
          },
          { 
            id: 20, 
            value: "Blue",
            variation_image: { original_url: "https://picsum.photos/100/100?random=17" }
          }
        ]
      }
    ],
    variations: [
      {
        id: 13,
        product_id: 6,
        sku: "YMP-006-PUR",
        price: 79.99,
        sale_price: 64.99,
        quantity: 8,
        stock_status: "in_stock",
        attribute_values: [{ id: 18, value: "Purple" }]
      },
      {
        id: 14,
        product_id: 6,
        sku: "YMP-006-GRN",
        price: 79.99,
        sale_price: 64.99,
        quantity: 7,
        stock_status: "in_stock",
        attribute_values: [{ id: 19, value: "Green" }]
      },
      {
        id: 15,
        product_id: 6,
        sku: "YMP-006-BLU",
        price: 79.99,
        sale_price: 64.99,
        quantity: 7,
        stock_status: "in_stock",
        attribute_values: [{ id: 20, value: "Blue" }]
      }
    ]
  },
  {
    id: 7,
    name: "Stainless Steel Water Bottle",
    slug: "stainless-steel-water-bottle",
    short_description: "Insulated stainless steel water bottle, keeps drinks hot or cold for hours.",
    description: "Stay hydrated with our premium insulated water bottle. Double-wall vacuum insulation keeps drinks hot for 12 hours or cold for 24 hours. Leak-proof and durable design.",
    price: 34.99,
    sale_price: 27.99,
    discount: 20,
    sku: "SSB-007",
    unit: "piece",
    quantity: 40,
    stock_status: "in_stock",
    rating_count: 4.4,
    reviews_count: 78,
    product_thumbnail: "https://picsum.photos/300/300?random=18",
    product_galleries: [
      { original_url: "https://picsum.photos/500/500?random=18" },
      { original_url: "https://picsum.photos/500/500?random=19" }
    ],
    attributes: [
      {
        id: 8,
        name: "Capacity",
        style: "radio",
        attribute_values: [
          { id: 21, value: "500ml" },
          { id: 22, value: "750ml" },
          { id: 23, value: "1L" }
        ]
      },
      {
        id: 9,
        name: "Color",
        style: "color",
        attribute_values: [
          { id: 24, value: "Silver", hex_color: "#C0C0C0" },
          { id: 25, value: "Black", hex_color: "#000000" },
          { id: 26, value: "Rose Gold", hex_color: "#B76E79" }
        ]
      }
    ],
    variations: [
      {
        id: 16,
        product_id: 7,
        sku: "SSB-007-500-SLV",
        price: 34.99,
        sale_price: 27.99,
        quantity: 15,
        stock_status: "in_stock",
        attribute_values: [{ id: 21, value: "500ml" }, { id: 24, value: "Silver" }]
      },
      // More variations would be defined here
    ]
  },
  {
    id: 8,
    name: "Natural Bamboo Cutting Board",
    slug: "natural-bamboo-cutting-board",
    short_description: "Eco-friendly bamboo cutting board, durable and knife-friendly.",
    description: "Upgrade your kitchen with our natural bamboo cutting board. Made from sustainable bamboo, it's durable, knife-friendly, and naturally antibacterial. Perfect for all your food preparation needs.",
    price: 39.99,
    sale_price: 29.99,
    discount: 25,
    sku: "BCB-008",
    unit: "piece",
    quantity: 18,
    stock_status: "in_stock",
    rating_count: 4.1,
    reviews_count: 34,
    product_thumbnail: "https://picsum.photos/300/300?random=20",
    product_galleries: [
      { original_url: "https://picsum.photos/500/500?random=20" }
    ],
    attributes: [
      {
        id: 10,
        name: "Size",
        style: "dropdown",
        attribute_values: [
          { id: 27, value: "Small (30x20cm)" },
          { id: 28, value: "Medium (40x25cm)" },
          { id: 29, value: "Large (50x30cm)" }
        ]
      }
    ],
    variations: [
      {
        id: 17,
        product_id: 8,
        sku: "BCB-008-SML",
        price: 29.99,
        sale_price: 22.99,
        quantity: 8,
        stock_status: "in_stock",
        attribute_values: [{ id: 27, value: "Small (30x20cm)" }]
      },
      {
        id: 18,
        product_id: 8,
        sku: "BCB-008-MED",
        price: 39.99,
        sale_price: 29.99,
        quantity: 6,
        stock_status: "in_stock",
        attribute_values: [{ id: 28, value: "Medium (40x25cm)" }]
      },
      {
        id: 19,
        product_id: 8,
        sku: "BCB-008-LRG",
        price: 49.99,
        sale_price: 39.99,
        quantity: 4,
        stock_status: "in_stock",
        attribute_values: [{ id: 29, value: "Large (50x30cm)" }]
      }
    ]
  }
];

const offreData = {
  banner_1: {
    image_url: 'https://etikeoprivilege.com/Content/v2/img/ecologie.png',
    redirect_link: {
      link_type: 'external_url' as 'external_url',
      link: 'https://example.com/sale',
    },
  },
  banner_2: {
    image_url: 'https://etikeoprivilege.com/Content/v2/img/info-etikeo.jpg',
    redirect_link: {
      link_type: 'collection' as 'collection',
      link: 'electronics',
    },
  },
};

const bannerData = {
    image_url: 'https://laravel.pixelstrap.net/fastkart/storage/670/rome_07.jpg',
    redirect_link: {
      link_type: 'collection' as 'collection',
      link: 'electronics',
    },
  }
   const footerData = {
    copyright_content: '© 2025 Your Company. All rights reserved.',
    footer_about: 'Your trusted online store for quality products.',
    about_address: '1234 Example St, City, Country',
    about_email: 'support@yourcompany.com',
    support_number: '+1-800-555-1234',
    support_email: 'support@yourcompany.com',
    app_store_url: 'https://www.apple.com/app-store/',
    play_store_url: 'https://play.google.com/store',
    social_media_enable: true,
    facebook: 'https://www.facebook.com/yourcompany',
    twitter: 'https://www.twitter.com/yourcompany',
    instagram: 'https://www.instagram.com/yourcompany',
    pinterest: 'https://www.pinterest.com/yourcompany',
    useful_link: [
      { label: 'About Us', link: 'about' },
      { label: 'Contact', link: 'contact' },
      { label: 'FAQ', link: 'faq' },
    ],
    help_center: [
      { label: 'Privacy Policy', link: 'privacy-policy' },
      { label: 'Terms of Service', link: 'terms' },
      { label: 'Returns', link: 'returns' },
    ],
    footer_categories: [1, 2, 3],
  };
   return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router>
          <BasicHeader />
          <Routes>
            <Route
              path='/'
              element={
                <div>
                  <OfferBanner
                    dataAPI={bannerData}
                    height={300}
                    width={1500}
                    classes={{ sectionClass: 'banner-section', fluidClass: 'container' }}
                  />
                  <HomeBanner bannersData={bannersData} />
                  <ShopCategory dataAPI={shopCategoryData} categories={categories} />
                  <ProductWrapper
                    dataAPI={{
                      status: true,
                      title: 'Featured Products',
                      product_ids: [1, 2, 3, 4, 5, 6],
                    }}
                    products={products}
                    noCustomClass={false}
                    titleClass='title'
                    classObj={{
                      productStyle: 'product-standard theme-plus',
                      productBoxClass: 'product-box-bg',
                    }}
                    customSliderOption={madridFullSlider}
                  />
                  <TwoBanner dataAPI={{ banner_1: offreData.banner_1, banner_2: offreData.banner_2 }} />
   <Footer footerData={footerData} categories={categories} />
                                 </div>
              }
            />
          </Routes>
        </Router>
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;