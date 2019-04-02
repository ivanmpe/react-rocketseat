import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }
    //Executa ao carregar a view
    componentDidMount() {
        this.loadProducts();
    }

    //Eurofunction
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)
        const { docs, ...productInfo } = response.data

        console.log(response.data.docs)
        this.setState({ products: docs, productInfo, page })
    };

    nextPage = () => {
        const { page, productInfo } = this.state

        if (page === productInfo.page) {
            return
        } else {
            const pageNumber = page + 1;
            this.loadProducts(pageNumber);
        }

    }

    prevPage = () => {
        const { page } = this.state

        if ((page === 1)) {
            return
        } else {
            const pageNumber = page - 1;
            this.loadProducts(pageNumber);
        }

    }



    render() {
        const { products, page, productInfo } = this.state;
        // return <p> Contagem de produtos: {this.state.products.length} </p>;
        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong> {product.title} </strong>
                        <p> {product.description} </p>
                        <Link to={`/products/${product._id}`}> Acessar </Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}> Anterior </button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}> Próximo </button>
                </div>
            </div>
        );
    }
}