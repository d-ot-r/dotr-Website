"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import * as LabelPrimitive from "@radix-ui/react-label";

//#region Content
const fontOptions = [
  "[Modern & Clean] like Open Sans, Roboto, Montserrat, Inter,etc...",
  "[Minimalist] like Poppins, Futura, Source Sans Pro, Raleway,etc...",
  "[Elegant & Serif] like Merriweather, Georgia, Baskerville, Cormorant Garamond,etc...",
  "[Playful & Handwritten] like Pacifico, Caveat, Indie Flower, Dancing Script,etc...",
  "[Tech & Futuristic] like Orbitron, Rajdhani, Audiowide, Titillium Web,etc...",
  "[Classic / Timeless] like Times New Roman, Garamond, Charter, Verdana,etc...",
  "[Creative & Artistic] like Lobster, Oswald, Bangers, Anton,etc...",
];

const ecommerceBusinessTypeOptions = [
  "B2C (Business to Consumer)",
  "B2B (Business to Business)",
  "C2C (Consumer to Consumer)",
  "D2C (Direct to Consumer)",
  "Subscription-Based",
  "Marketplace",
  "Dropshipping",
  "Wholesale",
  "Print on Demand",
  "Digital Products",
];

const ecommercePlatformOptions = [
  "Shopify",
  "WooCommerce",
  "Magento",
  "BigCommerce",
  "Custom Build",
  "Squarespace",
  "Wix",
  "PrestaShop",
  "OpenCart",
  "Other",
];

const ecommerceFeaturesOptions = [
  "Product Search & Filters",
  "Product Variants (Size, Color)",
  "Shopping Cart",
  "Wishlist",
  "Customer Reviews",
  "Secure Checkout",
  "Payment Gateway Integration",
  "Inventory Management",
  "Shipping & Delivery Tracking",
  "Discounts & Coupons",
  "User Accounts & Order History",
  "Email Notifications",
  "Chat Support",
  "Social Media Integration",
  "Loyalty Programs",
  "Multi-language Support",
  "Multi-currency Support",
  "Admin Dashboard",
  "Analytics & Reports",
  "Customer Support",
];

const ecommercePaymentOptions = [
  "Stripe",
  "PayPal",
  "Square",
  "Razorpay",
  "Cash on Delivery",
  "Apple Pay",
  "Google Pay",
  "Bank Transfer",
  "Buy Now, Pay Later (e.g., Klarna, Afterpay)",
];

// #region Website-Industry Content Stuff
export const websiteIndustryOptions = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Hospitality",
  "Manufacturing",
  "Entertainment",
  "Real Estate",
  "Legal Services",
  "Marketing & Advertising",
  "E-commerce",
  "Fitness & Wellness",
  "Food & Beverage",
  "Travel & Tourism",
  "Construction",
  "Automotive",
  "Beauty & Personal Care",
  "Logistics & Transportation",
  "Arts & Design",
  "Agriculture",
  "Media & Publishing",
  "Telecommunications",
  "Events & Weddings",
  "Freelancing & Consulting",
  "Pets & Animal Services",
  "Non-profit",
  "Other",
];

export const websiteIndustryToNiches: Record<string, string[]> = {
  Technology: [
    "Software Development",
    "Hardware Manufacturing",
    "Artificial Intelligence & Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "IT Consulting",
    "Networking",
    "Data Analytics",
    "Mobile App Development",
    "Blockchain Technology",
    "Internet of Things (IoT)",
    "Augmented Reality (AR) & Virtual Reality (VR)",
    "Robotics",
    "Quantum Computing",
    "DevOps & Automation",
  ],
  Healthcare: [
    "Pharmaceuticals",
    "Medical Devices",
    "Health Insurance",
    "Telemedicine",
    "Healthcare IT",
    "Mental Health Services",
    "Wellness & Preventive Care",
    "Home Healthcare",
    "Biotechnology",
    "Rehabilitation Services",
    "Dental Care",
    "Nutritional Supplements",
    "Fitness & Wellness Programs",
    "Elderly Care Services",
    "Healthcare Consulting",
  ],
  Finance: [
    "Banking",
    "Investment Management",
    "Insurance",
    "Fintech",
    "Accounting & Auditing",
    "Tax Services",
    "Wealth Management",
    "Credit & Loans",
    "Cryptocurrency & Blockchain",
    "Financial Planning",
    "Mortgage Services",
    "Payment Processing",
    "Risk Management",
    "Pension Funds",
    "Crowdfunding Platforms",
  ],
  Education: [
    "E-learning Platforms",
    "K-12 Schools",
    "Higher Education",
    "Corporate Training",
    "Educational Software",
    "Tutoring Services",
    "Language Learning",
    "Special Education",
    "Test Preparation",
    "Online Certification Programs",
    "Vocational Training",
    "Educational Consulting",
    "STEM Education",
    "Adult Education",
    "Educational Content Creation",
  ],
  Retail: [
    "E-commerce",
    "Brick and Mortar Stores",
    "Wholesale Distribution",
    "Dropshipping",
    "Luxury Goods",
    "Fashion Retail",
    "Consumer Electronics",
    "Grocery Stores",
    "Home & Kitchen Appliances",
    "Beauty & Personal Care Products",
    "Sporting Goods",
    "Furniture & Home Decor",
    "Pet Supplies",
    "Books & Stationery",
    "Automotive Parts Retail",
  ],
  Hospitality: [
    "Hotels & Resorts",
    "Restaurants",
    "Travel Agencies",
    "Event Planning",
    "Catering Services",
    "Nightlife & Bars",
    "Tour Operators",
    "Vacation Rentals",
    "Cruise Lines",
    "Bed & Breakfasts",
    "Conference & Convention Centers",
    "Hospitality Consulting",
    "Theme Parks",
    "Casino & Gaming",
    "Spa & Wellness Centers",
  ],
  Manufacturing: [
    "Automotive Manufacturing",
    "Electronics Manufacturing",
    "Textile Production",
    "Food & Beverage Manufacturing",
    "Chemical Manufacturing",
    "Machinery & Equipment",
    "Plastic & Rubber Products",
    "Metal Fabrication",
    "Pharmaceutical Manufacturing",
    "Furniture Manufacturing",
    "Paper & Pulp Manufacturing",
    "Glass & Ceramics",
    "Aerospace Manufacturing",
    "Toy Manufacturing",
    "Packaging Materials",
  ],
  Entertainment: [
    "Film & Television",
    "Music Production",
    "Gaming",
    "Live Events",
    "Theatre & Performing Arts",
    "Streaming Services",
    "Talent Management",
    "Animation & VFX",
    "Podcasting",
    "Stand-up Comedy",
    "Esports",
    "Content Creation",
    "Publishing",
    "Amusement Parks",
    "Event Promotion",
  ],
  "Real Estate": [
    "Residential Sales",
    "Commercial Leasing",
    "Property Management",
    "Real Estate Development",
    "Real Estate Investment",
    "Real Estate Brokerage",
    "Vacation Rentals",
    "Real Estate Appraisal",
    "Real Estate Photography",
    "Home Staging",
    "Real Estate Consulting",
    "Property Flipping",
    "Real Estate Crowdfunding",
    "Industrial Real Estate",
    "Land Development",
  ],
  "Legal Services": [
    "Corporate Law",
    "Criminal Defense",
    "Family Law",
    "Intellectual Property",
    "Real Estate Law",
    "Employment Law",
    "Personal Injury",
    "Immigration Law",
    "Tax Law",
    "Environmental Law",
    "Bankruptcy Law",
    "Entertainment Law",
    "Healthcare Law",
    "Civil Rights Law",
    "Elder Law",
  ],
  "Marketing & Advertising": [
    "Digital Marketing",
    "SEO & SEM",
    "Social Media Marketing",
    "Content Marketing",
    "Branding & Design",
    "Market Research",
    "Public Relations",
    "Email Marketing",
    "Influencer Marketing",
    "Affiliate Marketing",
    "Video Marketing",
    "Event Marketing",
    "Mobile Marketing",
    "Print Advertising",
    "Out-of-Home Advertising",
  ],
  "E-commerce": [
    "Online Retail",
    "Subscription Boxes",
    "Dropshipping",
    "Digital Products",
    "B2B E-commerce",
    "Marketplaces",
    "Payment Solutions",
    "E-commerce Consulting",
    "Print on Demand",
    "Custom Merchandise",
    "E-commerce Fulfillment",
    "Mobile Commerce",
    "E-commerce Analytics",
    "Cross-border E-commerce",
    "E-commerce Platforms",
  ],
  "Fitness & Wellness": [
    "Gyms & Fitness Centers",
    "Personal Training",
    "Yoga & Pilates",
    "Nutrition Coaching",
    "Wellness Retreats",
    "Massage Therapy",
    "Health Supplements",
    "Mental Wellness",
    "Online Fitness Programs",
    "Fitness Equipment",
    "Group Fitness Classes",
    "Physical Therapy",
    "Weight Loss Programs",
    "Mindfulness & Meditation",
    "Holistic Health",
  ],
  "Food & Beverage": [
    "Restaurants",
    "Cafes & Coffee Shops",
    "Food Trucks",
    "Catering",
    "Food Production",
    "Bakeries",
    "Bars & Pubs",
    "Food Delivery",
    "Organic Food",
    "Packaged Foods",
    "Beverage Manufacturing",
    "Specialty Foods",
    "Meal Kits",
    "Vegan & Vegetarian Products",
    "Food Import & Export",
  ],
  "Travel & Tourism": [
    "Tour Operators",
    "Travel Agencies",
    "Hotels & Resorts",
    "Cruise Lines",
    "Adventure Tourism",
    "Ecotourism",
    "Cultural Tourism",
    "Travel Blogging",
    "Travel Insurance",
    "Destination Management",
    "Travel Technology",
    "Luxury Travel",
    "Backpacking & Budget Travel",
    "Business Travel",
    "Pilgrimage Tours",
  ],
  Construction: [
    "Residential Construction",
    "Commercial Construction",
    "Renovations & Remodeling",
    "Civil Engineering",
    "Project Management",
    "Architectural Design",
    "Building Materials Supply",
    "Green Building",
    "Infrastructure Development",
    "Modular Construction",
    "Construction Equipment Rental",
    "Interior Fit-outs",
    "Road & Highway Construction",
    "Bridge Construction",
    "Construction Consulting",
  ],
  Automotive: [
    "Car Dealerships",
    "Auto Repair & Maintenance",
    "Auto Parts Manufacturing",
    "Vehicle Rental",
    "Electric Vehicles",
    "Motorsports",
    "Car Wash & Detailing",
    "Auto Insurance",
    "Automotive Accessories",
    "Fleet Management",
    "Tire Sales & Services",
    "Automotive Financing",
    "Used Car Sales",
    "Vehicle Customization",
    "Automotive Logistics",
  ],
  "Beauty & Personal Care": [
    "Salons & Spas",
    "Cosmetics Manufacturing",
    "Skincare Products",
    "Hair Care",
    "Massage Therapy",
    "Personal Training",
    "Wellness Coaching",
    "Nail Salons",
    "Makeup Artistry",
    "Fragrance & Perfumes",
    "Beauty Equipment",
    "Men's Grooming",
    "Anti-aging Products",
    "Natural & Organic Products",
    "Beauty Subscription Boxes",
  ],
  "Logistics & Transportation": [
    "Freight & Shipping",
    "Courier Services",
    "Warehousing",
    "Supply Chain Management",
    "Public Transportation",
    "Trucking",
    "Air Cargo",
    "Maritime Shipping",
    "Rail Freight",
    "Last-Mile Delivery",
    "Logistics Software",
    "Cold Chain Logistics",
    "Customs Brokerage",
    "Transportation Consulting",
    "E-commerce Logistics",
  ],
  "Arts & Design": [
    "Graphic Design",
    "Interior Design",
    "Fashion Design",
    "Photography",
    "Fine Arts",
    "Animation",
    "UX/UI Design",
    "Illustration",
    "Industrial Design",
    "Web Design",
    "Art Galleries",
    "Art Restoration",
    "Set & Exhibit Design",
    "Jewelry Design",
    "Calligraphy",
  ],
  Agriculture: [
    "Crop Farming",
    "Livestock",
    "Agri-Tech",
    "Organic Farming",
    "Dairy Farming",
    "Agricultural Equipment",
    "Horticulture",
    "Agrochemicals",
    "Aquaculture",
    "Poultry Farming",
    "Seed Production",
    "Agricultural Consulting",
    "Irrigation Systems",
    "Agroforestry",
    "Greenhouse Farming",
  ],
  "Media & Publishing": [
    "Newspapers & Magazines",
    "Book Publishing",
    "Digital Media",
    "Broadcasting",
    "Content Creation",
    "Podcasting",
    "Advertising Sales",
    "Video Production",
    "Online News Portals",
    "Academic Publishing",
    "Self-Publishing",
    "Media Monitoring",
    "Photojournalism",
    "Editorial Services",
    "Media Consulting",
  ],
  Telecommunications: [
    "Mobile Networks",
    "Internet Service Providers",
    "Satellite Communication",
    "VoIP Services",
    "Network Infrastructure",
    "Telecom Equipment",
    "Customer Support",
    "Telecom Consulting",
    "Broadband Services",
    "5G Technology",
    "Telecom Software",
    "Wireless Communication",
    "Data Centers",
    "Telecom Regulatory Services",
    "Telecom Infrastructure Leasing",
  ],
  "Events & Weddings": [
    "Wedding Planning",
    "Corporate Events",
    "Event Venues",
    "Catering Services",
    "Photography & Videography",
    "Florists",
    "DJ & Entertainment",
    "Event Rentals",
    "Conference Planning",
    "Trade Shows & Exhibitions",
    "Event Marketing",
    "Destination Weddings",
    "Lighting & Sound Services",
    "Event Staffing",
    "Invitation & Stationery Design",
  ],
  "Freelancing & Consulting": [
    "Business Consulting",
    "IT Consulting",
    "Marketing Consulting",
    "Financial Consulting",
    "Creative Freelancing",
    "Writing & Editing",
    "Coaching & Mentoring",
    "Project Management",
    "Strategy Consulting",
    "Legal Consulting",
    "HR Consulting",
    "Sales Consulting",
    "Freelance Design",
    "Freelance Development",
    "Operations Consulting",
  ],
  "Pets & Animal Services": [
    "Veterinary Services",
    "Pet Grooming",
    "Pet Boarding",
    "Animal Training",
    "Pet Supplies Retail",
    "Animal Rescue & Shelters",
    "Pet Adoption",
    "Pet Sitting",
    "Mobile Vet Services",
    "Exotic Animal Care",
    "Pet Photography",
    "Pet Insurance",
    "Pet Breeding",
    "Animal Nutrition",
    "Pet Waste Removal",
  ],
  "Non-profit": [
    "Charity Organizations",
    "Advocacy Groups",
    "Educational Non-profits",
    "Religious Organizations",
    "Environmental Groups",
    "Community Services",
    "Fundraising",
    "Volunteer Coordination",
    "International Aid",
    "Healthcare Non-profits",
    "Youth Programs",
    "Animal Welfare Organizations",
    "Non-profit Consulting",
    "Grant Writing",
    "Cultural Preservation",
  ],
  Other: [
    "General",
    "Miscellaneous",
    "Research & Development",
    "Franchising",
    "Import & Export",
    "Self-Employment",
  ],
};
// #endregion

// #region Ecommerce-Industry Content Stuff
export const ecommerceIndustryOptions = [
  "Fashion & Apparel",
  "Beauty & Personal Care",
  "Electronics & Gadgets",
  "Home & Kitchen",
  "Health & Wellness",
  "Toys & Games",
  "Books & Stationery",
  "Fitness & Sports",
  "Jewelry & Accessories",
  "Food & Beverage",
  "Pet Supplies",
  "Automotive Parts",
  "Digital Goods (eBooks, software, music)",
  "Others",
];

export const ecommerceIndustryToNiches: Record<string, string[]> = {
  "Fashion & Apparel": [
    "All types of Wears",
    "Men's Clothing",
    "Women's Clothing",
    "Kids' Clothing",
    "Footwear",
    "Accessories",
    "Ethnic Wear",
    "Outerwear",
    "Streetwear",
    "Lingerie & Sleepwear",
    "Seasonal Collections",
    "Custom Apparel",
    "Sustainable Fashion",
    "Plus Size Fashion",
    "Formal Wear",
    "Athleisure",
  ],
  "Beauty & Personal Care": [
    "All types of Products",
    "Skincare Products",
    "Hair Care",
    "Makeup & Cosmetics",
    "Men’s Grooming",
    "Fragrances",
    "Organic & Natural Products",
    "Beauty Tools",
    "Bath & Body",
    "Anti-Aging Products",
    "Beauty Subscription Boxes",
    "Salon Equipment",
    "Personal Hygiene",
    "Nail Care",
    "Spa Essentials",
    "Cosmetic Bundles",
  ],
  "Electronics & Gadgets": [
    "All types of Gadgets",
    "Mobile Phones",
    "Laptops & Computers",
    "Smart Watches",
    "Headphones & Earbuds",
    "Gaming Consoles",
    "Cameras & Photography",
    "Smart Home Devices",
    "Drones & Accessories",
    "Computer Accessories",
    "Chargers & Cables",
    "Wearable Tech",
    "Portable Speakers",
    "VR Headsets",
    "Tech Gadgets",
    "Refurbished Electronics",
  ],
  "Home & Kitchen": [
    "All types of Products",
    "Home Decor",
    "Furniture",
    "Cookware & Bakeware",
    "Storage & Organization",
    "Kitchen Appliances",
    "Lighting & Fixtures",
    "Bedding & Bath",
    "Tableware & Cutlery",
    "Cleaning Supplies",
    "Home Improvement Tools",
    "Smart Home Accessories",
    "Gardening Supplies",
    "Wall Art & Frames",
    "Rugs & Carpets",
    "DIY Kits",
  ],
  "Health & Wellness": [
    "All types of Products",
    "Vitamins & Supplements",
    "Fitness Equipment",
    "Health Monitors",
    "Organic Foods",
    "Essential Oils",
    "Herbal Remedies",
    "Medical Supplies",
    "Mental Wellness Products",
    "Sleep Aids",
    "Detox Products",
    "First Aid Kits",
    "Wellness Drinks",
    "Personal Protective Equipment (PPE)",
    "Aromatherapy",
    "Self-care Kits",
  ],
  "Toys & Games": [
    "All types of Toys/Games",
    "Educational Toys",
    "Board Games",
    "Puzzles",
    "Action Figures",
    "Building Blocks",
    "Remote Control Toys",
    "Dolls & Plush Toys",
    "Outdoor Play",
    "STEM Toys",
    "Art & Craft Kits",
    "Gaming Accessories",
    "Baby Toys",
    "Pretend Play",
    "Musical Toys",
    "Video Games",
  ],
  "Books & Stationery": [
    "All types of Books",
    "Fiction Books",
    "Non-fiction Books",
    "Children’s Books",
    "Educational Books",
    "Journals & Notebooks",
    "School Supplies",
    "Office Supplies",
    "Planners & Diaries",
    "Art Supplies",
    "Calendars",
    "DIY Stationery Kits",
    "Comic Books",
    "Book Accessories",
    "Stationery Gift Sets",
    "E-learning Materials",
  ],
  "Fitness & Sports": [
    "All types of Equipements",
    "Gym Equipment",
    "Yoga Mats & Accessories",
    "Running Gear",
    "Cycling Equipment",
    "Outdoor Sports Gear",
    "Home Workout Kits",
    "Sportswear",
    "Fitness Trackers",
    "Supplements & Nutrition",
    "Water Bottles",
    "Martial Arts Gear",
    "Tennis & Racket Sports",
    "Team Sports Equipment",
    "Recovery & Mobility Tools",
    "Sports Bags",
  ],
  "Jewelry & Accessories": [
    "All types of Jewelries",
    "Fine Jewelry",
    "Fashion Jewelry",
    "Watches",
    "Rings & Earrings",
    "Bracelets & Bangles",
    "Necklaces & Pendants",
    "Men’s Accessories",
    "Custom Jewelry",
    "Sustainable Jewelry",
    "Luxury Watches",
    "Jewelry Storage",
    "Hair Accessories",
    "Eyewear",
    "Scarves & Wraps",
    "Brooches & Pins",
  ],
  "Food & Beverage": [
    "All types of Foods",
    "Snacks & Packaged Foods",
    "Organic Foods",
    "Beverages & Juices",
    "Tea & Coffee",
    "Gourmet Products",
    "Baking Supplies",
    "Health Drinks",
    "Condiments & Sauces",
    "Ready-to-eat Meals",
    "Meal Kits",
    "Sweets & Confectionery",
    "Gluten-free Foods",
    "Vegan Products",
    "Cooking Oils",
    "Food Subscription Boxes",
  ],
  "Pet Supplies": [
    "All types of Products",
    "Pet Food",
    "Pet Toys",
    "Pet Grooming Products",
    "Pet Health Products",
    "Leashes & Collars",
    "Pet Beds & Furniture",
    "Aquarium Supplies",
    "Pet Apparel",
    "Litter & Waste Management",
    "Pet Carriers",
    "Training Aids",
    "Pet Treats",
    "Bird & Small Animal Supplies",
    "Pet Bowls & Feeders",
    "Pet Cleaning Supplies",
  ],
  "Automotive Parts": [
    "All types of Products",
    "Car Accessories",
    "Motor Oils & Fluids",
    "Tires & Wheels",
    "Vehicle Lighting",
    "Interior Accessories",
    "Exterior Accessories",
    "Car Audio & Electronics",
    "Tools & Equipment",
    "Brakes & Suspension",
    "Performance Parts",
    "Car Care Products",
    "Replacement Parts",
    "Battery & Chargers",
    "Truck Accessories",
    "Motorcycle Parts",
  ],
  "Digital Goods (eBooks, software, music)": [
    "All types of Products",
    "eBooks",
    "Online Courses",
    "Digital Art",
    "Software & Licenses",
    "Music Downloads",
    "Video Content",
    "Subscription Services",
    "Printable Templates",
    "Design Assets",
    "Fonts & Icons",
    "Game Downloads",
    "Stock Photos & Videos",
    "Web Themes & Templates",
    "App Downloads",
    "Digital Gift Cards",
  ],
  Others: [
    "General Products",
    "Subscription Boxes",
    "Customizable Products",
    "Gift Items",
    "DIY Products",
    "Local Artisans",
    "Seasonal Items",
    "Event Merchandise",
    "Crowdfunded Products",
    "Handmade Goods",
    "Unique Finds",
    "Personalized Gifts",
    "Marketplace Sellers",
    "Home Services Booking",
    "Miscellaneous",
  ],
};

// #endregion

const colorOptions = [
  {
    category: "Grayscale",
    colors: [
      { name: "Black", color: "#000000" },
      { name: "Gray", color: "#808080" },
      { name: "Silver", color: "#C0C0C0" },
      { name: "White", color: "#FFFFFF" },
    ],
  },
  {
    category: "Red",
    colors: [
      { name: "Maroon", color: "#800000" },
      { name: "Red", color: "#FF0000" },
      { name: "Tomato", color: "#FF6347" },
      { name: "Rose", color: "#FF007F" },
    ],
  },
  {
    category: "Yellows",
    colors: [
      { name: "Brown", color: "#8B4513" },
      { name: "Orange", color: "#FF8C00" },
      { name: "Gold", color: "#FFD700" },
      { name: "Lemon", color: "#F0E68C" },
    ],
  },
  {
    category: "Greens",
    colors: [
      { name: "Teal", color: "#008080" },
      { name: "Lime Green", color: "#32CD32" },
      { name: "Sea Green", color: "#3CB371" },
      { name: "Pale Green", color: "#98FB98" },
    ],
  },
  {
    category: "Blues",
    colors: [
      { name: "Navy Blue", color: "#0000AA" },
      { name: "Light Blue", color: "#1E90FF" },
      { name: "Sky Blue", color: "#87CEEB" },
      { name: "Cyan", color: "#00FFFF" },
    ],
  },
  {
    category: "Purples & Violets",
    colors: [
      { name: "Purple", color: "#800080" },
      { name: "Violet", color: "#9370DB" },
      { name: "Pink", color: "#FF1493" },
      { name: "Light Pink", color: "#FF69B4" },
    ],
  },
];

//#endregion

//#region Common FIELDs
export const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #3b82f6,
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <input
          type={type}
          className={cn(
            `shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:border-red-500`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100; // Adjust this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${
                visible ? radius + "px" : "0px"
              } circle at ${mouseX}px ${mouseY}px,
              #3b82f6,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/textarea rounded-lg p-[2px] transition duration-300"
      >
        <textarea
          className={cn(
            `shadow-input dark:placeholder-text-neutral-600 flex w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/textarea:shadow-none placeholder:text-neutral-400 focus-visible:ring-[2px]  disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:border-red-500`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Textarea.displayName = "Textarea";

export const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

export const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export function EditableListField({
  label,
  values,
  onChange,
}: {
  label: string;
  values: string[];
  onChange: (updated: string[]) => void;
}) {
  const handleChange = (index: number, newValue: string) => {
    const updated = [...values];
    updated[index] = newValue;
    onChange(updated);
  };

  const addField = () => onChange([...values, ""]);

  const removeField = (index: number) => {
    const updated = [...values];
    updated.splice(index, 1);
    onChange(updated);
  };

  return (
    <LabelInputContainer className="mb-4">
      <Label className="font-semibold">{label}</Label>
      {values.map((value, index) => (
        <div key={index} className="flex gap-4 mb-2">
          <Input
            type="text"
            className="border p-2 w-[500px]"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`${label} item #${index + 1}`}
          />
          <button
            type="button"
            onClick={() => removeField(index)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addField}
        className="text-green-600 ml-80 hover:underline text-base"
      >
        + Add {label.toLowerCase()} item
      </button>
    </LabelInputContainer>
  );
}
//#endregion

//#region LOCATION
export const LocationInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) => {
  const [suggestions, setSuggestions] = React.useState<any[]>([]);

  const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    onChange(query);

    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
      )}`
    );
    const data = await res.json();
    setSuggestions(data.slice(0, 5));
  };

  return (
    <div className="relative">
      <Input
        type="text"
        value={value}
        onChange={handleInput}
        placeholder="Enter your location"
        required
        // className="w-full rounded-md border border-neutral-300 bg-white p-3 text-neutral-700 shadow-sm dark:border-neutral-600 dark:bg-black dark:text-neutral-300"
      />
      {suggestions.length > 0 && (
        <div className="absolute z-10 mt-1 max-h-40 w-full overflow-auto rounded-md border border-gray-300 bg-white dark:bg-black shadow-lg">
          {suggestions?.map((s, idx) => (
            <div
              key={idx}
              onClick={() => {
                onChange(s.display_name);
                setSuggestions([]);
              }}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {s.display_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
//#endregion

//#region INDUSTRY

type IndustrySelectorProps = {
  selectedIndustry: string;
  onIndustryChange: (industry: string) => void;
  selectedNiche: string;
  onNicheChange: (niche: string) => void;
  industryOptions: string[];
  industryToNiches: Record<string, string[]>;
};

export function IndustrySelector({
  selectedIndustry,
  onIndustryChange,
  selectedNiche,
  onNicheChange,
  industryOptions,
  industryToNiches,
}: IndustrySelectorProps) {
  const availableNiches = selectedIndustry
    ? industryToNiches[selectedIndustry] || []
    : [];

  return (
    <>
      <LabelInputContainer className="mb-8">
        <Label htmlFor="industry">
          Choose your Industry <span className="text-red-500 text-lg">*</span>
        </Label>
        <select
          id="industry"
          name="industry"
          className="w-full rounded-md border border-neutral-300 bg-white p-3 text-neutral-700 shadow-sm dark:border-neutral-600 dark:bg-black dark:text-neutral-300"
          value={selectedIndustry}
          onChange={(e) => onIndustryChange(e.target.value)}
          required
        >
          <option value="" disabled>
            Select an Industry
          </option>
          {industryOptions?.map((industry, index) => (
            <option key={index} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </LabelInputContainer>

      {availableNiches.length > 0 && (
        <LabelInputContainer className="mb-8">
          <Label htmlFor="niche">Select Niche</Label>
          <select
            id="niche"
            name="niche"
            className="w-full rounded-md border border-neutral-300 bg-white p-3 text-neutral-700 shadow-sm dark:border-neutral-600 dark:bg-black dark:text-neutral-300"
            value={selectedNiche}
            onChange={(e) => onNicheChange(e.target.value)}
            required
          >
            <option value="" disabled>
              Choose your Business Niche
              <span className="text-red-500 text-lg">*</span>
            </option>
            {availableNiches?.map((niche, idx) => (
              <option key={idx} value={niche}>
                {niche}
              </option>
            ))}
          </select>
        </LabelInputContainer>
      )}
    </>
  );
}
//#endregion

// //#region COLOR
// type ColorOption = {
//   category: string;
//   colors: {
//     name: string;
//     color: string;
//   }[];
// };

// type ColorPickerProps = {
//   selectedColors: string[];
//   onChange: (colors: string[]) => void;
//   options?: ColorOption[]; // optional, so you can override default colors
// };

// export const ColorSelector = ({
//   selectedColors,
//   onChange,
//   options,
// }: ColorPickerProps) => {
//   const toggleColor = (colorName: string) => {
//     if (selectedColors.includes(colorName)) {
//       onChange(selectedColors.filter((c) => c !== colorName));
//     } else {
//       onChange([...selectedColors, colorName]);
//     }
//   };

//   return (
//     <div className="mb-8 flex flex-col space-y-4">
//       <Label htmlFor="colors" className=" text-sm font-medium">
//         Preferred Color(s)
//         <span className="text-red-500 text-lg">*</span>
//       </Label>
//       <div className="w-full ml-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
//         {colorOptions?.map(({ category, colors }) => (
//           <div key={category}>
//             <div className="flex flex-col space-y-2">
//               {colors?.map(({ name, color }) => (
//                 <label
//                   key={name}
//                   className="flex items-center space-x-2 cursor-pointer"
//                   aria-label={`Select color ${name}`}
//                 >
//                   <input
//                     type="checkbox"
//                     name="colors"
//                     value={name}
//                     className="accent-black dark:accent-white"
//                     checked={selectedColors.includes(name)}
//                     onChange={() => toggleColor(name)}
//                   />
//                   <span
//                     className="inline-block w-5 h-5 rounded-full border border-neutral-300 dark:border-neutral-700"
//                     style={{ backgroundColor: color }}
//                   ></span>
//                   <span className="text-base text-neutral-700 dark:text-neutral-300">
//                     {name}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// //#endregion

//#region Personal Details FIELDs
export const PersonalDetailsForm = ({ location, setLocation }: any) => (
  <div id="personal-details" className="flex flex-col">
    <h2 className="text-3xl font-serif border-b-4 flex flex-col items-start pt-10 pb-2 font-bold text-neutral-800 dark:text-neutral-200">
      Personal Details...
    </h2>

    {/* Name & Email */}
    <div className="my-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
      <LabelInputContainer>
        <Label htmlFor="clientName">
          Your Name<span className="text-red-500 text-lg">*</span>
        </Label>
        <Input
          id="clientName"
          name="clientName"
          placeholder="Enter your Full Name..."
          type="text"
          pattern="[A-Za-z ]+"
          title="Only alphabetic characters allowed..."
          required
        />
      </LabelInputContainer>

      <LabelInputContainer>
        <Label htmlFor="email">
          Email Address<span className="text-red-500 text-lg">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          placeholder="you@example.com"
          type="email"
          required
        />
      </LabelInputContainer>
    </div>

    {/* Phone & Location */}
    <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
      <LabelInputContainer>
        <Label htmlFor="phone">
          Phone<span className="text-red-500 text-lg">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          placeholder="+11234567890"
          type="tel"
          required
        />
      </LabelInputContainer>

      <LabelInputContainer>
        <Label htmlFor="location">
          Location<span className="text-red-500 text-lg">*</span>
        </Label>
        <LocationInput value={location} onChange={setLocation} />
      </LabelInputContainer>
    </div>
  </div>
);
//#endregion

//#region Business Details FIELDs
export const BusinessDetailsForm = ({
  selectedIndustry,
  setSelectedIndustry,
  selectedNiche,
  setSelectedNiche,
  ecommerceIndustryOptions,
  ecommerceIndustryToNiches,
  availableNiches,
  setAvailableNiches,
  isEcommerce,
  websiteIndustryOptions,
  websiteIndustryToNiches,
}: any) => (
  <div id="business-details" className="flex flex-col">
    <h1 className="text-3xl font-serif border-b-4 flex flex-col items-start px-auto pt-10 pb-2 font-bold text-neutral-800 dark:text-neutral-200">
      Business Details...
    </h1>
    {/* CompanyName and Tagline */}
    <div className="my-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
      <LabelInputContainer>
        <Label htmlFor="company">
          Company Name<span className="text-red-500 text-lg">*</span>
        </Label>
        <Input
          id="company"
          name="company"
          placeholder="dotr - DHINOJA OmniTech Resolutions"
          type="text"
          // pattern="[A-Za-z]+(?: [A-Za-z]+)*"
          // title="Only alphabetic characters allowed..."
          required
        />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="tagline">Tagline (Optional)</Label>
        <Input
          id="tagline"
          name="tagline"
          placeholder="One-Stop Tech Partner"
          type="text"
        />
      </LabelInputContainer>
    </div>

    {/* Dropdown for Industry Selection */}

    {isEcommerce ? (
      <IndustrySelector
        selectedIndustry={selectedIndustry}
        onIndustryChange={(industry: string) => {
          setSelectedIndustry(industry);
          if (ecommerceIndustryToNiches[industry]) {
            setAvailableNiches(ecommerceIndustryToNiches[industry]);
          } else {
            setAvailableNiches([]);
          }
          setSelectedNiche("");
        }}
        selectedNiche={selectedNiche}
        onNicheChange={setSelectedNiche}
        industryOptions={ecommerceIndustryOptions}
        industryToNiches={ecommerceIndustryToNiches}
      />
    ) : (
      <IndustrySelector
        selectedIndustry={selectedIndustry}
        onIndustryChange={(industry) => {
          setSelectedIndustry(industry);
          if (websiteIndustryToNiches[industry]) {
            setAvailableNiches(websiteIndustryToNiches[industry]);
          } else {
            setAvailableNiches([]);
          }
          setSelectedNiche("");
        }}
        selectedNiche={selectedNiche}
        onNicheChange={setSelectedNiche}
        industryOptions={websiteIndustryOptions}
        industryToNiches={websiteIndustryToNiches}
      />
    )}
  </div>
);
//#endregion

//#region Website Details FIELDs
export const WebsiteDetailsForm = ({
  selectedEcommercePlatform,
  setSelectedEcommercePlatform,
  selectedPages,
  handlePageChange,
  pageOptions,
  selectedEcommerceFeatures,
  handleEcommerceFeaturesChange,
  selectedEcommercePaymentOptions,
  handleEcommercePaymentOptionsChange,
  isEcommerce,
}: any) => (
  <div id="website-details" className="flex flex-col">
    <h1 className="text-3xl font-serif border-b-4 flex flex-col items-start px-auto pt-10 pb-2 font-bold text-neutral-800 dark:text-neutral-200">
      Website Details...
    </h1>

    {/* Reference Website Input */}
    <LabelInputContainer className="my-8">
      <Label htmlFor="firstname">
        Any reference websites you like? (Optional)
      </Label>
      <Input
        id="reference"
        name="reference"
        placeholder="Paste Link of that Website Here..."
        type="url"
        title="Please Enter Valid URL..."
      />
    </LabelInputContainer>

    {/* Checkbox for Page Selection */}
    <div className="mb-8 flex flex-col space-y-2">
      <Label htmlFor="pages" className="">
        Preferred Page(s) for your Website...
        <span className="text-red-500 text-lg">*</span>
      </Label>
      <div className=" w-full ml-10 sm:ml-6 lg:ml-10 grid lg:grid-cols-6 sm:grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-3">
        {pageOptions.map((page: string, index: number) => (
          <label
            key={index}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <input
              type="checkbox"
              name="pages"
              value={page}
              className="accent-black dark:accent-white"
              checked={selectedPages.includes(page)}
              onChange={() => handlePageChange(page)}
            />
            <span className="text-base pl-2 text-neutral-700 dark:text-neutral-300">
              {page}
            </span>
          </label>
        ))}
      </div>
    </div>

    {isEcommerce && (
      <>
        {/* Dropdown for Ecommerce Platform Selection */}
        <LabelInputContainer className="mb-8">
          <Label htmlFor="ecommmmerce-platform">
            Ecommerce Platform <span className="text-red-500 text-lg">*</span>
          </Label>
          <select
            id="ecommmmerce-platform"
            name="ecommmmerce-platform"
            className="w-full rounded-md border border-neutral-300 bg-white p-3 text-neutral-700 shadow-sm
          dark:border-neutral-600 dark:bg-black dark:text-neutral-300"
            value={selectedEcommercePlatform}
            onChange={(e) => setSelectedEcommercePlatform(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a Platform
            </option>
            {ecommercePlatformOptions?.map(
              (platform: string, index: number) => (
                <option key={index} value={platform}>
                  {platform}
                </option>
              )
            )}
          </select>
        </LabelInputContainer>

        {/* Checkbox for Ecommerce Feature Selection */}
        <div className="mb-8 flex flex-col space-y-2">
          <Label htmlFor="pages" className="">
            Preferred Feature(s) for your Website...
            <span className="text-red-500 text-lg">*</span>
          </Label>
          <div className=" w-full ml-10 sm:ml-6 lg:ml-10 grid lg:grid-cols-5 sm:grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-3">
            {ecommerceFeaturesOptions.map((ecommerceFeature, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="ecommerce-features"
                  value={ecommerceFeature}
                  className="accent-black dark:accent-white"
                  checked={selectedEcommerceFeatures.includes(ecommerceFeature)}
                  onChange={() =>
                    handleEcommerceFeaturesChange(ecommerceFeature)
                  }
                />
                <span className="text-base pl-2 text-neutral-700 dark:text-neutral-300">
                  {ecommerceFeature}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Checkbox for Ecommerce Payment Selection */}
        <div className="mb-8 flex flex-col space-y-2">
          <Label htmlFor="pages" className="">
            Preferred Payment Option(s) for your Website...
            <span className="text-red-500 text-lg">*</span>
          </Label>
          <div className=" w-full ml-10 sm:ml-6 lg:ml-10 grid lg:grid-cols-5 sm:grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-3">
            {ecommercePaymentOptions.map((ecommercePayment, index) => (
              <label
                key={index}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  name="ecommerce-payayment-options"
                  value={ecommercePayment}
                  className="accent-black dark:accent-white"
                  checked={selectedEcommercePaymentOptions.includes(
                    ecommercePayment
                  )}
                  onChange={() =>
                    handleEcommercePaymentOptionsChange(ecommercePayment)
                  }
                />
                <span className="text-base pl-2 text-neutral-700 dark:text-neutral-300">
                  {ecommercePayment}
                </span>
              </label>
            ))}
          </div>
        </div>
      </>
    )}
  </div>
);
// #endregion

//#region Style Details FIELDs
export const StyleDetailsForm = ({
  selectedColors,
  setSelectedColors,
  selectedFont,
  setSelectedFont,
}: any) => (
  <div className="flex flex-col">
    {/* Checkbox for Color Selection */}
    <div className="mb-8 flex flex-col space-y-4">
      <Label htmlFor="colors" className=" text-sm font-medium">
        Preferred Color(s)
        <span className="text-red-500 text-lg">*</span>
      </Label>
      <div className="w-full ml-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {colorOptions?.map(({ category, colors }) => (
          <div key={category}>
            <div className="flex flex-col space-y-2">
              {colors?.map(({ name, color }) => (
                <label
                  key={name}
                  className="flex items-center space-x-2 cursor-pointer"
                  aria-label={`Select color ${name}`}
                >
                  <input
                    type="checkbox"
                    name="colors"
                    value={name}
                    className="accent-black dark:accent-white"
                    checked={selectedColors.includes(name)}
                    onChange={() =>
                      setSelectedColors((prev: string[]) =>
                        prev.includes(name)
                          ? prev.filter((c) => c !== name)
                          : [...prev, name]
                      )
                    }
                  />
                  <span
                    className="inline-block w-5 h-5 rounded-full border border-neutral-300 dark:border-neutral-700"
                    style={{ backgroundColor: color }}
                  ></span>
                  <span className="text-base text-neutral-700 dark:text-neutral-300">
                    {name}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Dropdown for Font Selection */}
    <LabelInputContainer className="mb-8">
      <Label htmlFor="industry">
        Font Style <span className="text-red-500 text-lg">*</span>
      </Label>
      <select
        id="font"
        name="font"
        className="w-full rounded-md border border-neutral-300 bg-white p-3 text-neutral-700 shadow-sm
                                  dark:border-neutral-600 dark:bg-black dark:text-neutral-300"
        value={selectedFont}
        onChange={(e) => setSelectedFont(e.target.value)}
        required
      >
        <option value="" disabled>
          Select a Font Style
        </option>
        {fontOptions.map((font: string, index: number) => (
          <option key={index} value={font}>
            {font}
          </option>
        ))}
      </select>
    </LabelInputContainer>
  </div>
);

// #endregion

// #region General FORM
export const General_FORM = ({ category }: { category: string }) => {
  const [selectedService, setSelectedService] = React.useState<string>("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [services, setServices] = useState<any[]>([]);
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        if (category === "general") {
          const categories = ["designing", "development"];
          const responses = await Promise.all(
            categories?.map((category) =>
              fetch(`http://localhost:8000/api/${category}/services/all`).then(
                (res) => res.json()
              )
            )
          );
          const allServices = responses.flatMap(
            (data) => data[0]?.services || []
          );
          setServices(allServices);
        } else {
          const response = await fetch(
            `http://localhost:8000/api/${category}/services/all`
          ).then((response) => response.json());
          setServices(response[0].services || []);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [category]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      category: `${category}`, // or dynamically from UI if needed
      details: {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        tagline: formData.get("tagline"),
        service: selectedService,
        message: formData.get("message"),
      },
    };

    console.log(`📦 ${category} Form Submission:`, data);

    try {
      const response = await fetch(
        `http://localhost:8000/api/form/${category}/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        alert(
          `Submission failed: ${
            errorData.message || "An unexpected error occurred."
          }`
        );
        return;
      }

      const result = await response.json();
      console.log("✅ Submitted successfully:", result);
    } catch (error) {
      console.error("🚨 Submission error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section
      id={`contact-for-${category}`}
      className="mb-40 mt-8 flex flex-col item-center shadow-input w-full max-w-6xl mx-auto rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black"
    >
      {category === "general" ? (
        <h1 className="heading flex flex-col items-center text-xl px-auto pt-10 pb-2 font-bold text-neutral-800 dark:text-neutral-200">
          Contact DOTR and get SkyRocket your Brand!...
        </h1>
      ) : (
        <h1 className="heading flex flex-col items-center text-xl px-auto pt-10 pb-2 font-bold text-neutral-800 dark:text-neutral-200">
          Do {category.toUpperCase()} in your Own way...
        </h1>
      )}
      <p className="flex flex-col items-center px-auto pb-8 mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        Contact us and we will be available in a minute...
      </p>

      <form className="my-8 mx-4 md:mx-16" onSubmit={handleSubmit}>
        <PersonalDetailsForm location={location} setLocation={setLocation} />
        <h2 className="text-3xl font-serif border-b-4 flex flex-col items-start  mt-8 pb-2 font-bold text-neutral-800 dark:text-neutral-200">
          Business Details...
        </h2>
        <div className="my-8 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-6">
          <LabelInputContainer>
            <Label htmlFor="company">
              Company Name<span className="text-red-500 text-lg">*</span>
            </Label>
            <Input
              id="company"
              name="company"
              placeholder="dotr - DHINOJA OmniTech Resolutions"
              type="text"
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="tagline">Tagline (Optional)</Label>
            <Input
              id="tagline"
              name="tagline"
              placeholder="One-Stop Tech Partner"
              type="text"
            />
          </LabelInputContainer>
        </div>

        {/* Service Dropdown */}
        <LabelInputContainer className="mb-8">
          <Label htmlFor="service">
            Select a Service<span className="text-red-500 text-lg">*</span>
          </Label>
          <select
            id="service"
            name="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full rounded-md border border-neutral-300 bg-white p-3 text-neutral-700 shadow-sm
              dark:border-neutral-600 dark:bg-black dark:text-neutral-300"
            required
          >
            <option value="" disabled>
              Select a Service...
            </option>
            {services?.map((service: any, index: number) => (
              <option key={index} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="message">Message(Optional)</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Any message for us..."
            rows={5}
          />
        </LabelInputContainer>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <button
          className="group/btn relative mx-auto block h-12 w-[180px] rounded-t-full bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send
          <BottomGradient />
        </button>

        {isSubmitted && (
          <p className="text-3xl text-green-500 flex items-center justify-center mt-5">
            ...Thanks! We got your request...
          </p>
        )}
      </form>
    </section>
  );
};
//#endregion
