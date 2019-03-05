import React from 'react'
import classNames from 'classnames'
import { Classes, Menu, MenuDivider, MenuItem, Switch } from '@blueprintjs/core'

import AwesomeIcon from '../AwesomeIcon'

import style from './index.less'

export default function SideMenu() {
  return (
    <Menu className={classNames(Classes.ELEVATION_2, style.menu)}>
      <MenuDivider title="Console Filter" />
      <MenuItem
        icon={<AwesomeIcon type="playstation" />}
        labelElement={<Switch className={style.filterSwitch} />}
        text="Play Station"
      />
      <MenuItem
        icon={<AwesomeIcon type="xbox" />}
        labelElement={<Switch className={style.filterSwitch} />}
        text="Xbox"
      />
      <MenuItem
        icon={<AwesomeIcon type="nintendo-switch" />}
        labelElement={<Switch className={style.filterSwitch} />}
        text="Nintendo Switch"
      />
      <MenuDivider title="PC Filter" />
      <MenuItem
        icon={<AwesomeIcon type="steam" />}
        labelElement={<Switch className={style.filterSwitch} />}
        text="Steam"
      />
      <MenuItem
        icon={<AwesomeIcon type="origin" />}
        labelElement={<Switch className={style.filterSwitch} />}
        text="Origin"
      />
      <MenuItem
        icon={<AwesomeIcon type="epic" />}
        labelElement={<Switch className={style.filterSwitch} />}
        text="Epic"
      />
      <MenuDivider />
      <MenuItem icon="feed-subscribed" text="Subscription" />
      <MenuDivider />
      <MenuItem icon="flows" text="Roadmap" />
      <MenuItem icon="envelope" text="Contact" />
      <MenuItem icon={<AwesomeIcon type="github" />} text="Github" />
    </Menu>
  )
}
