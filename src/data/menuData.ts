// Menu data for all 3 branches
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

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  isPromo?: boolean;
  promoLabel?: string;
  popular?: boolean;
}

export interface Branch {
  id: string;
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

export const branches: Branch[] = [
  {
    id: 'jinja-highway',
    name: 'Coffee Life Café — Jinja Highway',
    shortName: 'Jinja Highway',
    address: 'Total Jinja Highway, Roundabout, Opposite Gadafi Barracks, Near Total Patrol Station, Jinja',
    phone: '+256 746 888 730',
    whatsapp: '+256746888730',
    hours: '24 Hours',
    mapUrl: 'https://maps.google.com/?q=Jinja+Roundabout+Gadafi+Barracks',
    color: 'hsl(25 67% 33%)',
    kitchenWhatsapp: '+256746888730',
    deliveryAreas: [
      { name: 'Jinja Town', fee: 2000 },
      { name: 'Milo Mbili', fee: 2000 },
      { name: 'Walukuba West', fee: 2000 },
      { name: 'Walukuba East', fee: 3000 },
      { name: 'Mafubira', fee: 3000 },
      { name: 'Mpumudde', fee: 3000 },
      { name: 'Bugembe', fee: 3000 },
      { name: 'Nile', fee: 3000 },
      { name: 'Masese', fee: 4000 },
      { name: 'Wakitaka', fee: 4000 },
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
    mapUrl: 'https://maps.google.com/?q=Total+Lakeview+Mailo+Mbili+Jinja',
    color: 'hsl(200 55% 30%)',
    kitchenWhatsapp: '+256784305795',
    deliveryAreas: [
      { name: 'Mailo Mbili', fee: 2000 },
      { name: 'Jinja Town', fee: 2500 },
      { name: 'Mafubira', fee: 3000 },
      { name: 'Bugembe', fee: 3500 },
    ],
  },
  {
    id: 'kampala',
    name: 'Coffee Life Café — Kampala Kasangati',
    shortName: 'Kampala',
    address: 'Yosef Mall, Ggaba Road, Opposite University of East Africa, Kansanga, Kampala',
    phone: '+256 746 888 730',
    whatsapp: '+256746888730',
    hours: '7:00am – 12:00am',
    mapUrl: 'https://maps.google.com/?q=Kansanga+Kampala+Uganda',
    color: 'hsl(150 40% 28%)',
    kitchenWhatsapp: '+256746888730',
    deliveryAreas: [
      { name: 'Kansanga', fee: 2000 },
      { name: 'Makerere', fee: 3000 },
      { name: 'Kira Road', fee: 3000 },
      { name: 'Namuleesa', fee: 4000 },
    ],
  },
];

const pastriesMenu: MenuItem[] = [
  { id: 'p1', name: 'Red Velvet Sliced', description: 'Moist red velvet cake with cream cheese frosting', price: 10000, category: 'Pastries & Cakes', popular: true },
  { id: 'p2', name: 'Black Forest Sliced', description: 'Chocolate cake layered with cherries and whipped cream', price: 10000, category: 'Pastries & Cakes', popular: true },
  { id: 'p3', name: 'Vanilla Sliced', description: 'Classic vanilla sponge with smooth buttercream', price: 7000, category: 'Pastries & Cakes' },
  { id: 'p4', name: 'Madeline Cake', description: 'Soft buttery French-style shell cake', price: 6000, category: 'Pastries & Cakes' },
  { id: 'p5', name: 'Marble Cake', description: 'Beautiful swirl of chocolate and vanilla', price: 5000, category: 'Pastries & Cakes' },
  { id: 'p6', name: 'Chocolate Donut', description: 'Fluffy donut glazed with rich chocolate', price: 6000, category: 'Pastries & Cakes', popular: true },
  { id: 'p7', name: 'Plain Donut', description: 'Classic soft glazed donut', price: 4000, category: 'Pastries & Cakes' },
  { id: 'p8', name: 'Kibabs', description: 'Crispy golden pastry rolls with savory filling', price: 5000, category: 'Pastries & Cakes' },
  { id: 'p9', name: 'Chocolate Muffins', description: 'Moist chocolate muffin with chocolate chips', price: 7000, category: 'Pastries & Cakes' },
  { id: 'p10', name: 'Milk Muffins', description: 'Soft milk-based muffin, lightly sweet', price: 5000, category: 'Pastries & Cakes' },
  { id: 'p11', name: 'Lemon Muffins', description: 'Zesty lemon muffin with a tangy glaze', price: 7000, category: 'Pastries & Cakes' },
  { id: 'p12', name: 'Cheese Croissant', description: 'Buttery croissant filled with melted cheese', price: 5000, category: 'Pastries & Cakes', popular: true },
  { id: 'p13', name: 'Plain Croissant', description: 'Flaky golden butter croissant', price: 6000, category: 'Pastries & Cakes' },
  { id: 'p14', name: 'Chocolate Croissant', description: 'Croissant filled with dark chocolate', price: 7000, category: 'Pastries & Cakes' },
];

const lightBitesMenu: MenuItem[] = [
  { id: 'lb1', name: 'A Pair of Samosas', description: 'Two golden crispy samosas with spiced filling', price: 5000, category: 'Light Bites', popular: true },
  { id: 'lb2', name: 'Buttermilk Pancakes (2)', description: 'Two fluffy buttermilk pancakes served warm', price: 10000, category: 'Light Bites' },
  { id: 'lb3', name: 'Beef Sausages (2)', description: 'Two juicy grilled beef sausages', price: 6000, category: 'Light Bites' },
  { id: 'lb4', name: 'Chapati', description: 'Soft layered East African flatbread', price: 2000, category: 'Light Bites' },
  { id: 'lb5', name: 'Chips Masala', description: 'Crispy fries tossed in aromatic masala spices', price: 10000, category: 'Light Bites', popular: true },
  { id: 'lb6', name: 'Plain Omelette', description: 'Light fluffy omelette made to order', price: 5000, category: 'Light Bites' },
  { id: 'lb7', name: 'Chicken Pie', description: 'Flaky pastry filled with seasoned chicken', price: 8000, category: 'Light Bites', popular: true },
];

const breakfastMenu: MenuItem[] = [
  { id: 'br0', name: 'Wednesday Burger Promo', description: 'Buy 1 Get 1 Free! Delicious burger with chips and drinks — every Wednesday.', price: 32000, category: 'Breakfast', isPromo: true, promoLabel: 'EVERY WEDNESDAY', popular: true },
  { id: 'br1', name: 'Pancake Breakfast Combo', description: 'Eggs of choice, home fries, pancakes & sausages', price: 27000, category: 'Breakfast', popular: true },
  { id: 'br2', name: 'Coffee Life All Time Breakfast', description: 'Grilled fish fillet, steamed vegetables with two boiled eggs', price: 27000, category: 'Breakfast' },
  { id: 'br3', name: 'Stack Breakfast Combo', description: 'Tender grilled chicken or steak served on layered potatoes, spinach & mushrooms', price: 27000, category: 'Breakfast' },
  { id: 'br4', name: 'Chicken & Egg Breakfast Combo', description: 'Eggs of choice, sausages, breaded chicken & home fries', price: 27000, category: 'Breakfast' },
  { id: 'br5', name: 'Healthy Native Breakfast', description: 'Assorted steamed vegetables, boiled eggs, steamed plantain & sausages', price: 27000, category: 'Breakfast' },
  { id: 'br6', name: 'English Breakfast Combo', description: 'Eggs of choice, sausages, home fries, baked beans & bread', price: 27000, category: 'Breakfast', popular: true },
  { id: 'br7', name: 'American Rolex Combo', description: 'Two eggs with beef steak wrapped in chapati served with home fries', price: 27000, category: 'Breakfast', popular: true },
  { id: 'br8', name: 'Avo Toast Combo', description: 'Toasted bread topped with avocado & scrambled eggs. Served with tea or coffee', price: 20000, category: 'Breakfast' },
  { id: 'br9', name: 'Muffin Combo', description: 'Muffin of choice with coffee or tea', price: 15000, category: 'Breakfast' },
];

const beefMenu: MenuItem[] = [
  { id: 'bf1', name: 'Beef Steak Supreme', description: 'Juicy tender beef fillet grilled to perfection served in pepper sauce', price: 35000, category: 'Beef Dishes', popular: true },
  { id: 'bf2', name: 'Beef Stir Fry', description: 'Beef strips cooked in vegetables and soy sauce', price: 35000, category: 'Beef Dishes' },
  { id: 'bf3', name: 'Pepper Steak', description: 'Juicy tender fillet steak grilled to your preference served in pepper sauce', price: 30000, category: 'Beef Dishes', popular: true },
  { id: 'bf4', name: 'Beef with Broccoli', description: 'Boneless beef cut in cubes cooked with broccoli and sauce', price: 35000, category: 'Beef Dishes' },
  { id: 'bf5', name: 'Beefy Bliss', description: 'A creamy sauce of beef chunks, mushrooms, peppers & onions. Served with avocado, kachumbal, and gravy', price: 35000, category: 'Beef Dishes' },
  { id: 'bf6', name: 'Beef Skewers', description: 'Marinated beef skewers grilled to perfection', price: 35000, category: 'Beef Dishes', popular: true },
  { id: 'bf7', name: 'Beef Pilau', description: 'Aromatic spiced rice served with tender beef cubes', price: 25000, category: 'Beef Dishes' },
  { id: 'bf8', name: 'Wednesday Burger Promo', description: 'Buy 1 Get 1 Free! Delicious burger. Comes with chips and drinks.', price: 32000, category: 'Beef Dishes', isPromo: true, promoLabel: 'EVERY WEDNESDAY' },
];

const goatMenu: MenuItem[] = [
  { id: 'g1', name: 'Grilled Goat Meat', description: 'Marinated and oven-grilled, glazed in honey sauce with vegetables. Served with chips, kachumbal & gravy', price: 38000, category: 'Goat Dishes', popular: true },
  { id: 'g2', name: 'Pan Fried Goat', description: 'Goat cubes pan-fried with choice of cucumber or vegetables. Served with chips & gravy', price: 35000, category: 'Goat Dishes' },
  { id: 'g3', name: 'Boiled Goat Meat', description: 'Boiled to perfection with vegetables and greens. Served with rice, posho, or mashed potatoes and gravy', price: 35000, category: 'Goat Dishes' },
  { id: 'g4', name: 'Goat Brochette', description: 'Marinated and grilled goat skewers served with chips, mayo & kachumbal', price: 35000, category: 'Goat Dishes', popular: true },
  { id: 'g5', name: 'Goat Biriyani', description: 'Goat meat marinated & cooked with spiced basmati rice. Served with kachumbal & yogurt sauce', price: 35000, category: 'Goat Dishes' },
];

const localMenu: MenuItem[] = [
  { id: 'loc1', name: 'Goat Stew', description: 'Served with rice, posho, matooke, greens & a drink (tea, coffee, or soda)', price: 25000, category: 'Local Food', popular: true },
  { id: 'loc2', name: 'Chicken Stew', description: 'Served with choice of rice, posho, matooke & greens, plus a drink', price: 30000, category: 'Local Food', popular: true },
  { id: 'loc3', name: 'Beef Stew', description: 'All local foods served with rice, posho, matooke & greens and a drink', price: 25000, category: 'Local Food' },
  { id: 'loc4', name: 'Beans or Peas', description: 'Traditional sides, served with a drink if ordered as a combo', price: 20000, category: 'Local Food' },
  { id: 'loc5', name: 'Chicken Pilau', description: 'Aromatic spiced rice with tender chicken, served with chips or drink', price: 30000, category: 'Local Food', popular: true },
  { id: 'loc6', name: 'Goat Pilau', description: 'Aromatic spiced rice with tender goat, served with chips or drink', price: 28000, category: 'Local Food' },
  { id: 'loc7', name: 'Beef Pilau', description: 'Aromatic spiced rice with tender beef, served with chips or drink', price: 25000, category: 'Local Food' },
];

const pizzaMenu: MenuItem[] = [
  { id: 'pz1', name: 'Special Festival Pizza — Large', description: 'Chunks of chicken, minced meat, sausages, onions & green pepper topped with cheese', price: 42000, category: 'Pizzas', popular: true },
  { id: 'pz2', name: 'Special Festival Pizza — Medium', description: 'Chunks of chicken, minced meat, sausages, onions & green pepper topped with cheese', price: 30000, category: 'Pizzas' },
  { id: 'pz3', name: 'Special Festival Pizza — Small', description: 'Chunks of chicken, minced meat, sausages, onions & green pepper topped with cheese', price: 22000, category: 'Pizzas' },
];

const curryMenu: MenuItem[] = [
  { id: 'cu1', name: 'Vegetable Curry', description: 'Assorted seasoned vegetables cooked in a mild creamy sauce. Served with rice, chapati, or posho', price: 30000, category: 'Curries & Soups' },
  { id: 'cu2', name: 'Chicken Curry', description: 'Tender chicken cooked in rich curry sauce. Served with rice, chapati, or posho', price: 35000, category: 'Curries & Soups', popular: true },
  { id: 'cu3', name: 'Beef Curry', description: 'Tender beef cooked in rich curry sauce. Served with rice, chapati, or posho', price: 35000, category: 'Curries & Soups' },
  { id: 'cu4', name: 'Carrot & Ginger Soup', description: 'Served with choice of bread or croutons', price: 15000, category: 'Curries & Soups' },
  { id: 'cu5', name: 'Tomato Soup', description: 'Choice of creamy or clear soup. Served with bread or croutons', price: 10000, category: 'Curries & Soups' },
  { id: 'cu6', name: 'Vegetable Soup', description: 'Served with choice of bread or croutons', price: 15000, category: 'Curries & Soups' },
];

const quesadillaMenu: MenuItem[] = [
  { id: 'q1', name: 'Chicken Quesadilla', description: 'Marinated chicken with grilled vegetables & mozzarella. Served with guacamole, salsa & chips', price: 30000, category: 'Quesadillas', popular: true },
  { id: 'q2', name: 'Beef Quesadilla', description: 'Marinated beef with vegetables & mozzarella. Served with guacamole, salsa, and chips', price: 30000, category: 'Quesadillas' },
];

const burgerMenu: MenuItem[] = [
  { id: 'bu0', name: 'Wednesday Burger Promo', description: 'Buy 1 Get 1 Free! Delicious burger with chips and drinks — every Wednesday!', price: 32000, category: 'Burgers', isPromo: true, promoLabel: 'EVERY WEDNESDAY', popular: true },
  { id: 'bu1', name: 'Chicken Burger, Single', description: 'Served with chips and a drink', price: 32000, category: 'Burgers', popular: true },
  { id: 'bu2', name: 'Chicken Burger, Double', description: 'Double chicken patty served with chips and a drink', price: 35000, category: 'Burgers' },
  { id: 'bu3', name: 'Beef Burger, Double', description: 'Double beef patty served with chips and a drink', price: 35000, category: 'Burgers', popular: true },
  { id: 'bu4', name: 'Vegan Burger', description: 'Plant-based patty served with chips and a drink', price: 32000, category: 'Burgers' },
];

const lunchDinnerMenu: MenuItem[] = [
  { id: 'ld1', name: 'Beef Steak Supreme', description: 'Juicy tender beef fillet grilled to perfection served in pepper sauce', price: 35000, category: 'Lunch & Dinner', popular: true },
  { id: 'ld2', name: 'Beef Stir Fry', description: 'Beef strips cooked in vegetables and soy sauce', price: 35000, category: 'Lunch & Dinner' },
  { id: 'ld3', name: 'Pepper Steak', description: 'Juicy tender fillet steak grilled to your preference served in pepper sauce', price: 30000, category: 'Lunch & Dinner' },
  { id: 'ld4', name: 'Beefy Bliss', description: 'Creamy sauce of beef chunks, mushrooms, peppers & onions. Served with avocado and gravy', price: 35000, category: 'Lunch & Dinner' },
  { id: 'ld5', name: 'All Time Coffee Life Platter', description: 'Sausages, goat meat, chicken skewer, fish fillet, broccoli, carrot, peppers. Served with rice, chips, and a soft drink', price: 85000, category: 'Lunch & Dinner', popular: true },
  { id: 'ld6', name: 'Whole Chicken', description: 'Whole oven-grilled chicken marinated to perfection. Served with chips or potato wedges', price: 65000, category: 'Lunch & Dinner' },
  { id: 'ld7', name: 'Chicken/Goat Biryani', description: 'Aromatic spiced rice served with chicken or goat, plus salad or chips', price: 35000, category: 'Lunch & Dinner', popular: true },
];

const beveragesMenu: MenuItem[] = [
  { id: 'bv1', name: 'House Coffee, Single', description: 'Served black or with milk and sugar', price: 9000, category: 'Beverages', popular: true },
  { id: 'bv2', name: 'House Coffee, Double', description: 'Served black or with milk and sugar', price: 10000, category: 'Beverages' },
  { id: 'bv3', name: 'Espresso, Single', description: 'Strong, rich, and served in a small cup', price: 6000, category: 'Beverages' },
  { id: 'bv4', name: 'Espresso, Double', description: 'Double shot for a stronger coffee experience', price: 7000, category: 'Beverages' },
  { id: 'bv5', name: 'Americano, Single', description: 'Espresso with hot water, served black or with milk', price: 8000, category: 'Beverages' },
  { id: 'bv6', name: 'Americano, Double', description: 'Double shot espresso with hot water', price: 9000, category: 'Beverages' },
  { id: 'bv7', name: 'Latte, Single', description: 'Espresso with steamed milk and a light layer of foam', price: 9000, category: 'Beverages', popular: true },
  { id: 'bv8', name: 'Latte, Double', description: 'Double espresso with steamed milk and foam', price: 10000, category: 'Beverages' },
  { id: 'bv9', name: 'Cappuccino', description: 'Espresso with steamed milk and thick foam', price: 9000, category: 'Beverages', popular: true },
  { id: 'bv10', name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: 10000, category: 'Beverages', popular: true },
  { id: 'bv11', name: 'Vanilla Latte', description: 'Latte with a touch of vanilla syrup, served hot', price: 10000, category: 'Beverages' },
  { id: 'bv12', name: 'White Chocolate', description: 'Rich white chocolate drink with steamed milk', price: 10000, category: 'Beverages' },
  { id: 'bv13', name: 'African Tea', description: 'Traditional African tea, served hot with optional sugar', price: 10000, category: 'Beverages' },
  { id: 'bv14', name: 'Hot Chocolate', description: 'Rich chocolate drink with steamed milk', price: 10000, category: 'Beverages', popular: true },
  { id: 'bv15', name: 'Iced Mocha', description: 'Chilled espresso with chocolate and ice, served cold', price: 13000, category: 'Beverages' },
  { id: 'bv16', name: 'Regular Juice', description: 'Blend of mango, watermelon, passion fruit, or pineapple', price: 9000, category: 'Juices & Smoothies' },
  { id: 'bv17', name: 'Apple Juice', description: 'Freshly pressed apple juice, served chilled', price: 13000, category: 'Juices & Smoothies' },
  { id: 'bv18', name: 'Banana Caramel Smoothie', description: 'Blended banana with caramel and milk, served cold', price: 16000, category: 'Juices & Smoothies', popular: true },
  { id: 'bv19', name: 'Mango Smoothie', description: 'Fresh mango blended with milk, served chilled', price: 15000, category: 'Juices & Smoothies', popular: true },
  { id: 'bv20', name: 'Soda', description: 'Chilled carbonated soft drink', price: 3000, category: 'Soft Drinks' },
  { id: 'bv21', name: 'Water', description: 'Bottled drinking water', price: 3000, category: 'Soft Drinks' },
];

// Branch-specific menus (some items differ per branch)
export const branchMenus: Record<string, MenuItem[]> = {
  'jinja-highway': [
    ...pastriesMenu,
    ...lightBitesMenu,
    ...breakfastMenu,
    ...beefMenu,
    ...goatMenu,
    ...quesadillaMenu,
    ...localMenu,
    ...pizzaMenu,
    ...curryMenu,
    ...burgerMenu,
    ...lunchDinnerMenu,
    ...beveragesMenu,
  ],
  'jinja-lakeview': [
    ...pastriesMenu,
    ...lightBitesMenu,
    ...breakfastMenu,
    ...beefMenu,
    ...goatMenu,
    ...localMenu,
    ...burgerMenu,
    ...lunchDinnerMenu,
    ...beveragesMenu,
  ],
  'kampala': [
    ...pastriesMenu,
    ...lightBitesMenu,
    ...breakfastMenu,
    ...beefMenu,
    ...goatMenu,
    ...quesadillaMenu,
    ...localMenu,
    ...pizzaMenu,
    ...curryMenu,
    ...burgerMenu,
    ...lunchDinnerMenu,
    ...beveragesMenu,
  ],
};

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

export function formatUGX(amount: number): string {
  return amount.toLocaleString() + ' UGX';
}
