import React from 'react'
import style from './index.module.scss'

export default function Button({children,type}) {
    return (
            <button className={`${style[type]}`} type="button">{children}</button>
    )
}
