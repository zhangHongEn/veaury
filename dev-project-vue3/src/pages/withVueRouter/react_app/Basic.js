import React, { useRef } from 'react'
import { withVueRouter } from 'veaury'

export default withVueRouter(function(props) {
    const style = useRef({
        background: '#91e7fc',
        width: 500,
        margin: 'auto',
        padding: 10
    })
    return (<div style={style.current}>
        This is the React Component
        <h3>
            current route path: {props.$vueRoute?.path}<br/>
            current route query: {JSON.stringify(props.$vueRoute?.query)}
        </h3>
        {props.children}
    </div>)
})
