import * as React from 'react'
import { connect } from 'react-redux'
import Welcome from './Welcome'

class WelcomeContainer extends React.PureComponent {
    render() {
        return <Welcome />
    }
    
}
const mapStateToProps = (state) => {
    console.log('WelcomeContainer is third in line')
    return {}
}

export default connect(mapStateToProps)(WelcomeContainer)