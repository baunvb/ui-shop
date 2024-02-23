import React from 'react'
import { notification } from 'antd'

export function notify({
  message = '',
  description = undefined as any,
  type = 'info',
  placement = 'top',
}) {

  description = (
    <span style={{ color: '#fff'}}>{description}</span>
  ); 
  (notification as any)[type]({
      message: <span>{message}</span>,
      description: (
        <span style={{ color: '#fff' }}>{description}</span>
      ),
      placement
    })
}
