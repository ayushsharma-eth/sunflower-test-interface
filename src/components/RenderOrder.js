import { formatEther } from '@ethersproject/units';
import { useReturnProductOrders } from '../hooks/useOrders'

const RenderOrder = (props) => {

    const orders = useReturnProductOrders(props.market_address, props.productId);

    const accept = (e, order) => {
        e.preventDefault();
        console.log(order);
    }
    return (
        <div>
            {orders && orders.map((e, i) => {
                return (
                    orders[i] && orders[i].map((r, o) => {
                        return(
                            <div className="boxed">
                                <ul>Status: {orders[i] && orders[i][o].accepted ? "Active" : "Pending"}</ul>
                                <ul>ProductId: {orders[i] && orders[i][o].product.toString()}</ul>
                                <ul>Customer: {orders[i] && orders[i][o].customer.toString()}</ul>
                                <ul>Arbitrator: {orders[i] && orders[i][o].arbitrator.toString() === "0x0000000000000000000000000000000000000000" ? "None" : orders[i][o].arbitrator.toString()}</ul>
                                <ul>Address: {orders[i] && orders[i][o].encryptedAddress}</ul>
                                <ul>Quantity: {orders[i] && orders[i][o].quantity}</ul>
                                <ul>Value: {orders[i] && formatEther(orders[i][o].escrowAmount)} ETH</ul>
                                {orders[i][o].accepted ? null : <ul><button onClick={(e) => {
                                    const order = o;
                                    return accept(e, order)
                                }}>Accept</button></ul>}
                            </div>
                        )
                    })
                )
            })}
        </div>
    )
}

export default RenderOrder
