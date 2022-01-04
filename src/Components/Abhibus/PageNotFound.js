import React, { useEffect } from 'react'

export default function NotFounds() {
    useEffect(() => {

        return () => {
            console.log('clean')
        }
    }, [])
    return (
        <div>
            Page Not found
        </div>
    )
}
