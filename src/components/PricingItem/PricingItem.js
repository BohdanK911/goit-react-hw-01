import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({
  label,
  icon,
  capacity,
  price,
  description,
  primaryColor = '#000',
}) => (
  <div className={styles.pricingItem}>
    <i style={{ content: `url(${icon})` }} className={styles.icon}></i>
    <h2 style={{ color: primaryColor }} className={styles.label}>
      {label}
    </h2>
    <p className={styles.capacity}>{capacity} storage</p>
    <p className={styles.descr}>{description}</p>
    <p className={styles.price}>${price}/mo</p>
    <button
      type="button"
      style={{ backgroundColor: primaryColor }}
      className={styles.btn}
    >
      Get Started
    </button>
  </div>
);

PricingItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  primaryColor: PropTypes.string.isRequired,
};

export default PricingItem;
