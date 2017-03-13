import React from 'react'
import { View, TextInput } from 'react-native'
import styles from './StyleSheet'

const OutputScreen = (props) => (
    <View style={{ flex: props.size }}>
        <TextInput
            editable={false}
            style={props.style}
            onChangeText={props.onChange}
            value={props.value}
        />
    </View>
)

OutputScreen.defaultProps = {
    size: 1,
    style: styles.output
}

OutputScreen.propTypes = {
    size: React.PropTypes.number,
    style: TextInput.propTypes.style,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired
}

export default OutputScreen
