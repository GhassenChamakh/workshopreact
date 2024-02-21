import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function Event(props) {
    const [e, setEvent] = useState(props.e);
    const bookEvent = () => {
        setEvent((e) => {
            if (e.nbTickets > 0) {
                var newProp = { ...e };
                newProp.nbTickets--;
                newProp.nbParticipants++;
                return newProp;
            }
            props.showAlert();
        });
    };
    const likeEvent = () => {
        setEvent((e) => {
            var newProp = { ...e };
            newProp.like = !e.like;
            return newProp;
        });
    };
    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={e.nbTickets == 0 ? `images/sold_out.png` : `images/${e.img}`} />
            <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>Price: {e.price}</Card.Text>
                <Card.Text>Number of tickets: {e.nbTickets}</Card.Text>
                <Card.Text>Number of participants: {e.nbParticipants}</Card.Text>
                <Button variant="primary" disabled={e.nbTickets == 0} onClick={bookEvent}>Book an event</Button>
                <Button style={{marginLeft:"5px"}} variant={e.like ? "danger" : "success"} onClick={likeEvent}>{e.like ? "Dislike" : "Like"}</Button>
            </Card.Body>
        </Card>
    </>
}