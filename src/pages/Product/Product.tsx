import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../store";
import ProductActions from "../../store/actions/productActions";
import { useEffect } from "react";
import styled from "styled-components";
import Button from "../../common/Button/Button";

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Slider = styled.div`
  overflow: scroll;
  display: flex;
  border-radius: 5px;
  flex-direction: row;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  position: relative;
  width: 100%;
  height: 300px;
`;

interface SliderImageProps {
  img: string;
}

const SliderImage = styled.div<SliderImageProps>`
  display: flex;
  flex-shrink: 0;
  scroll-snap-align: center;
  flex-basis: 100%;
  margin: 0 2%;
  max-width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  width: 100%;
  background: url(${(props) => props.img}) center no-repeat;
  background-size: contain;

  height: auto;
`;

const PriceWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-around;
  background-color: #ebebeb;
  position: fixed;
  bottom: 70px;
  left: 0;
  align-items: center;
`;

const Price = styled.p`
  font-size: 20px;
`;
const Name = styled.p`
  font-size: 25px;
`;
const Description = styled.p`
  font-size: 15px;
`;

const Product = () => {
  const { productId }: any = useParams();
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.products);

  const getProductInfo = async () => {
    await dispatch(ProductActions.getProduct({ id: productId }));
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  //TODO Fix URLs to constants

  return (
    <Wrapper>
      <Slider>
        <SliderImage
          img={`http://192.168.2.56:8000/media/${selectedProduct.preview}`}
        />
        <SliderImage
          img={`http://192.168.2.56:8000/media/${selectedProduct.preview}`}
        />
        <SliderImage
          img={`http://192.168.2.56:8000/media/${selectedProduct.preview}`}
        />
      </Slider>

      <Name>{selectedProduct.name}</Name>
      <Description>{selectedProduct.description}</Description>
      <PriceWrapper>
        <Price>
          {selectedProduct.priceWithDiscount
            ? selectedProduct.priceWithDiscount
            : selectedProduct.price}
          &thinsp;₽
        </Price>
        <Button title="В корзину" />
      </PriceWrapper>
    </Wrapper>
  );
};

export default Product;
