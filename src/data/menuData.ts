// ================= TYPES =================

export type MenuCategory =
  | 'Pastries & Cakes'
  | 'Light Bites'
  | 'Breakfast'
  | 'Beef Dishes'
  | 'Goat Dishes'
  | 'Local Food'
  | 'Pizzas'
  | 'Burgers'
  | 'Curries & Soups'
  | 'Quesadillas'
  | 'Lunch & Dinner'
  | 'Beverages'
  | 'Juices & Smoothies'
  | 'Soft Drinks';

export type BranchId =
  | 'jinja-highway'
  | 'jinja-lakeview'
  | 'kampala';

// ================= MENU OPTIONS =================
export interface MenuOption {
  name: string;
  choices: string[];
  required?: boolean;     // customer must choose
  multi?: boolean;        // allow multiple selections
}

// ================= MENU ITEM =================
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;

  image?: string;

  popular?: boolean;
  isPromo?: boolean;
  promoLabel?: string;

  /** ⭐ CUSTOMIZATION / COMPANIONS */
  options?: MenuOption[];

  /** ⭐ Branch availability */
  branches?: BranchId[];

  /** ⭐ Inventory */
  inStock?: boolean;

  /** ⭐ Analytics / filtering */
  tags?: string[];

  /** ⭐ Future (POS / pricing upgrades) */
  prepTime?: number;       // minutes
  calories?: number;
}

export interface Branch {
  id: BranchId;
  name: string;
  shortName: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  mapUrl: string;
  color: string;
  kitchenWhatsapp: string;
  deliveryAreas: { name: string; fee: number }[];
}

// ================= BRANCHES =================

export const branches: Branch[] = [
  {
    id: 'jinja-highway',
    name: 'Coffee Life Café — Jinja Highway',
    shortName: 'Jinja Highway',
    address:
      'Total Jinja Highway, Roundabout, Opposite Gadafi Barracks, Near Total Patrol Station, Jinja',
    phone: '+256 746 888 730',
    whatsapp: '+256746888730',
    hours: '24 Hours',
    mapUrl:
      'https://maps.google.com/?q=Jinja+Roundabout+Gadafi+Barracks',
    color: 'hsl(25 67% 33%)',
    kitchenWhatsapp: '+256746888730',
    deliveryAreas: [
      { name: 'Jinja Town', fee: 2000 },
      { name: 'Walukuba West', fee: 2000 },
      { name: 'Walukuba East', fee: 2500 },
      { name: 'Mafubira', fee: 2500 },
      { name: 'Masese', fee: 3000 },
      { name: 'Bugembe', fee: 3000 },
      { name: 'Wakitaka', fee: 3000 },
      { name: 'Nile', fee: 3500 },
      { name: 'Buwenge', fee: 4000 },
      { name: 'Budondo', fee: 4500 },
    ],
  },
  {
    id: 'jinja-lakeview',
    name: 'Coffee Life Café — Jinja Lakeview',
    shortName: 'Jinja Lakeview',
    address: 'Total Lakeview, Mailo Mbili, Jinja',
    phone: '+256 784 305 795',
    whatsapp: '+256784305795',
    hours: '6:00am – 12:00am',
    mapUrl:
      'https://maps.google.com/?q=Total+Lakeview+Mailo+Mbili+Jinja',
    color: 'hsl(200 55% 30%)',
    kitchenWhatsapp: '+256784305795',
    deliveryAreas: [
      { name: 'Mailo Mbili', fee: 2000 },
      { name: 'Mpumudde', fee: 2500 },
      { name: 'Lakeview', fee: 2500 },
      { name: 'Wanyange', fee: 3000 },
      { name: 'Bugembe', fee: 3000 },
      { name: 'Buwenge', fee: 3500 },
      { name: 'Mafubira', fee: 3500 },
      { name: 'Kasokoso', fee: 4000 },
      { name: 'Njeru', fee: 4500 },
    ],
  },
  {
    id: 'kampala',
    name: 'Coffee Life Café — Kampala Kasangati',
    shortName: 'Kampala',
    address:
      'Yosef Mall, Ggaba Road, Opposite University of East Africa, Kansanga, Kampala',
    phone: '+256 746 888 730',
    whatsapp: '+256746888730',
    hours: '7:00am – 12:00am',
    mapUrl:
      'https://maps.google.com/?q=Kansanga+Kampala+Uganda',
    color: 'hsl(150 40% 28%)',
    kitchenWhatsapp: '+256746888730',
    deliveryAreas: [
      { name: 'Kansanga', fee: 2000 },
      { name: 'Kabalagala', fee: 2500 },
      { name: 'Muyenga', fee: 2500 },
      { name: 'Namuwongo', fee: 3000 },
      { name: 'Makindye', fee: 3000 },
      { name: 'Lubowa', fee: 3500 },
      { name: 'Munyonyo', fee: 4000 },
      { name: 'Nsambya', fee: 3500 },
      { name: 'Mengo', fee: 4000 },
      { name: 'Kireka', fee: 4500 },
    ],
  },
];
// ================= IMAGE HELPER (IMPORTANT) =================
const img = (name: string) => `/images/menu/${name}`;

// ================= PASTRIES MENU =================
const pastriesMenu: MenuItem[] = [
  {
    id: 'p1',
    name: 'Red Velvet Sliced',
    description: 'Moist red velvet cake with cream cheese frosting',
    price: 10000,
    category: 'Pastries & Cakes',
    popular: true,
    image: img('red-velvet.jpeg'),
  },
  {
    id: 'p2',
    name: 'Black Forest Sliced',
    description: 'Chocolate cake layered with cherries and whipped cream',
    price: 10000,
    category: 'Pastries & Cakes',
    popular: true,
    image: img('black-forest-cake.webp'),
  },
  {
    id: 'p3',
    name: 'Vanilla Sliced',
    description: 'Classic vanilla sponge with smooth buttercream',
    price: 7000,
    category: 'Pastries & Cakes',
    image: img('vanilla-cake.webp'),
  },
  {
    id: 'p4',
    name: 'Madeline Cake',
    description: 'Soft buttery French-style shell cake',
    price: 6000,
    category: 'Pastries & Cakes',
    image: img('madeline-cake.jpg'),
  },
  {
    id: 'p5',
    name: 'Marble Cake',
    description: 'Beautiful swirl of chocolate and vanilla',
    price: 5000,
    category: 'Pastries & Cakes',
    image: img('marble-cake.jpg'),
  },
  {
    id: 'p6',
    name: 'Chocolate Donut',
    description: 'Fluffy donut glazed with rich chocolate',
    price: 6000,
    category: 'Pastries & Cakes',
    popular: true,
    image: img('chocolate-donut.webp'),
  },
  {
    id: 'p7',
    name: 'Plain Donut',
    description: 'Classic soft glazed donut',
    price: 4000,
    category: 'Pastries & Cakes',
    image: img('plain-donut.webp'),
  },
  {
    id: 'p8',
    name: 'Kibabs',
    description: 'Crispy golden pastry rolls with savory filling',
    price: 5000,
    category: 'Pastries & Cakes',
    image: img('kibabs.jpg'),
  },
  {
    id: 'p9',
    name: 'Chocolate Muffins',
    description: 'Moist chocolate muffin with chocolate chips',
    price: 7000,
    category: 'Pastries & Cakes',
    image: img('chocolate-muffins.webp'),
  },
  {
    id: 'p10',
    name: 'Milk Muffins',
    description: 'Soft milk-based muffin, lightly sweet',
    price: 5000,
    category: 'Pastries & Cakes',
    image: img('milk-muffins.webp'),
  },
  {
    id: 'p11',
    name: 'Lemon Muffins',
    description: 'Zesty lemon muffin with a tangy glaze',
    price: 7000,
    category: 'Pastries & Cakes',
    image: img('lemon-muffins.webp'),
  },
  {
    id: 'p12',
    name: 'Cheese Croissant',
    description: 'Buttery croissant filled with melted cheese',
    price: 5000,
    category: 'Pastries & Cakes',
    popular: true,
    image: img('cheese-croissant.webp'),
  },
  {
    id: 'p13',
    name: 'Plain Croissant',
    description: 'Flaky golden butter croissant',
    price: 6000,
    category: 'Pastries & Cakes',
    image: img('plain-croissant.webp'),
  },
  {
    id: 'p14',
    name: 'Chocolate Croissant',
    description: 'Croissant filled with dark chocolate',
    price: 7000,
    category: 'Pastries & Cakes',
    image: img('chocolate-croissant.jpg'),
  },
];
// ================= LIGHT BITES =================
const lightBitesMenu: MenuItem[] = [
  {
    id: 'lb1',
    name: 'A Pair of Samosas',
    description: 'Two golden crispy samosas with spiced filling',
    price: 5000,
    category: 'Light Bites',
    popular: true,
    image: img('samosas.jpg'),
  },
  {
    id: 'lb2',
    name: 'Buttermilk Pancakes (2)',
    description: 'Two fluffy buttermilk pancakes served warm',
    price: 10000,
    category: 'Light Bites',
    image: img('buttermilk-pancakes.jpg'),
  },
  {
    id: 'lb3',
    name: 'Beef Sausages (2)',
    description: 'Two juicy grilled beef sausages',
    price: 6000,
    category: 'Light Bites',
    image: img('beef-sausages.jpg'),
  },
  {
    id: 'lb4',
    name: 'Chapati',
    description: 'Soft layered East African flatbread',
    price: 2000,
    category: 'Light Bites',
    image: img('chapati.jpg'),
  },
  {
    id: 'lb5',
    name: 'Chips Masala',
    description: 'Crispy fries tossed in aromatic masala spices',
    price: 10000,
    category: 'Light Bites',
    popular: true,
    image: img('chips-masala.jpg'),
  },
  {
    id: 'lb6',
    name: 'Plain Omelette',
    description: 'Light fluffy omelette made to order',
    price: 5000,
    category: 'Light Bites',
    image: img('plain-omelette.jpg'),
  },
  {
    id: 'lb7',
    name: 'Chicken Pie',
    description: 'Flaky pastry filled with seasoned chicken',
    price: 8000,
    category: 'Light Bites',
    popular: true,
    image: img('chicken-pie.jpg'),
  },
];

// ================= BREAKFAST =================
const breakfastMenu: MenuItem[] = [
  {
    id: 'br0',
    name: 'Wednesday Burger Promo',
    description: 'Buy 1 Get 1 Free! Delicious burger with chips and drinks — every Wednesday.',
    price: 32000,
    category: 'Breakfast',
    isPromo: true,
    promoLabel: 'EVERY WEDNESDAY',
    popular: true,
    image: img('burger-breakfast.jpg'),
  },

  {
    id: 'br1',
    name: 'Pancake Breakfast Combo',
    description: 'Eggs, pancakes, sausages and home fries',
    price: 27000,
    category: 'Breakfast',
    popular: true,
    image: img('pancake-breakfast.jpg'),
    options: [
      {
        name: 'Egg Style',
        choices: ['Scrambled', 'Fried', 'Boiled', 'Omelette'],
      },
      {
        name: 'Drink',
        choices: ['Tea', 'Coffee', 'Fresh Juice'],
      },
    ],
  },

  {
    id: 'br2',
    name: 'Coffee Life All Time Breakfast',
    description: 'Grilled fish fillet with vegetables and eggs',
    price: 27000,
    category: 'Breakfast',
    image: img('all-time-breakfast.jpg'),
    options: [
      {
        name: 'Egg Style',
        choices: ['Boiled', 'Scrambled', 'Fried'],
      },
      {
        name: 'Side',
        choices: ['Home Fries', 'Rice', 'Salad'],
      },
    ],
  },

  {
    id: 'br3',
    name: 'Stack Breakfast Combo',
    description: 'Chicken or steak with potatoes, spinach & mushrooms',
    price: 27000,
    category: 'Breakfast',
    image: img('stack-breakfast.jpg'),
    options: [
      {
        name: 'Protein',
        choices: ['Chicken', 'Beef Steak'],
      },
      {
        name: 'Drink',
        choices: ['Tea', 'Coffee'],
      },
    ],
  },

  {
    id: 'br4',
    name: 'Chicken & Egg Breakfast Combo',
    description: 'Eggs, sausages, breaded chicken & fries',
    price: 27000,
    category: 'Breakfast',
    image: img('chicken-egg-breakfast.jpg'),
    options: [
      {
        name: 'Egg Style',
        choices: ['Scrambled', 'Fried', 'Boiled'],
      },
    ],
  },

  {
    id: 'br5',
    name: 'Healthy Native Breakfast',
    description: 'Vegetables, eggs, plantain & sausages',
    price: 27000,
    category: 'Breakfast',
    image: img('native-breakfast.jpg'),
    options: [
      {
        name: 'Starch',
        choices: ['Plantain', 'Sweet Potatoes', 'Cassava'],
      },
      {
        name: 'Drink',
        choices: ['Tea', 'Coffee'],
      },
    ],
  },

  {
    id: 'br6',
    name: 'English Breakfast Combo',
    description: 'Eggs, sausages, fries, beans & bread',
    price: 27000,
    category: 'Breakfast',
    popular: true,
    image: img('english-breakfast.jpg'),
    options: [
      {
        name: 'Egg Style',
        choices: ['Fried', 'Scrambled', 'Poached'],
      },
      {
        name: 'Drink',
        choices: ['Tea', 'Coffee', 'Juice'],
      },
    ],
  },

  {
    id: 'br7',
    name: 'American Rolex Combo',
    description: 'Eggs and steak wrapped in chapati',
    price: 27000,
    category: 'Breakfast',
    popular: true,
    image: img('american-rolex.jpg'),
    options: [
      {
        name: 'Protein',
        choices: ['Beef Steak', 'Chicken'],
      },
    ],
  },

  {
    id: 'br8',
    name: 'Avo Toast Combo',
    description: 'Avocado toast with eggs and drink',
    price: 20000,
    category: 'Breakfast',
    image: img('avo-toast.jpg'),
    options: [
      {
        name: 'Egg Style',
        choices: ['Scrambled', 'Poached'],
      },
      {
        name: 'Drink',
        choices: ['Tea', 'Coffee'],
      },
    ],
  },

  {
    id: 'br9',
    name: 'Muffin Combo',
    description: 'Muffin with hot drink',
    price: 15000,
    category: 'Breakfast',
    image: img('muffin-combo.jpg'),
    options: [
      {
        name: 'Muffin Flavor',
        choices: ['Chocolate', 'Vanilla', 'Milk', 'Lemon'],
      },
      {
        name: 'Drink',
        choices: ['Tea', 'Coffee'],
      },
    ],
  },
];

const beefMenu: MenuItem[] = [
  {
    id: 'bf1',
    name: 'Beef Steak Supreme',
    description: 'Juicy tender beef fillet grilled to perfection served in pepper sauce',
    price: 35000,
    category: 'Beef Dishes',
    popular: true,
    image: img('beef-steak-supreme.jpg'),
    options: [
      { name: 'Doneness', choices: ['Rare', 'Medium Rare', 'Medium', 'Well Done'], required: true },
      { name: 'Side', choices: ['Fries', 'Mashed Potatoes', 'Rice', 'Vegetables'] },
      { name: 'Sauce', choices: ['Pepper', 'Mushroom', 'BBQ', 'Gravy'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'grilled', 'popular'],
    prepTime: 20,
  },
  {
    id: 'bf2',
    name: 'Beef Stir Fry',
    description: 'Beef strips cooked in vegetables and soy sauce',
    price: 35000,
    category: 'Beef Dishes',
    image: img('beef-stir-fry.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Noodles', 'Salad'] },
      { name: 'Spice Level', choices: ['Mild', 'Medium', 'Hot'] },
    ],
    branches: ['jinja-highway', 'jinja-lakeview', 'kampala'],
    inStock: true,
    tags: ['beef', 'stir-fry'],
    prepTime: 15,
  },
  {
    id: 'bf3',
    name: 'Pepper Steak',
    description: 'Juicy tender fillet steak grilled to your preference served in pepper sauce',
    price: 30000,
    category: 'Beef Dishes',
    popular: true,
    image: img('pepper-steak.jpg'),
    options: [
      { name: 'Doneness', choices: ['Rare', 'Medium Rare', 'Medium', 'Well Done'], required: true },
      { name: 'Side', choices: ['Fries', 'Rice', 'Vegetables'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'pepper', 'popular'],
    prepTime: 18,
  },
  {
    id: 'bf4',
    name: 'Beef with Broccoli',
    description: 'Boneless beef cut in cubes cooked with broccoli and sauce',
    price: 35000,
    category: 'Beef Dishes',
    image: img('beef-broccoli.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Noodles'] },
      { name: 'Sauce', choices: ['Soy', 'Garlic', 'Teriyaki'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'broccoli', 'healthy'],
    prepTime: 15,
  },
  {
    id: 'bf5',
    name: 'Beefy Bliss',
    description: 'A creamy sauce of beef chunks, mushrooms, peppers & onions. Served with avocado, kachumbal, and gravy',
    price: 35000,
    category: 'Beef Dishes',
    image: img('beefy-bliss.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Fries', 'Bread'] },
      { name: 'Add Extra Cheese', choices: ['Yes', 'No'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'creamy'],
    prepTime: 20,
  },
  {
    id: 'bf6',
    name: 'Beef Skewers',
    description: 'Marinated beef skewers grilled to perfection',
    price: 35000,
    category: 'Beef Dishes',
    popular: true,
    image: img('beef-skewers.jpg'),
    options: [
      { name: 'Quantity', choices: ['2 pcs', '4 pcs', '6 pcs'], required: true },
      { name: 'Dip Sauce', choices: ['BBQ', 'Garlic', 'Pepper'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'skewers', 'popular'],
    prepTime: 18,
  },
  {
    id: 'bf7',
    name: 'Beef Pilau',
    description: 'Aromatic spiced rice served with tender beef cubes',
    price: 25000,
    category: 'Beef Dishes',
    image: img('beef-pilau.jpg'),
    options: [
      { name: 'Spice Level', choices: ['Mild', 'Medium', 'Hot'] },
      { name: 'Extra Meat', choices: ['Yes', 'No'] },
    ],
    branches: ['jinja-highway', 'jinja-lakeview', 'kampala'],
    inStock: true,
    tags: ['beef', 'pilau'],
    prepTime: 15,
  },
  {
    id: 'bf8',
    name: 'Wednesday Burger Promo',
    description: 'Buy 1 Get 1 Free! Delicious burger. Comes with chips and drinks.',
    price: 32000,
    category: 'Beef Dishes',
    isPromo: true,
    promoLabel: 'EVERY WEDNESDAY',
    image: img('wednesday-burger.jpg'),
    options: [
      { name: 'Side', choices: ['Fries', 'Mashed Potatoes'], required: true },
      { name: 'Drink', choices: ['Soda', 'Juice', 'Water'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'burger', 'promo'],
    prepTime: 15,
  },
];

const goatMenu: MenuItem[] = [
  {
    id: 'g1',
    name: 'Grilled Goat Meat',
    description: 'Marinated and oven-grilled, glazed in honey sauce with vegetables. Served with chips, kachumbal & gravy',
    price: 38000,
    category: 'Goat Dishes',
    popular: true,
    image: img('grilled-goat-meat.jpg'),
    options: [
      { name: 'Side', choices: ['Chips', 'Mashed Potatoes', 'Rice', 'Vegetables'], required: true },
      { name: 'Sauce', choices: ['Honey Glaze', 'BBQ', 'Garlic Butter'] },
      { name: 'Quantity', choices: ['1 portion', '2 portions'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['goat', 'grilled', 'popular'],
    prepTime: 25,
  },
  {
    id: 'g2',
    name: 'Pan Fried Goat',
    description: 'Goat cubes pan-fried with choice of cucumber or vegetables. Served with chips & gravy',
    price: 35000,
    category: 'Goat Dishes',
    image: img('pan-fried-goat.jpg'),
    options: [
      { name: 'Side', choices: ['Chips', 'Rice', 'Posho'], required: true },
      { name: 'Vegetables', choices: ['Cucumber', 'Mixed Veg', 'Spinach'] },
      { name: 'Sauce', choices: ['Gravy', 'Garlic Butter'] },
    ],
    branches: ['jinja-highway', 'jinja-lakeview', 'kampala'],
    inStock: true,
    tags: ['goat', 'pan-fried'],
    prepTime: 20,
  },
  {
    id: 'g3',
    name: 'Boiled Goat Meat',
    description: 'Boiled to perfection with vegetables and greens. Served with rice, posho, or mashed potatoes and gravy',
    price: 35000,
    category: 'Goat Dishes',
    image: img('boiled-goat.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Posho', 'Mashed Potatoes'], required: true },
      { name: 'Greens', choices: ['Spinach', 'Kale', 'Mixed Veg'] },
      { name: 'Sauce', choices: ['Gravy', 'Light Curry'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['goat', 'healthy'],
    prepTime: 20,
  },
  {
    id: 'g4',
    name: 'Goat Brochette',
    description: 'Marinated and grilled goat skewers served with chips, mayo & kachumbal',
    price: 35000,
    category: 'Goat Dishes',
    popular: true,
    image: img('goat-brochette.jpg'),
    options: [
      { name: 'Quantity', choices: ['2 skewers', '4 skewers'], required: true },
      { name: 'Dip Sauce', choices: ['Mayo', 'BBQ', 'Garlic Butter'] },
      { name: 'Side', choices: ['Chips', 'Rice', 'Vegetables'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['goat', 'skewers', 'popular'],
    prepTime: 18,
  },
  {
    id: 'g5',
    name: 'Goat Biriyani',
    description: 'Goat meat marinated & cooked with spiced basmati rice. Served with kachumbal & yogurt sauce',
    price: 35000,
    category: 'Goat Dishes',
    image: img('goat-biriyani.jpg'),
    options: [
      { name: 'Protein', choices: ['Goat', 'Chicken'] },
      { name: 'Spice Level', choices: ['Mild', 'Medium', 'Hot'] },
      { name: 'Side', choices: ['Yogurt Sauce', 'Kachumbal'], required: true },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['goat', 'biriyani', 'spiced'],
    prepTime: 25,
  },
];

const localMenu: MenuItem[] = [
  {
    id: 'loc1',
    name: 'Goat Stew',
    description: 'Served with rice, posho, matooke, greens & a drink (tea, coffee, or soda)',
    price: 25000,
    category: 'Local Food',
    popular: true,
    image: img('goat-stew.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Posho', 'Matooke'], required: true },
      { name: 'Greens', choices: ['Spinach', 'Kale', 'Mixed Veg'] },
      { name: 'Drink', choices: ['Tea', 'Coffee', 'Soda'], required: true },
    ],
    branches: ['jinja-highway', 'jinja-lakeview', 'kampala'],
    inStock: true,
    tags: ['goat', 'stew', 'popular'],
    prepTime: 20,
  },
  {
    id: 'loc2',
    name: 'Chicken Stew',
    description: 'Served with choice of rice, posho, matooke & greens, plus a drink',
    price: 30000,
    category: 'Local Food',
    popular: true,
    image: img('chicken-stew.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Posho', 'Matooke'], required: true },
      { name: 'Greens', choices: ['Spinach', 'Mixed Veg'] },
      { name: 'Drink', choices: ['Tea', 'Coffee', 'Soda'], required: true },
    ],
    branches: ['jinja-highway', 'jinja-lakeview', 'kampala'],
    inStock: true,
    tags: ['chicken', 'stew', 'popular'],
    prepTime: 18,
  },
  {
    id: 'loc3',
    name: 'Beef Stew',
    description: 'All local foods served with rice, posho, matooke & greens and a drink',
    price: 25000,
    category: 'Local Food',
    image: img('beef-stew.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Posho', 'Matooke'], required: true },
      { name: 'Greens', choices: ['Spinach', 'Kale', 'Mixed Veg'] },
      { name: 'Drink', choices: ['Tea', 'Coffee', 'Soda'], required: true },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'stew'],
    prepTime: 18,
  },
  {
    id: 'loc4',
    name: 'Beans or Peas',
    description: 'Traditional sides, served with a drink if ordered as a combo',
    price: 20000,
    category: 'Local Food',
    image: img('beans-peas.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Posho', 'Matooke'], required: true },
      { name: 'Drink', choices: ['Tea', 'Coffee', 'Soda'], required: true },
    ],
    branches: ['jinja-highway', 'jinja-lakeview', 'kampala'],
    inStock: true,
    tags: ['beans', 'peas', 'side'],
    prepTime: 15,
  },
  {
    id: 'loc5',
    name: 'Chicken Pilau',
    description: 'Aromatic spiced rice with tender chicken, served with chips or drink',
    price: 30000,
    category: 'Local Food',
    popular: true,
    image: img('chicken-pilau.jpg'),
    options: [
      { name: 'Side', choices: ['Chips', 'Salad', 'Extra Rice'] },
      { name: 'Drink', choices: ['Tea', 'Coffee', 'Soda'], required: true },
      { name: 'Spice Level', choices: ['Mild', 'Medium', 'Hot'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['chicken', 'pilau', 'popular'],
    prepTime: 20,
  },
  {
    id: 'loc6',
    name: 'Goat Pilau',
    description: 'Aromatic spiced rice with tender goat, served with chips or drink',
    price: 28000,
    category: 'Local Food',
    image: img('goat-pilau.jpg'),
    options: [
      { name: 'Side', choices: ['Chips', 'Salad', 'Extra Rice'] },
      { name: 'Drink', choices: ['Tea', 'Coffee', 'Soda'], required: true },
      { name: 'Spice Level', choices: ['Mild', 'Medium', 'Hot'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['goat', 'pilau'],
    prepTime: 20,
  },
  {
    id: 'loc7',
    name: 'Beef Pilau',
    description: 'Aromatic spiced rice with tender beef, served with chips or drink',
    price: 25000,
    category: 'Local Food',
    image: img('beef-pilau.jpg'),
    options: [
      { name: 'Side', choices: ['Chips', 'Salad', 'Extra Rice'] },
      { name: 'Drink', choices: ['Tea', 'Coffee', 'Soda'], required: true },
      { name: 'Spice Level', choices: ['Mild', 'Medium', 'Hot'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'pilau'],
    prepTime: 20,
  },
];

const pizzaMenu: MenuItem[] = [
  {
    id: 'pz1',
    name: 'Special Festival Pizza — Large',
    description: 'Chunks of chicken, minced meat, sausages, onions & green pepper topped with cheese',
    price: 42000,
    category: 'Pizzas',
    popular: true,
    image: img('special-festival-pizza-large.jpg'),
    options: [
      { name: 'Extra Toppings', choices: ['Mushrooms', 'Olives', 'Extra Cheese', 'Jalapenos'] },
      { name: 'Crust Type', choices: ['Thin', 'Thick', 'Cheese-stuffed'] },
      { name: 'Size', choices: ['Large'], required: true },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['chicken', 'meat', 'festival', 'popular'],
    prepTime: 25,
  },
  {
    id: 'pz2',
    name: 'Special Festival Pizza — Medium',
    description: 'Chunks of chicken, minced meat, sausages, onions & green pepper topped with cheese',
    price: 30000,
    category: 'Pizzas',
    image: img('special-festival-pizza-medium.jpg'),
    options: [
      { name: 'Extra Toppings', choices: ['Mushrooms', 'Olives', 'Extra Cheese', 'Jalapenos'] },
      { name: 'Crust Type', choices: ['Thin', 'Thick', 'Cheese-stuffed'] },
      { name: 'Size', choices: ['Medium'], required: true },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['chicken', 'meat', 'festival'],
    prepTime: 20,
  },
  {
    id: 'pz3',
    name: 'Special Festival Pizza — Small',
    description: 'Chunks of chicken, minced meat, sausages, onions & green pepper topped with cheese',
    price: 22000,
    category: 'Pizzas',
    image: img('special-festival-pizza-small.jpg'),
    options: [
      { name: 'Extra Toppings', choices: ['Mushrooms', 'Olives', 'Extra Cheese', 'Jalapenos'] },
      { name: 'Crust Type', choices: ['Thin', 'Thick', 'Cheese-stuffed'] },
      { name: 'Size', choices: ['Small'], required: true },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['chicken', 'meat', 'festival'],
    prepTime: 18,
  },
];

const curryMenu: MenuItem[] = [
  {
    id: 'cu1',
    name: 'Vegetable Curry',
    description: 'Assorted seasoned vegetables cooked in a mild creamy sauce. Served with rice, chapati, or posho',
    price: 30000,
    category: 'Curries & Soups',
    image: img('vegetable-curry.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Chapati', 'Posho'], required: true },
      { name: 'Spice Level', choices: ['Mild', 'Medium', 'Hot'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['vegetarian', 'mild', 'healthy'],
    prepTime: 20,
  },
  {
    id: 'cu2',
    name: 'Chicken Curry',
    description: 'Tender chicken cooked in rich curry sauce. Served with rice, chapati, or posho',
    price: 35000,
    category: 'Curries & Soups',
    popular: true,
    image: img('chicken-curry.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Chapati', 'Posho'], required: true },
      { name: 'Spice Level', choices: ['Mild', 'Medium', 'Hot'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['chicken', 'spicy', 'popular'],
    prepTime: 25,
  },
  {
    id: 'cu3',
    name: 'Beef Curry',
    description: 'Tender beef cooked in rich curry sauce. Served with rice, chapati, or posho',
    price: 35000,
    category: 'Curries & Soups',
    image: img('beef-curry.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Chapati', 'Posho'], required: true },
      { name: 'Spice Level', choices: ['Mild', 'Medium', 'Hot'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'spicy'],
    prepTime: 25,
  },
  {
    id: 'cu4',
    name: 'Carrot & Ginger Soup',
    description: 'Served with choice of bread or croutons',
    price: 15000,
    category: 'Curries & Soups',
    image: img('carrot-ginger-soup.jpg'),
    options: [
      { name: 'Accompaniment', choices: ['Bread', 'Croutons'], required: true },
      { name: 'Temperature', choices: ['Hot', 'Warm'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['vegetarian', 'soup', 'healthy'],
    prepTime: 10,
  },
  {
    id: 'cu5',
    name: 'Tomato Soup',
    description: 'Choice of creamy or clear soup. Served with bread or croutons',
    price: 10000,
    category: 'Curries & Soups',
    image: img('tomato-soup.jpg'),
    options: [
      { name: 'Type', choices: ['Creamy', 'Clear'], required: true },
      { name: 'Accompaniment', choices: ['Bread', 'Croutons'], required: true },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['vegetarian', 'soup'],
    prepTime: 10,
  },
  {
    id: 'cu6',
    name: 'Vegetable Soup',
    description: 'Served with choice of bread or croutons',
    price: 15000,
    category: 'Curries & Soups',
    image: img('vegetable-soup.jpg'),
    options: [
      { name: 'Accompaniment', choices: ['Bread', 'Croutons'], required: true },
      { name: 'Temperature', choices: ['Hot', 'Warm'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['vegetarian', 'soup', 'healthy'],
    prepTime: 10,
  },
];

const quesadillaMenu: MenuItem[] = [
  {
    id: 'q1',
    name: 'Chicken Quesadilla',
    description: 'Marinated chicken with grilled vegetables & mozzarella. Served with guacamole, salsa & chips',
    price: 30000,
    category: 'Quesadillas',
    popular: true,
    image: img('chicken-quesadilla.jpg'),
    options: [
      { name: 'Extra Fillings', choices: ['Mushrooms', 'Onions', 'Bell Peppers', 'Jalapeños'] },
      { name: 'Side', choices: ['Chips', 'Salad'], required: true },
      { name: 'Sauce', choices: ['Guacamole', 'Salsa', 'Sour Cream'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['chicken', 'grilled', 'popular'],
    prepTime: 15,
  },
  {
    id: 'q2',
    name: 'Beef Quesadilla',
    description: 'Marinated beef with vegetables & mozzarella. Served with guacamole, salsa, and chips',
    price: 30000,
    category: 'Quesadillas',
    image: img('beef-quesadilla.jpg'),
    options: [
      { name: 'Extra Fillings', choices: ['Mushrooms', 'Onions', 'Bell Peppers', 'Jalapeños'] },
      { name: 'Side', choices: ['Chips', 'Salad'], required: true },
      { name: 'Sauce', choices: ['Guacamole', 'Salsa', 'Sour Cream'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'grilled'],
    prepTime: 15,
  },
];

const burgerMenu: MenuItem[] = [
  {
    id: 'bu0',
    name: 'Wednesday Burger Promo',
    description: 'Buy 1 Get 1 Free! Delicious burger with chips and drinks — every Wednesday!',
    price: 32000,
    category: 'Burgers',
    isPromo: true,
    promoLabel: 'EVERY WEDNESDAY',
    popular: true,
    image: img('wednesday-burger.jpg'),
    options: [
      { name: 'Patty', choices: ['Chicken Single', 'Chicken Double', 'Beef Single', 'Beef Double'], required: true },
      { name: 'Cheese', choices: ['Cheddar', 'Mozzarella', 'None'] },
      { name: 'Toppings', choices: ['Lettuce', 'Tomato', 'Onion', 'Pickles'] },
      { name: 'Sauce', choices: ['Mayo', 'Ketchup', 'BBQ', 'Mustard'] },
      { name: 'Side', choices: ['Chips', 'Salad'], required: true },
      { name: 'Drink', choices: ['Soda', 'Water', 'Juice'], required: true },
    ],
    branches: ['jinja-highway', 'jinja-lakeview', 'kampala'],
    inStock: true,
    tags: ['promo', 'popular', 'burger'],
    prepTime: 15,
  },
  {
    id: 'bu1',
    name: 'Chicken Burger, Single',
    description: 'Served with chips and a drink',
    price: 32000,
    category: 'Burgers',
    popular: true,
    image: img('chicken-burger-single.jpg'),
    options: [
      { name: 'Cheese', choices: ['Cheddar', 'Mozzarella', 'None'] },
      { name: 'Toppings', choices: ['Lettuce', 'Tomato', 'Onion', 'Pickles'] },
      { name: 'Sauce', choices: ['Mayo', 'Ketchup', 'BBQ', 'Mustard'] },
      { name: 'Side', choices: ['Chips', 'Salad'], required: true },
      { name: 'Drink', choices: ['Soda', 'Water', 'Juice'], required: true },
    ],
    branches: ['jinja-highway', 'jinja-lakeview', 'kampala'],
    inStock: true,
    tags: ['chicken', 'burger'],
    prepTime: 12,
  },
  {
    id: 'bu2',
    name: 'Chicken Burger, Double',
    description: 'Double chicken patty served with chips and a drink',
    price: 35000,
    category: 'Burgers',
    image: img('chicken-burger-double.jpg'),
    options: [
      { name: 'Cheese', choices: ['Cheddar', 'Mozzarella', 'None'] },
      { name: 'Toppings', choices: ['Lettuce', 'Tomato', 'Onion', 'Pickles'] },
      { name: 'Sauce', choices: ['Mayo', 'Ketchup', 'BBQ', 'Mustard'] },
      { name: 'Side', choices: ['Chips', 'Salad'], required: true },
      { name: 'Drink', choices: ['Soda', 'Water', 'Juice'], required: true },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['chicken', 'double', 'burger'],
    prepTime: 15,
  },
  {
    id: 'bu3',
    name: 'Beef Burger, Double',
    description: 'Double beef patty served with chips and a drink',
    price: 35000,
    category: 'Burgers',
    popular: true,
    image: img('beef-burger-double.jpg'),
    options: [
      { name: 'Cheese', choices: ['Cheddar', 'Mozzarella', 'None'] },
      { name: 'Toppings', choices: ['Lettuce', 'Tomato', 'Onion', 'Pickles'] },
      { name: 'Sauce', choices: ['Mayo', 'Ketchup', 'BBQ', 'Mustard'] },
      { name: 'Side', choices: ['Chips', 'Salad'], required: true },
      { name: 'Drink', choices: ['Soda', 'Water', 'Juice'], required: true },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'double', 'burger'],
    prepTime: 15,
  },
  {
    id: 'bu4',
    name: 'Vegan Burger',
    description: 'Plant-based patty served with chips and a drink',
    price: 32000,
    category: 'Burgers',
    image: img('vegan-burger.jpg'),
    options: [
      { name: 'Toppings', choices: ['Lettuce', 'Tomato', 'Onion', 'Pickles'] },
      { name: 'Sauce', choices: ['Mayo', 'Ketchup', 'BBQ', 'Mustard'] },
      { name: 'Side', choices: ['Chips', 'Salad'], required: true },
      { name: 'Drink', choices: ['Soda', 'Water', 'Juice'], required: true },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['vegan', 'plant-based', 'burger'],
    prepTime: 12,
  },
];

const lunchDinnerMenu: MenuItem[] = [
  {
    id: 'ld1',
    name: 'Beef Steak Supreme',
    description: 'Juicy tender beef fillet grilled to perfection served in pepper sauce',
    price: 35000,
    category: 'Lunch & Dinner',
    popular: true,
    image: img('beef-steak-supreme.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Chips', 'Potato Wedges', 'Vegetables'], required: true },
      { name: 'Sauce', choices: ['Pepper', 'Mushroom', 'BBQ', 'Gravy'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'steak', 'grilled'],
    prepTime: 20,
  },
  {
    id: 'ld2',
    name: 'Beef Stir Fry',
    description: 'Beef strips cooked in vegetables and soy sauce',
    price: 35000,
    category: 'Lunch & Dinner',
    image: img('beef-stir-fry.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Chips', 'Potato Wedges', 'Vegetables'], required: true },
      { name: 'Add-ons', choices: ['Extra Veggies', 'Extra Beef'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'stir-fry'],
    prepTime: 18,
  },
  {
    id: 'ld3',
    name: 'Pepper Steak',
    description: 'Juicy tender fillet steak grilled to your preference served in pepper sauce',
    price: 30000,
    category: 'Lunch & Dinner',
    image: img('pepper-steak.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Chips', 'Potato Wedges', 'Vegetables'], required: true },
      { name: 'Sauce', choices: ['Pepper', 'Mushroom', 'BBQ', 'Gravy'] },
      { name: 'Steak Doneness', choices: ['Rare', 'Medium Rare', 'Medium', 'Well Done'], required: true },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'steak'],
    prepTime: 20,
  },
  {
    id: 'ld4',
    name: 'Beefy Bliss',
    description: 'Creamy sauce of beef chunks, mushrooms, peppers & onions. Served with avocado and gravy',
    price: 35000,
    category: 'Lunch & Dinner',
    image: img('beefy-bliss.jpg'),
    options: [
      { name: 'Side', choices: ['Rice', 'Chips', 'Potato Wedges', 'Vegetables'], required: true },
      { name: 'Extra', choices: ['Avocado', 'Mushrooms', 'Peppers'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['beef', 'creamy'],
    prepTime: 20,
  },
  {
    id: 'ld5',
    name: 'All Time Coffee Life Platter',
    description: 'Sausages, goat meat, chicken skewer, fish fillet, broccoli, carrot, peppers. Served with rice, chips, and a soft drink',
    price: 85000,
    category: 'Lunch & Dinner',
    popular: true,
    image: img('coffee-life-platter.jpg'),
    options: [
      { name: 'Proteins', choices: ['Sausages', 'Goat Meat', 'Chicken Skewer', 'Fish Fillet'], multiple: true, required: true },
      { name: 'Side', choices: ['Rice', 'Chips', 'Vegetables'], required: true },
      { name: 'Drink', choices: ['Soda', 'Water', 'Juice'], required: true },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['platter', 'combo', 'popular'],
    prepTime: 25,
  },
  {
    id: 'ld6',
    name: 'Whole Chicken',
    description: 'Whole oven-grilled chicken marinated to perfection. Served with chips or potato wedges',
    price: 65000,
    category: 'Lunch & Dinner',
    image: img('whole-chicken.jpg'),
    options: [
      { name: 'Side', choices: ['Chips', 'Potato Wedges', 'Salad'], required: true },
      { name: 'Sauce', choices: ['BBQ', 'Gravy', 'Mayo'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['chicken', 'grilled', 'whole'],
    prepTime: 30,
  },
  {
    id: 'ld7',
    name: 'Chicken/Goat Biryani',
    description: 'Aromatic spiced rice served with chicken or goat, plus salad or chips',
    price: 35000,
    category: 'Lunch & Dinner',
    popular: true,
    image: img('biryani.jpg'),
    options: [
      { name: 'Protein', choices: ['Chicken', 'Goat'], required: true },
      { name: 'Side', choices: ['Salad', 'Chips'], required: true },
      { name: 'Spice Level', choices: ['Mild', 'Medium', 'Spicy'] },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['biryani', 'chicken', 'goat'],
    prepTime: 25,
  },
];

const beveragesMenu: MenuItem[] = [
  {
    id: 'bv1',
    name: 'House Coffee',
    description: 'Classic coffee, served black or with milk and sugar',
    price: 9000,
    category: 'Beverages',
    popular: true,
    image: img('house-coffee.jpg'),
    options: [
      { name: 'Size', choices: ['Single', 'Double'], required: true },
      { name: 'Milk', choices: ['Whole', 'Skim', 'Soy', 'Oat'], default: 'Whole' },
      { name: 'Sugar', choices: ['None', 'Normal', 'Extra'], default: 'Normal' },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['coffee', 'classic', 'hot'],
    prepTime: 5,
  },
  {
    id: 'bv3',
    name: 'Espresso',
    description: 'Strong, rich espresso served in a small cup',
    price: 6000,
    category: 'Beverages',
    options: [
      { name: 'Size', choices: ['Single', 'Double'], required: true },
      { name: 'Sugar', choices: ['None', 'Normal', 'Extra'], default: 'None' },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['espresso', 'hot', 'coffee'],
    prepTime: 4,
  },
  {
    id: 'bv5',
    name: 'Americano',
    description: 'Espresso with hot water, served black or with milk',
    price: 8000,
    category: 'Beverages',
    options: [
      { name: 'Size', choices: ['Single', 'Double'], required: true },
      { name: 'Milk', choices: ['None', 'Whole', 'Skim', 'Soy', 'Oat'], default: 'None' },
      { name: 'Sugar', choices: ['None', 'Normal', 'Extra'], default: 'Normal' },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['coffee', 'americano', 'hot'],
    prepTime: 5,
  },
  {
    id: 'bv7',
    name: 'Latte',
    description: 'Espresso with steamed milk and a light layer of foam',
    price: 9000,
    category: 'Beverages',
    popular: true,
    options: [
      { name: 'Size', choices: ['Single', 'Double'], required: true },
      { name: 'Milk', choices: ['Whole', 'Skim', 'Soy', 'Oat'], default: 'Whole' },
      { name: 'Sugar', choices: ['None', 'Normal', 'Extra'], default: 'Normal' },
      { name: 'Flavor', choices: ['Vanilla', 'Caramel', 'Hazelnut', 'None'], default: 'None' },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['latte', 'coffee', 'hot', 'popular'],
    prepTime: 6,
  },
  {
    id: 'bv9',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and thick foam',
    price: 9000,
    category: 'Beverages',
    popular: true,
    options: [
      { name: 'Size', choices: ['Single', 'Double'], required: true },
      { name: 'Milk', choices: ['Whole', 'Skim', 'Soy', 'Oat'], default: 'Whole' },
      { name: 'Sugar', choices: ['None', 'Normal', 'Extra'], default: 'Normal' },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['cappuccino', 'coffee', 'hot', 'popular'],
    prepTime: 6,
  },
  {
    id: 'bv10',
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk',
    price: 10000,
    category: 'Beverages',
    popular: true,
    options: [
      { name: 'Size', choices: ['Single', 'Double'], required: true },
      { name: 'Milk', choices: ['Whole', 'Skim', 'Soy', 'Oat'], default: 'Whole' },
      { name: 'Sugar', choices: ['None', 'Normal', 'Extra'], default: 'Normal' },
      { name: 'Ice', choices: ['Hot', 'Iced'], default: 'Hot' },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['mocha', 'chocolate', 'coffee', 'popular'],
    prepTime: 7,
  },
  {
    id: 'bv16',
    name: 'Regular Juice',
    description: 'Blend of mango, watermelon, passion fruit, or pineapple',
    price: 9000,
    category: 'Juices & Smoothies',
    options: [
      { name: 'Flavor', choices: ['Mango', 'Watermelon', 'Passion Fruit', 'Pineapple'], required: true },
      { name: 'Size', choices: ['Small', 'Medium', 'Large'], default: 'Medium' },
      { name: 'Ice', choices: ['Yes', 'No'], default: 'Yes' },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['juice', 'fresh', 'cold'],
    prepTime: 3,
  },
  {
    id: 'bv18',
    name: 'Banana Caramel Smoothie',
    description: 'Blended banana with caramel and milk, served cold',
    price: 16000,
    category: 'Juices & Smoothies',
    popular: true,
    options: [
      { name: 'Size', choices: ['Small', 'Medium', 'Large'], default: 'Medium' },
      { name: 'Milk', choices: ['Whole', 'Skim', 'Soy', 'Oat'], default: 'Whole' },
      { name: 'Ice', choices: ['Yes', 'No'], default: 'Yes' },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['smoothie', 'banana', 'caramel', 'cold', 'popular'],
    prepTime: 5,
  },
  {
    id: 'bv19',
    name: 'Mango Smoothie',
    description: 'Fresh mango blended with milk, served chilled',
    price: 15000,
    category: 'Juices & Smoothies',
    popular: true,
    options: [
      { name: 'Size', choices: ['Small', 'Medium', 'Large'], default: 'Medium' },
      { name: 'Milk', choices: ['Whole', 'Skim', 'Soy', 'Oat'], default: 'Whole' },
      { name: 'Ice', choices: ['Yes', 'No'], default: 'Yes' },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['smoothie', 'mango', 'cold', 'popular'],
    prepTime: 5,
  },
  {
    id: 'bv20',
    name: 'Soda',
    description: 'Chilled carbonated soft drink',
    price: 3000,
    category: 'Soft Drinks',
    options: [
      { name: 'Flavor', choices: ['Cola', 'Orange', 'Lemon', 'Ginger'], required: true },
      { name: 'Size', choices: ['Small', 'Medium', 'Large'], default: 'Medium' },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['soda', 'cold', 'soft-drink'],
    prepTime: 2,
  },
  {
    id: 'bv21',
    name: 'Water',
    description: 'Bottled drinking water',
    price: 3000,
    category: 'Soft Drinks',
    options: [
      { name: 'Size', choices: ['Small', 'Medium', 'Large'], default: 'Medium' },
    ],
    branches: ['jinja-highway', 'kampala'],
    inStock: true,
    tags: ['water', 'hydration'],
    prepTime: 1,
  },
];


// ================= BRANCH-SPECIFIC MENUS (ADVANCED) =================
export const branchMenus: Record<BranchId, MenuItem[]> = {
  'jinja-highway': [
    ...pastriesMenu.map(item => ({ ...item, branches: ['jinja-highway'], inStock: true })),
    ...lightBitesMenu.map(item => ({ ...item, branches: ['jinja-highway'], inStock: true })),
    ...breakfastMenu.map(item => ({ ...item, branches: ['jinja-highway'], inStock: true })),
    ...beefMenu.map(item => ({ ...item, branches: ['jinja-highway'], inStock: true })),
    ...goatMenu.map(item => ({ ...item, branches: ['jinja-highway'], inStock: true })),
    ...quesadillaMenu.map(item => ({ ...item, branches: ['jinja-highway'], inStock: true })),
    ...localMenu.map(item => ({ ...item, branches: ['jinja-highway'], inStock: true })),
    ...pizzaMenu.map(item => ({ ...item, branches: ['jinja-highway'], inStock: true })),
    ...curryMenu.map(item => ({ ...item, branches: ['jinja-highway'], inStock: true })),
    ...burgerMenu.map(item => ({ ...item, branches: ['jinja-highway'], inStock: true })),
    ...lunchDinnerMenu.map(item => ({ ...item, branches: ['jinja-highway'], inStock: true })),
    ...beveragesMenu.map(item => ({ ...item, branches: ['jinja-highway'], inStock: true })),
  ],

  'jinja-lakeview': [
    ...pastriesMenu.map(item => ({ ...item, branches: ['jinja-lakeview'], inStock: true })),
    ...lightBitesMenu.map(item => ({ ...item, branches: ['jinja-lakeview'], inStock: true })),
    ...breakfastMenu.map(item => ({ ...item, branches: ['jinja-lakeview'], inStock: true })),
    ...beefMenu.map(item => ({ ...item, branches: ['jinja-lakeview'], inStock: true })),
    ...goatMenu.map(item => ({ ...item, branches: ['jinja-lakeview'], inStock: true })),
    ...localMenu.map(item => ({ ...item, branches: ['jinja-lakeview'], inStock: true })),
    ...burgerMenu.map(item => ({ ...item, branches: ['jinja-lakeview'], inStock: true })),
    ...lunchDinnerMenu.map(item => ({ ...item, branches: ['jinja-lakeview'], inStock: true })),
    ...beveragesMenu.map(item => ({ ...item, branches: ['jinja-lakeview'], inStock: true })),
  ],

  'kampala': [
    ...pastriesMenu.map(item => ({ ...item, branches: ['kampala'], inStock: true })),
    ...lightBitesMenu.map(item => ({ ...item, branches: ['kampala'], inStock: true })),
    ...breakfastMenu.map(item => ({ ...item, branches: ['kampala'], inStock: true })),
    ...beefMenu.map(item => ({ ...item, branches: ['kampala'], inStock: true })),
    ...goatMenu.map(item => ({ ...item, branches: ['kampala'], inStock: true })),
    ...quesadillaMenu.map(item => ({ ...item, branches: ['kampala'], inStock: true })),
    ...localMenu.map(item => ({ ...item, branches: ['kampala'], inStock: true })),
    ...pizzaMenu.map(item => ({ ...item, branches: ['kampala'], inStock: true })),
    ...curryMenu.map(item => ({ ...item, branches: ['kampala'], inStock: true })),
    ...burgerMenu.map(item => ({ ...item, branches: ['kampala'], inStock: true })),
    ...lunchDinnerMenu.map(item => ({ ...item, branches: ['kampala'], inStock: true })),
    ...beveragesMenu.map(item => ({ ...item, branches: ['kampala'], inStock: true })),
  ],
};

// ================= CATEGORY LIST & ICONS =================
export const allCategories: MenuCategory[] = [
  'Pastries & Cakes',
  'Light Bites',
  'Breakfast',
  'Beef Dishes',
  'Goat Dishes',
  'Quesadillas',
  'Local Food',
  'Pizzas',
  'Curries & Soups',
  'Burgers',
  'Lunch & Dinner',
  'Beverages',
  'Juices & Smoothies',
  'Soft Drinks',
];

export const categoryIcons: Record<MenuCategory, string> = {
  'Pastries & Cakes': '🥐',
  'Light Bites': '🥗',
  'Breakfast': '🍳',
  'Beef Dishes': '🥩',
  'Goat Dishes': '🍖',
  'Quesadillas': '🌮',
  'Local Food': '🍛',
  'Pizzas': '🍕',
  'Curries & Soups': '🍲',
  'Burgers': '🍔',
  'Lunch & Dinner': '🍽️',
  'Beverages': '☕',
  'Juices & Smoothies': '🥤',
  'Soft Drinks': '🧃',
};

// ================= UTILITY FUNCTIONS =================
export function formatUGX(amount: number): string {
  return amount.toLocaleString() + ' UGX';
}

// Get all items in a category across branches
export function getCategoryItems(category: MenuCategory, branch?: BranchId): MenuItem[] {
  if (branch && branchMenus[branch]) {
    return branchMenus[branch].filter(item => item.category === category && item.inStock);
  }
  // Across all branches
  return Object.values(branchMenus)
    .flat()
    .filter(item => item.category === category && item.inStock);
}

// Get all popular items across branches
export function getPopularItems(branch?: BranchId): MenuItem[] {
  if (branch && branchMenus[branch]) {
    return branchMenus[branch].filter(item => item.popular && item.inStock);
  }
  return Object.values(branchMenus)
    .flat()
    .filter(item => item.popular && item.inStock);
}

// Get menu items by tag
export function getItemsByTag(tag: string, branch?: BranchId): MenuItem[] {
  if (branch && branchMenus[branch]) {
    return branchMenus[branch].filter(item => item.tags?.includes(tag) && item.inStock);
  }
  return Object.values(branchMenus)
    .flat()
    .filter(item => item.tags?.includes(tag) && item.inStock);
}