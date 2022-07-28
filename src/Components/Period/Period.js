import { useState } from 'react'
import { Card, CardBody, CardHeader, Button } from 'reactstrap';
import './period-styles.css';


const Period = () => {
    const [period, setPeriod] = useState(1);

    function changePeriod(e) {
        if (period === 0) {
            setPeriod(1)
        } else {
        setPeriod(period + Number(e.target.value))
        }
    }
    return (
        <>
        <Card className='period-display'>
            <CardHeader>Period</CardHeader>
            <CardBody className='period-number'>{period}</CardBody>
        </Card>
        <Button onClick={changePeriod} value='1'>Period+</Button>
        <Button onClick={changePeriod} value='-1'>Period-</Button>
            
        </>
    )
}

export default Period