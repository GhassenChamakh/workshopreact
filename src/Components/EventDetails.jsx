import { useState } from "react"
import React from "react"

import listEvents from '../../data/event.json';

import {useParams} from 'react';
export default function EventDetails() {
  const { nom } = useParams();
  console.log(listEvents);
  const event = listEvents.find((e) => {
   return e.name == nom;
  });
  console.log(event);
  return <>{event?
<p>{event.name}</p>:<p>event not found</p>}</>;
}
