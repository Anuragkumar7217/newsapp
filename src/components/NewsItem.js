import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={imageUrl} className="card-img-top" alt="loading" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
