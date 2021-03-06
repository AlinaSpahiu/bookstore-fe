import React from 'react';
import './Raiting.css';
import PropTypes from 'prop-types'


const Raiting = ({value, text, color, fontSize}) => {
    return (
        <div className="raiting">
            <span>
                <i style={{color, fontSize}} className={value >=1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>

            <span>
                <i style={{color}} className={value >=2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>

            <span>
                <i style={{color}} className={value >=3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>

            <span>
                <i style={{color}} className={value >=4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>

            <span>
                <i style={{color}} className={value >=5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            </span>
            
            <span> { text && text } </span>
        </div>
    )
}

Raiting.defaultProps = {
    color: "#ffc107",
    fontSize: '20px'
}

Raiting.propTypes = {
    value: PropTypes.number,
    text: PropTypes.string,
    color: PropTypes.string
}

export default Raiting
