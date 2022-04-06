const addressReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_ADDRESS":
            return { ...state, addressList: [...state.addressList, payload] }
        case "REMOVE_ADDRESS":
            return {
                ...state,
                selectedAddressId: state.selectedAddressId !== payload ? state.selectedAddressId : "", addressList: state.addressList.filter(({ _id }) => _id !== payload)
            }
        case "UPDATE_ADDRESS":
            return payload?.isEdit ?
                {
                    ...state,
                    addressList: state.addressList.map((address) => address._id === payload.addressList._id ? { ...address, ...payload.addressList } : address),
                } : {
                    ...state,
                    addressList: [payload, ...state.addressList]
                }
        case "EDIT_SELECTED_ADDRESS":
            return { ...state, selectedAddressId: payload }
        case "UPDATE_COUPON":
            return { ...state, coupon: payload }
        case "DELETE_COUPON":
            return { ...state, coupon: "" }
        default:
            return state;
    }
}
export { addressReducer }