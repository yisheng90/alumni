
import React from 'react'
import Remarkable from 'remarkable'

// let md = new Remarkable('full', {
//   html: false,
//   linkify: true,
//   typographer: true
// })

let RemarkableList = (props) => {
  let markdown = Remarkable.render(props.info)
  return (
    <div>

      <div dangerouslySetInnerHTML={markdown} />
    </div>
  )
}

export default RemarkableList
