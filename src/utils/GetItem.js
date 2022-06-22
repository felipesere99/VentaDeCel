
import items from "./Items";

function GetItem(props, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items.find(items => items.id === props.id))
        }, time)
    })
}

export default GetItem