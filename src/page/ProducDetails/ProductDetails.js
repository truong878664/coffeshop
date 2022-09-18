import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

import style from './ProductDetails.module.scss';
import productDatas from '~/data/product.json';
import images from '~/asscet/images';
import ProductMini from './component/ProductMini';
import { useShopingCart } from '~/Context/CartOderProvider';
import { useState } from 'react';

const cx = classNames.bind(style);

function ProductDetails() {
    const { productid } = useParams();

    //add product to cart
    const { setCartItemQuantity } = useShopingCart();

    const [size, setSize] = useState('');
    const handleSetSize = (e) => {
        setSize(e.target.value);
    };

    const handleSetItemQuantity = (id, size) => {
        if (size) {
            setCartItemQuantity(currentItem.id, size);
        } else {
            alert('Vui lòng chọn size bạn muốn! ');
        }
    };

    // eslint-disable-next-line eqeqeq
    const currentItem = productDatas.find((item) => item.id == productid);
    const relatedProductAll = productDatas.filter((data) => data.type === currentItem.type);
    // const relatedProduct = relatedProductAll.splice(relatedProductAll.length - 3, relatedProductAll.length);
    const getRelatedProduct = () => {
        const relatedProduct = [];
        for (let i = 1; i <= 3; i++) {
            const numberRandom = Math.floor(Math.random() * relatedProductAll.length);
            relatedProduct.push(relatedProductAll[numberRandom]);
        }
        return relatedProduct;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('information')}>
                <h3 className={cx('name')}>{currentItem.name}</h3>
                <div className={cx('price')}>
                    <p>Giá: </p>
                    <div>{(currentItem.price * 1000).toLocaleString()} đ</div>
                </div>
                <p className={cx('describe')}>{currentItem.describe}</p>
                <div className={cx('action')}>
                    <form className={cx('size')}>
                        <input type="radio" id="s" name="size" value={'s'} onChange={handleSetSize} hidden />
                        <label htmlFor="s">S</label>
                        <input type="radio" id="m" name="size" value={'m'} onChange={handleSetSize} hidden />
                        <label htmlFor="m">M</label>
                        <input type="radio" id="l" name="size" value={'l'} onChange={handleSetSize} hidden />
                        <label htmlFor="l">L</label>
                    </form>
                    <button
                        className={cx('add')}
                        onClick={() => {
                            handleSetItemQuantity(currentItem.id, size);
                        }}
                    >
                        ADD TO CART +
                    </button>
                </div>
            </div>
            <div className={cx('image-product')}>
                <div className={cx('circle')} style={{ backgroundColor: currentItem.color }}></div>
                <div className={cx('layer')} style={{ backgroundImage: `url("${images.coffeeNut}")` }}></div>
                <img src={currentItem?.src} alt="avatar product" className={cx('image')} />
            </div>
            <div className={cx('related-product')}>
                {getRelatedProduct().map((data, index) => (
                    <ProductMini key={index} data={data} />
                ))}

                <div className={cx('layerLogo')} style={{ backgroundImage: `url("${images.logoStb}")` }}></div>
            </div>
        </div>
    );
}

export default ProductDetails;
