import { useEffect } from "react";


import React from 'react'

export const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - TheBlog`
    }, [title])
    return null;
}



