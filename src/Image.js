// src/Image.js
import React from 'react';
import product from './product';

const Image = () => <img src={product.imageUrl} alt={product.name} />;

export default Image;
