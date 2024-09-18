import React, { Component } from 'react'

export class Shop extends Component {
  constructor(props) {
    super(props)

    axios.get(baseUrl).then((res) => {
      this.setState({ users: res.data.data })
    })

    this.state = {
      orders: [],

      currentItems: [],

      fullItem: false,

      fullItems: {},

      items: [
        {
          id: 1,
          title: "Grey Chair",
          img: "chair-grey.jpg",
          desc: "The gray chairs in this range are available in a variety of styles, designs, and shades. From gray chairs with wooden frames to ones with armrests.",
          category: "chairs",
          price: "49.99"
        },
        {
          id: 2,
          title: "Modern Sofa",
          img: "sofa-modern.jpg",
          desc: "A comfortable modern sofa with a sleek design, perfect for contemporary living spaces. Available in various colors and fabrics.",
          category: "sofas",
          price: "299.99"
        },
        {
          id: 3,
          title: "Dining Table",
          img: "table-wooden.jpg",
          desc: "This elegant wooden dining table offers a timeless design and is built to last. Perfect for both formal dining rooms and casual kitchens.",
          category: "tables",
          price: "199.99"
        },
        {
          id: 4,
          title: "Stylish Lamp",
          img: "lamp-stylish.jpg",
          desc: "Add a touch of elegance to your room with this stylish lamp. Features a modern design and provides warm ambient lighting.",
          category: "lighting",
          price: "39.99"
        },
        {
          id: 5,
          title: "Office Desk",
          img: "desk-office.jpg",
          desc: "A sturdy office desk with ample workspace, designed for productivity and comfort. Comes with built-in storage drawers.",
          category: "tables",
          price: "149.99"
        }
      ]

    }

    this.state.currentItems = this.state.items
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }
  render() {
    return (
      <div>Shop</div>
    )
  }
}

export default Shop