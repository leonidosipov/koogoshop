interface CharacteristicProps {
  id: string;
  value: string;
}
interface PriceProps {
  price: string;
  discount: string;
}

export interface ProductDTO {
  id: string;
  name: string;
  characteristics: CharacteristicProps[];
  price: PriceProps;
  img: string;
}
