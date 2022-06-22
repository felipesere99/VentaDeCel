function ItemDetail({description, pictureUrl, price}) {
    return(<>
        <div>
            <image pictureUrl={pictureUrl} />
            <p>{description}</p>
            <p>{price}</p>
        </div>
    </>)
}

export default ItemDetail;