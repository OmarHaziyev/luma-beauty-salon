export type ServiceCategory = "Saç" | "Dırnaq" | "Makiyaj" | "Dəriyə qulluq";

export type Service = {
  id: number;
  name: string;
  category: ServiceCategory;
  description: string;
  price: number;
  duration: string;
  image: string;
};

export const services: Service[] = [
  {
    id: 1,
    name: "Qadın saç kəsimi",
    category: "Saç",
    description: "Üz cizgilərinizə uyğun fərdi saç kəsimi.",
    price: 35,
    duration: "45 dəq.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900",
  },
  {
    id: 2,
    name: "Saç düzümü",
    category: "Saç",
    description: "Xüsusi günləriniz üçün zərif və peşəkar düzüm.",
    price: 50,
    duration: "60 dəq.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900",
  },
  {
    id: 3,
    name: "Klassik manikür",
    category: "Dırnaq",
    description: "Səliqəli forma və baxımlı dırnaqlar.",
    price: 25,
    duration: "40 dəq.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900",
  },
  {
    id: 4,
    name: "Gel manikür",
    category: "Dırnaq",
    description: "Uzunmüddətli və zərif rəng örtüyü.",
    price: 40,
    duration: "75 dəq.",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900",
  },
  {
    id: 5,
    name: "Gündəlik makiyaj",
    category: "Makiyaj",
    description: "Təbii görünüşünüzü ön plana çıxaran makiyaj.",
    price: 45,
    duration: "50 dəq.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=900",
  },
  {
    id: 6,
    name: "Axşam makiyajı",
    category: "Makiyaj",
    description: "Xüsusi tədbirlər üçün peşəkar makiyaj.",
    price: 70,
    duration: "75 dəq.",
    image:
      "https://images.unsplash.com/photo-1526045478516-99145907023c?w=900",
  },
  {
    id: 7,
    name: "Üz baxımı",
    category: "Dəriyə qulluq",
    description: "Dərinizə uyğun təmizləmə və nəmləndirmə.",
    price: 55,
    duration: "60 dəq.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900",
  },
  {
    id: 8,
    name: "Nəmləndirici qulluq",
    category: "Dəriyə qulluq",
    description: "Dəriyə qulluq üçün rahatladıcı prosedur.",
    price: 65,
    duration: "60 dəq.",
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=900",
  },
];