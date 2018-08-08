import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object
};

const galPng = require('../../../assets/images/gal.png');
const delPng = require('../../../assets/images/del.png');

const Card = (props) => {
  const { style, item } = props;
  const multiverseImgUrl = "http://gatherer.wizards.com/Handlers/Image.ashx?type=card&multiverseid="+item.id;

  return (
    <div style={style} className="item" id={style ? item.id : null}>
      <img src={multiverseImgUrl} alt="" />
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
