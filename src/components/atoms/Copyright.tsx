import React from "react"

export interface Props {
  className?: string
  author: string
  year: string | number
}

export const Copyright: React.FC<Props> = ({ className, author, year }) => (
  <small className={className}>
    &copy; {year} {author} All Rights Reserved.
  </small>
)
