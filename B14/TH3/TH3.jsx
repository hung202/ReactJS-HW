import React from 'react'
import { createSearchParams, useSearchParams } from 'react-router-dom';

export default function TH3() {
    const [queryParam, setQueryParam] = useSearchParams();
    const value = queryParam.get('type')
    setQueryParam(
        createSearchParams({
            frunt: 'hello',
            xinchao: 'hi'
        }))
    return (
        <div>TH3</div>
    )
}
