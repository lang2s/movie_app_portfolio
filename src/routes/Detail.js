import React from 'react';
import './Detail.css';
import { AiOutlineClose } from "react-icons/ai";

class Detail extends React.Component {

    componentDidMount() {
        const { location, history} = this.props;
        
        if(location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            console.log("Detail: " + location.state.image);
            return (
            <div>
                <div className="detail">
                    <img src={location.state.image} alt={location.state.title} title={location.state.title} className="detail__img"/>              
                        <img src={location.state.poster} alt={location.state.title} title={location.state.title} className="detail__poster"/>
                            <div className="detail__data">
                                <h3 className="detail__title">{location.state.title}({location.state.year})</h3>
                                <div>
                                    <ul className="detail__genres">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {location.state.genres.map((genre, index) => {
                                            return <li className="detail__genre" key={index}>●{genre}</li>
                                        })}
                                    </ul>
                                </div>
                            <div className="detail__summary">      
                                <p>{location.state.summary.slice(0, 300)}...</p>
                            </div>
                            <a href="/" className="btn"><AiOutlineClose size="3em"/></a>
                        </div>
              </div>
            </div> 
            );
        }else {
            
            return null;
        }
    }
}
export default Detail;