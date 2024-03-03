import { useEffect, useState } from "react"
import React from "react"

import listEvents from '../../data/event.json';

import {useParams} from 'react';
import Event from './Event';
import { getallEvents } from "../service/api";
export default function EventDetails() {
  const [Event,setEvent]=useState({});
  const {id}=useParams();
  useEffect(() => {
    const fetch= async()=> { 
    const res = await getallEvents(id);
    setEvent(event.data); }
    fetch()
  }, []);
 
  console.log(Event);
  return <>{Event?
<p>{Event.id}</p>:<p>event not found</p>}</>;
}
