import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';
import iconClose from '@icons/icon_close.png'
const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContext);
	const handleRemove = product => {
		removeFromCart(product);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product[0].images}alt={product[0].title} />
			</figure>
			<p>{product[0].title}</p>
			<p>${product[0].price}</p>
			<img src={iconClose} alt="close" 
			onClick={() => handleRemove(product)}
			/>
		</div>
	);
}

export default OrderItem;
