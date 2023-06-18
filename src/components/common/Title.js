import React from 'react'
import { Link } from 'react-router-dom'

const Title = (pageName) => {
  return (
    <>
        <div className="row">
            <div className="col-12">
                <div className="page-title-box">
                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><Link to="">Hyper</Link></li>
                            <li className="breadcrumb-item"><Link to="">@subtitle</Link></li>
                            <li className="breadcrumb-item active">{pageName.name}</li>
                        </ol>
                    </div>
                    <h4 className="page-title">{pageName.name}</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default Title