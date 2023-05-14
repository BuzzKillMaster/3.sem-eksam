const navItemProps = {
    label: {
        type: String,
        required: false,
        default: ""
    },
    icon: {
        type: String,
        required: false,
        default: ""
    },
    route: {
        type: String,
        required: false,
        default: "/fake-route"
    },
    showLabel: {
        type: Boolean,
        required: false,
        default: true
    },
    disabled: {
        type: Boolean,
        required: false,
        default: false
    }
}

export default navItemProps