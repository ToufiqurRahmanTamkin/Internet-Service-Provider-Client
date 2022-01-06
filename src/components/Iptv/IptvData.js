import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Loading from '../Common/Loading';
import IpService from './IpService';

const IptvData = () => {

    const [ipTvs, setIpTv] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true);
        axios
            .get('https://isp-server0.herokuapp.com/iptv')
            .then((res) => {
                setLoading(false);
                setIpTv(res.data);
            })
            .catch((err) => console.log(err));
    },[])
    if (loading) {
        return <Loading />;
    }

    return (
        <section className="services py-5">
            <Container>
                <div className="title mb-5">
                    <h3 className="mt-5">IP 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬</h3>
                </div>
                <Row>
                    {ipTvs.map((ipTv) => (
                        <Col lg={3} md={6} key={ipTv._id}>
                            <IpService {...ipTv} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default IptvData;