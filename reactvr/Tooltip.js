/**
 * The examples provided by Oculus are for non-commercial testing and
 * evaluation purposes only.
 *
 * Oculus reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * OCULUS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
'use strict';

import React from 'react';
import {
    asset,
    Image,
    Text,
    View,
} from 'react-vr';

/**
 * Tooltip encapsulates the different tooltip types used with the InfoButton
 * and renders either an image, image with text overlay, or text block.
 */
class Tooltip extends React.Component {

    constructor(props) {
        super();
    }

    // Below are Functional Components.
    // Stateless components can use this syntax instead of extending React.Component

    TextblockTooltip(props) {

        const fontSize = {
            attrib: 0.05,
            text: 0.1,
            title: 0.15,
        };

        return (
            <View
                style={{
                    backgroundColor: 'black',
                    padding: 0.1,
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: fontSize.title,
                        width: props.tooltip.width,
                    }}
                >
                    {props.tooltip.title}
                </Text>
                {props.tooltip.title &&
                    <View
                        style={{
                            // If we have a title, make thin line to separate title and text.
                            backgroundColor: '#777879',
                            height: 0.01,
                            width: props.tooltip.width,
                        }}
                    />
                }
                <Text
                    style={{
                        color: 'white',
                        fontSize: fontSize.text,
                        width: props.tooltip.width,
                    }}
                >
                    {props.tooltip.text}
                </Text>
                {props.tooltip.attribution &&
                    <Text
                        style={{
                            fontSize: fontSize.attrib,
                            right: 0.02,
                            textAlign: 'right',
                        }}
                    >
                        {props.tooltip.attribution}
                    </Text>
                }
            </View>
        );
    }


    render() {
        return (<this.TextblockTooltip tooltip={this.props.tooltip} />);
    }
}



module.exports = Tooltip;
