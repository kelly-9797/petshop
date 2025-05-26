interface IProduct {
  id: string;
  name: string;
  image: string;
  stock: number;
  price: number;
  category: "all" | "food" | "accessory";
}

export default IProduct;
