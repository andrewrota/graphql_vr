import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  VrButton,
  Image,
  Text,
  View,
  } from 'react-vr';

var schema = require('./data.js');

class Nodes extends React.Component{
  render() {
    return (
      <View>
        {this.props.nodes.map((item, i) =>
        <VrButton
          key={this.state.root}
          style={{layoutOrigin: [0.5, 0.5, 0],
              position: 'absolute',
              width: 1,
              height: 1,
              transform: [{rotateY: i*(360/this.props.nodes.length)},
              {translate: [0, 0, -5]}]}}
          onClick={()=>this.props.onClick(this.state.root)}>
          <View
            key={this.state.root}
            style={{ margin: 0.1, height: 1, width: 1, backgroundColor: i ? 'lightgray' : 'lightblue'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.state.root}</Text>
          </View>
        </VrButton>
        )}
      </View>
    );
  }
}

class reactvr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nodes: [], root: true};
  }
  componentDidMount() {
    this.setState({nodes: schema.root.data.__type.fields});
  }
  onClick = (name) => {
    if (this.state.root) {
      const root = schema[name];
      let newNodes = [];
      newNodes.push(root);
      newNodes = newNodes.concat(root.data.__type.fields);
      this.setState({nodes: newNodes, root: false});
    } else {
      this.setState({nodes: schema.root.data.__type.fields, root: true});
    }
  }
  render() {
    return (
      <View>
        <Pano source={asset('eso0932a.jpg')}/>
        <Nodes onClick={this.onClick} nodes={this.state.nodes} />
      </View>
    );
  }
}

AppRegistry.registerComponent('reactvr', () => reactvr);