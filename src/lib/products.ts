// src/lib/products.ts

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  aiHint: string;
  href: string;
  category: 'PC' | 'iOS' | 'Android';
  product_group: string;
  priceSuffix?: string;
  badge?: string | null;
  buttonVariant?: "default" | "gradient";
  features?: string[];
};

export const pcProducts: Product[] = [
  {
    id: 2,
    name: "Vnhax Frozen Key",
    price: 5,
    imageUrl: "https://iili.io/KGC6E0X.jpg",
    aiHint: "abstract ice",
    href: "/products/vnhax-frozen-key",
    category: "PC",
    product_group: 'Vnhax PC'
  },
  {
    id: 6,
    name: "Redeye Frozen Key",
    price: 5,
    imageUrl: "https://iili.io/KGC6QqP.jpg",
    aiHint: "gaming character cinematic",
    href: "/products/redeye-frozen-key",
    category: "PC",
    product_group: 'Redeye – Bypass'
  },
  {
    id: 4,
    name: "Vnhax Week Key",
    price: 15,
    imageUrl: "https://iili.io/KGnf4yJ.jpg",
    aiHint: "abstract purple",
    href: "/products/vnhax-week-key",
    category: "PC",
    product_group: 'Vnhax PC'
  },
  {
    id: 1,
    name: "Vnhax Month Key",
    price: 30,
    imageUrl: "https://iili.io/KGC6VJs.jpg",
    aiHint: "abstract blue",
    href: "/products/vnhax-month-key",
    category: "PC",
    product_group: 'Vnhax PC'
  },
  {
    id: 3,
    name: "Vnhax Admin Key",
    price: 50,
    imageUrl: "https://iili.io/KGC6v19.jpg",
    aiHint: "abstract blue",
    href: "/products/vnhax-admin-key",
    category: "PC",
    product_group: 'Vnhax PC'
  },

  {
    id: 7,
    name: "Redeye Week Key",
    price: 15,
    imageUrl: "https://iili.io/KGC6bdg.jpg",
    aiHint: "abstract fire",
    href: "/products/redeye-week-key",
    category: "PC",
    product_group: 'Redeye – Bypass'
  },
  {
    id: 8,
    name: "Redeye Month Key",
    price: 30,
    imageUrl: "https://iili.io/KGC6trF.jpg",
    aiHint: "abstract red",
    href: "/products/redeye-month-key",
    category: "PC",
    product_group: 'Redeye – Bypass'
  },
  {
    id: 9,
    name: "Anubis Week Key",
    price: 20,
    imageUrl: "https://iili.io/KGCPF1t.jpg",
    aiHint: "abstract sand",
    href: "/products/anubis-week-key",
    category: "PC",
    product_group: 'Anubis – Bypass'
  },
  {
    id: 10,
    name: "Anubis Month Key",
    price: 40,
    imageUrl: "https://iili.io/KGCPnpf.jpg",
    aiHint: "abstract gold",
    href: "/products/anubis-month-key",
    category: "PC",
    product_group: 'Anubis – Bypass'
  },
];

export const iosProducts: Product[] = [
  {
    id: 14,
    name: "Vnhax iOS Frozen Key",
    price: 5,
    imageUrl: "https://iili.io/KGC6lsI.jpg",
    aiHint: "gaming character cinematic",
    href: "/products/vnhax-ios-frozen-key",
    category: "iOS",
    product_group: 'Vnhax iOS'
  },
  {
    id: 15,
    name: "Vnhax iOS Month Key",
    price: 30,
    imageUrl: "https://iili.io/KGC6hb4.jpg",
    aiHint: "gaming character cinematic",
    href: "/products/vnhax-ios-month-key",
    category: "iOS",
    product_group: 'Vnhax iOS'
  },
  {
    id: 19,
    name: "Vnhax iOS Week Key",
    price: 15,
    imageUrl: "https://iili.io/KGC6kq7.jpg",
    aiHint: "gaming character cinematic",
    href: "/products/vnhax-ios-week-key",
    category: "iOS" as const,
    product_group: "vnhax",
  },
  {
    id: 18,
    name: "Star iOS Frozen Key",
    price: 5,
    imageUrl: "https://iili.io/KGC6PzQ.jpg",
    aiHint: "gaming character cinematic",
    href: "/products/star-ios-frozen-key",
    category: "iOS",
    product_group: 'Star iOS'
  },
  {
    id: 19,
    name: "Star iOS Week Key",
    price: 15,
    imageUrl: "https://iili.io/KGC6g5b.jpg",
    aiHint: "gaming character cinematic",
    href: "/products/star-ios-week-key",
    category: "iOS",
    product_group: 'Star iOS'
  },
  {
    id: 20,
    name: "Star iOS Month Key",
    price: 30,
    imageUrl: "https://iili.io/KGC68ge.jpg",
    aiHint: "gaming character cinematic",
    href: "/products/star-ios-month-key",
    category: "iOS" as const,
    product_group: "star",
  },
  {
    id: 21,
    name: "Tornado iOS Week Key",
    price: 17,
    imageUrl: "https://iili.io/KGC67bR.jpg",
    aiHint: "gaming character cinematic",
    href: "/products/tornado-ios-week-key",
    category: "iOS",
    product_group: 'Tornado iOS'
  },
  {
    id: 22,
    name: "Tornado iOS Month Key",
    price: 30,
    imageUrl: "https://iili.io/KGC6NX2.jpg",
    aiHint: "gaming character cinematic",
    href: "/products/tornado-ios-month-key",
    category: "iOS",
    product_group: 'Tornado iOS'
  },
];

export const androidProducts: Product[] = [
    {
        id: 11,
        name: "Shield Android Day Key",
        price: 5,
        imageUrl: "https://iili.io/KGC6m7a.jpg",
        aiHint: "gaming character cinematic",
        href: "/products/shield-android-day-key",
        category: "Android",
        product_group: 'Shield Android'
    },
    {
        id: 12,
        name: "Shield Android Week Key",
        price: 15,
        imageUrl: "https://iili.io/KGC6rej.jpg",
        aiHint: "gaming character cinematic",
        href: "/products/shield-android-week-key",
        category: "Android",
        product_group: 'Shield Android'
    },
    {
        id: 13,
        name: "Shield Android Month Key",
        price: 35,
        imageUrl: "https://iili.io/KGC6ymv.jpg",
        aiHint: "gaming character cinematic",
        href: "/products/shield-android-month-key",
        category: "Android",
        product_group: 'Shield Android'
    },
    {
        id: 14,
        name: "Zolo Android Day Key",
        price: 10,
        imageUrl: "https://iili.io/KGoAgtt.jpg",
        aiHint: "gaming character cinematic",
        href: "/products/zolo-android-day-key",
        category: "Android",
        product_group: 'Zolo Android'
    },
    {
        id: 15,
        name: "Zolo Android Week Key",
        price: 15,
        imageUrl: "https://iili.io/KGoAPPs.jpg",
        aiHint: "gaming character cinematic",
        href: "/products/zolo-android-week-key",
        category: "Android",
        product_group: 'Zolo Android'
    },
    {
        id: 16,
        name: "Zolo Android Month Key",
        price: 35,
        imageUrl: "https://iili.io/KGoAsKG.jpg",
        aiHint: "gaming character cinematic",
        href: "/products/zolo-android-month-key",
        category: "Android",
        product_group: 'Zolo Android'
    },
    {
        id: 17,
        name: "Kernel Android Week Key",
        price: 15,
        imageUrl: "https://iili.io/KGCPdLN.jpg",
        aiHint: "gaming character cinematic",
        href: "/products/kernel-android-week-key",
        category: "Android",
        product_group: 'Kernel Android'
    },
    {
        id: 18,
        name: "Kernel Android Month Key",
        price: 35,
        imageUrl: "https://iili.io/KGCP3BI.jpg",
        aiHint: "gaming character cinematic",
        href: "/products/kernel-android-month-key",
        category: "Android",
        product_group: 'Kernel Android'
    }
];

export const allProducts: Product[] = [...pcProducts, ...iosProducts, ...androidProducts];
