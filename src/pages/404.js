import { Link } from "gatsby"
import React from "react"

const NotFound = () => {
  return (
    <div className="container mx-auto max-w-[1200px] p-5">
      <h1 className="text-4xl mb-5 text-center">Page Not found</h1>
      <p className="mb-5">Ooopss..</p>
      <Link className="" to="/">
        Go back
      </Link>
    </div>
  )
}

export default NotFound
