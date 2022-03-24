import axios from "axios"
import { toast } from "react-toastify";

const getRequestDataFromServer = async (url, dispatch) => {
    try {
        const { data: { products } } = await axios.get(url)
        dispatch({ type: "FETCH_PRODUCTS_DATA", payload: products })
    } catch {
        console.log(error);
    }
}
const getCartItems = async (token, dispatch) => {
    console.log(token);
    try {
        const res = await axios.get("/api/user/cart", {
            headers: {
                authorization: token
            }
        })
        dispatch({ type: "FETCH_CART_DATA", payload: res.data.cart })
    } catch (error) {
        console.log(error);
    }
}
const updateCart = async (data, token) => {
    try {
        console.log("work here");
        const res = await axios.post("/api/user/cart", {
            product: {
                ...data
            }
        },
            {
                headers: {
                    authorization: token
                }
            })
        toast.success(<p>Item added in Cart.</p>)
        const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
        dataToUpdate.cart = [...res.data.cart]
        localStorage.setItem('userData', JSON.stringify(dataToUpdate))
    } catch {
        console.error(error);
        toast.error(<p>Failed to add Item in Cart.</p>)
    }
}
const deleteCart = async (data, token) => {
    try {
        const res = await axios.delete(`/api/user/cart/${data._id}`,
            {
                headers: {
                    authorization: token
                }
            })
        toast.info(<p>Item removed from Cart.</p>)
        const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
        dataToUpdate.cart = [...res.data.cart]
        localStorage.setItem('userData', JSON.stringify(dataToUpdate))
    } catch {
        console.error(error);
        toast.error(<p>Failed to remove item from Cart.</p>)
    }
}
const IncreaseCartQuantity = async (data, token) => {
    try {
        const res = await axios.post(`/api/user/cart/${data._id}`, {
            action: {
                type: "increment"
            }
        }, {
            headers: {
                authorization: token
            }
        })
        toast.success(<p>Cart Quantity increased.</p>)

        const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
        dataToUpdate.cart = [...res.data.cart]
        localStorage.setItem('userData', JSON.stringify(dataToUpdate))

    } catch (error) {
        console.log(error);
        toast.error(<p>Failed to increase Cart Quantity.</p>)
    }
}

const decreaseCartQuantity = async (data, token) => {
    try {
        const res = await axios.post(`/api/user/cart/${data._id}`, {
            action: {
                type: "decrement"
            }
        }, {
            headers: {
                authorization: token
            }
        })
        toast.success(<p>Cart Quantity decreased.</p>)
        const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
        dataToUpdate.cart = [...res.data.cart]
        localStorage.setItem('userData', JSON.stringify(dataToUpdate))
    } catch (error) {
        console.log(error);
        toast.error(<p>Failed to decrease Cart Quantity.</p>)
    }
}

const addItemInWishlist = async (data, token) => {
    console.log(data, "helper");
    try {
        const res = await axios.post("/api/user/wishlist", {
            product: {
                ...data
            }
        }
            ,
            {
                headers: {
                    authorization: token
                }
            })
        toast.success(<p>Item added in Wishlist.</p>)
        const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
        dataToUpdate.wishlist = [...res.data.wishlist]
        localStorage.setItem('userData', JSON.stringify(dataToUpdate))
    } catch {
        console.error(error);
        toast.error(<p>Failed to add item in wishlist.</p>)
    }
}
const removeItemFromWishlist = async (data, token) => {
    try {
        const res = await axios.delete(`/api/user/wishlist/${data._id}`,
            {
                headers: {
                    authorization: token
                }
            })
        toast.success(<p>Item removed from wishlist</p>)
        const dataToUpdate = JSON.parse(localStorage.getItem('userData'))
        dataToUpdate.wishlist = [...res.data.wishlist]
        localStorage.setItem('userData', JSON.stringify(dataToUpdate))
    } catch {
        console.error(error);
        toast.error(<p>Failed to remove item from wishlist.</p>)
    }
}
export { getRequestDataFromServer, getCartItems, updateCart, IncreaseCartQuantity, decreaseCartQuantity, deleteCart, addItemInWishlist, removeItemFromWishlist }