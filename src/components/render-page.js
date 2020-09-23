import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const pageGenerate = page => {
    const component = () => require(`./pages/${page}`).default

    try {
        return React.createElement(component())
    } catch (error) {
        console.warn(error)
        return React.createElement(() => 404)
    }
}

export default function RenderPage () {
    const {
        params: { page }
    } = useRouteMatch()

    return pageGenerate(page)
}