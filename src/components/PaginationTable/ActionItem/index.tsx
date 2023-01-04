import { IconType } from "react-icons/lib"
import { createElement } from "react"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import { IconContent } from "./styles"

interface IProps {
  icon: IconType
  label: string
}

function ActionItem({ icon, label }: IProps) {
  const iconElement = createElement(icon, { size: 18 })

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={
        <Tooltip>
          {label}
        </Tooltip>
      }
    >
      <IconContent>
        {iconElement}
      </IconContent>
    </OverlayTrigger>
  )
}

export { ActionItem }
