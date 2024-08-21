import React, { Component } from 'react'


export class FullItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <div className="full-item">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src={"./img/" + item.img} alt={item.title} onClick={() => this.props.onShowItem(item)} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                                <h2 onClick={() => this.props.onShowItem(item)} data-bs-toggle="modal" data-bs-target="#exampleModal">{item.title} </h2>
                                <p>{item.desc}</p>
                                <b>{item.price}$</b>
                                <div className="add-to-cart" onClick={() => this.props.onAddToOrder(item)}>+</div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FullItem