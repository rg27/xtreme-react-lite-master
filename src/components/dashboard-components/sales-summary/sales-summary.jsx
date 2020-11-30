import React from "react";
import ReactPlayer from 'react-player'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row
} from 'reactstrap';
import { Line } from 'react-chartjs-2';

//Line chart
let lineData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [{
        label: 'Income',
        borderWidth: 1,
        backgroundColor: 'rgba(94,114,228,.1)',
        borderColor: 'rgb(94,114,228)',
        pointBorderColor: 'rgb(94,114,228)',
        pointBackgroundColor: 'rgb(94,114,228)',
        data: [0, 15, 6, 11, 25, 9, 18, 24]
    }, {
        label: 'Outcome',
        borderWidth: 1,
        backgroundColor: 'rgba(79,195,247,.1)',
        borderColor: 'rgb(79,195,247)',
        pointBorderColor: 'rgb(79,195,247)',
        pointBackgroundColor: 'rgb(79,195,247)',
        data: [0, 8, 11, 22, 8, 10, 5, 21]
    }]
};

const SalesSummary = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Live Streaming 1</CardTitle>
                        <CardSubtitle>Live from Cbloc,IT Park</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex align-items-center">
                    </div>
                </div>
                <Row>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" >
                            <ReactPlayer playing="true"  url='https://www.youtube.com/watch?v=NMre6IAAAiU' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>

            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Live Streaming 2</CardTitle>
                        <CardSubtitle>Live from Radisson Event Centre</CardSubtitle>
                    </div>
                    <div className="ml-auto d-flex align-items-center">
                    </div>
                </div>
                <Row>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" >
                            <ReactPlayer playing="true"  url='https://www.youtube.com/watch?v=NMre6IAAAiU' />
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default SalesSummary;
