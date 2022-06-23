import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem",}}>
                    <img src={!imageUrl ? "https://c.ndtvimg.com/2018-09/um9lqgqo_space-generic-pixabay_625x300_22_September_18.jpg" : imageUrl} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">{title}...</h5>
                            <p class="card-text">{description}...</p>
                            <a href={newsUrl} target="_blank" class="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
