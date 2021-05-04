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
            .get('http://localhost:8000/Iptv')
            .then((res) => {
                setLoading(false);
                console.log(res);
                setIpTv(res.data);
                // console.log(res.data);
            })
            .catch((err) => console.log(err));
    },[])
    if (loading) {
        return <Loading />;
    }

    return (
        <section >
            <Container>
                <div >
                    <h3>Ip 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬</h3>
                </div>
                <Row>
                    {ipTvs.map((ipTv) => (
                        <Col lg={4} md={6} key={ipTv._id}>
                            <IpService {...ipTv} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default IptvData;