import React from 'react'
import {Container,Row, Col, InputGroup, FormControl} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/fontawesome-free-solid'
import TextButton from './TextButton'
export default props =>
    <div className='div-todo-form'>
        <Container>
            <Row className="justify-content-md-center">
                <Col xs='12' sm='9' md='10'>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Não se esqueça de..."
                            aria-label="Não se esqueça de..."
                            aria-describedby="Não se esqueça de..."
                            onChange={props.handleChange}
                            value={props.description}/>
                        <TextButton 
                            variant='secondary' 
                            text={<FontAwesomeIcon icon={faPlus}/>}
                            onClick={props.handleAdd}/>
                    </InputGroup>
                </Col>
            </Row> 
        </Container>
    </div>
