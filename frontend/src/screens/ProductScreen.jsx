import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import { listProductDetails } from '../actions/productActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Rating from '../components/Rating'


function ProductScreen() {

    const [qty, setQty] = useState(1)
    
    const dispatch = useDispatch()   
    
    const { id } = useParams();

    const navigate = useNavigate();
    
    const productDetails = useSelector((state) => state.productDetails)
    
    const { loading, error, product } = productDetails
    
    useEffect(() => {
        
        dispatch(listProductDetails(id))
        
    }, [dispatch, id])

    const addToCartHandler =() => {

        navigate(`/cart/${id}?qty=${qty}`)
    
    }

    return (
        <>
            <button className='btn btn-light my-3' ><Link to={`/`}>Go Back</Link></button>
                {loading ? <Loader /> : error ? <Message variant='danger'> {error} </Message> : (

                    <Row>
                    <Col md={6}> <Image src={product.image} alt={product.name} fluid></Image> </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3> {product.name} </h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: $ {product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: $ {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                        Price:                                     
                                        </Col>
                                        <Col>
                                            <strong> {product.price} </strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                        Status:                                     
                                        </Col>
                                        <Col>
                                            <strong> {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'} </strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                 {product.countInStock > 0 && (

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                                <Form.Control className='form-select' as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                   {[...Array(product.countInStock).keys()].map((x) => (
                                                        
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                        
                                                    ))}
                                                </Form.Control>                                            
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )} 

                                <ListGroup.Item>
                                    <Button className='btn-block' onClick={addToCartHandler} type='button' disabled={product.countInStock === 0} >
                                        Add to Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    </Row>

                )}
            
        </>
    )
}

export default ProductScreen
