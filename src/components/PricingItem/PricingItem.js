import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className={styles.pricingItem}>
    <i style={{content: `url(${icon})`}} className={styles.icon}></i>
    <h2 className={styles[`${label}Color`]}>{label}</h2>
    <p className={styles.capacity}>{capacity} storage</p>
    <p className={styles.descr}>{description}</p>
    <p className={styles.price}>${price}/mo</p>
    <button className={styles[`${label}`]}>Get Started</button>
  </div>
);

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string
}

export default PricingItem;
