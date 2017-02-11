import React from 'react';
import {
  asset,
  StyleSheet,
  Mesh,
  Pano,
  VrButton,
  Image,
  Text,
  View,
  AmbientLight,
  } from 'react-vr';

const materials = ['bump', 'clouds', 'earth', 'night_lights'];

class Planet extends React.Component{
  render() {
    return (
      <Mesh
        style={{
          transform: [
            {translate: [0, 0, -70]},
            {scale: 0.03 + Math.random() * 0.02 },
            {rotateX: Math.random() * 360},
            {rotateY: Math.random() * 360},
            {rotateZ: Math.random() * 360}
          ],
        }}
        source={{mesh:asset('earth.obj'), mtl:asset(materials[Math.floor(Math.random() * 4)] + '.mtl'), lit: true}} />
    );
  }
}

export default Planet;
