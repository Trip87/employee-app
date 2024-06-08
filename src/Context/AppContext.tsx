export {};

// // krok 1 - tworzenie typu kontekstu

// import { createContext, useEffect, useState } from "react";

// // wiemy:
// // dodania i usuwanie produktów
// // obliczanie calkowitej wartosci zamowienia (jakas funkcja która zwraca nam sume cen produktów)
// // zmienna przechowujaca liste produktów (pewnie tablica typu Product)

// // nasze API do zadania - https://dummyjson.com/products

// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };

// type EmployeeContextType = {
//   products: Product[];
//   add: (product: Product) => void;
//   remove: (id: number) => void;
//   getSum: () => number;
// };

// // krok 2 - tworzymy context na bazie typu
// // {} as ProductContextType - obietnica, że obiekt pusty jest typu ProductContextType
// // aby móc pobrać context w komponentach musimy użyc "export"

// export const ProductContext = createContext<ProductContextType>(
//   {} as ProductContextType,
// );

// // krok 3 - tworzenie naszego providera z propsami

// type Props = {
//   children: JSX.Element | JSX.Element[];
// };

// export const ProductContextProvider = ({ children }: Props) => {
//   const [products, setProducts] = useState<Product[]>([]);

//   const add = (product: Product) => {
//     setProducts((prev) => [...prev, product]);
//   };

//   const remove = (id: number) => {
//     setProducts((prev) => prev.filter((product) => product.id !== id));
//   };

//   const getSum = () => {
//     // I opcja
//     let sum = 0;

//     products.forEach(({ price }) => (sum += price));
//     // iteracja I - acc = 0, product.price = 10
//     // po I iteracji mamy wynik => acc + product.price = 10 (załózmy) =>
//     // iteracja I - acc = 10, product.price
//     // -- II opcja
//     return products.reduce((acc, product) => acc + product.price, 0);
//   };

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("https://dummyjson.com/products");

//       if (!res.ok) throw new Error("Cannot fetch products");

//       const { products } = await res.json();

//       if (products) setProducts(products);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   // musimy jakos pobrac liste elementów
//   // useEffect + jakas funkcja asynchroniczna ktora pobiera dane

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <ProductContext.Provider
//       value={{
//         products,
//         add,
//         remove,
//         getSum,
//       }}
//     >
//       {children}
//     </ProductContext.Provider>
//   );
// };

// // krok 4 - należy owrappować naszą aplikacje <App /> w pliku index.tsx

// // krok 5 - jakoś odczytać nasz stan z poziomu komponentu za pomoca useContext(naszContext)
