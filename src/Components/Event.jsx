import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../service/api';
import PropTypes from 'prop-types';
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



    // ...

    Event.propTypes = {
        // ...
        deleteEvent: PropTypes.func.isRequired,
    };
}