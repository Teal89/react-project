import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './views.css';
import Input from '../components/Input';
import CardSmall from '../components/CardSmall';

class Home extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col sm={12}>
            <Input home />
          </Col>
        </Row>
        <Row className="card-row">
          <Col sm={4}>
            <CardSmall
              title="Best practices"
              list={['transactional emails', 'marketing emails']}
            />
          </Col>
          <Col sm={4}>
            <CardSmall
              title="Tools"
              list={['Troubleshooting tools', 'Postman API service']}
            />
          </Col>
          <Col sm={4}>
            <CardSmall
              title="Error codes"
              list={['What do they mean?', 'How do they work?']}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
