import styles from "./OrderCard.module.css";
function OrderCard({ order }) {
  return (
    <div className={styles.orderCard}>
      Thông tin khách hàng
      {order.map((p) => {
        return (
          <div className={styles.productCard}>
            <div className={styles.productAva}></div>
            <div className={styles.productText}>
              <div className={styles.productDescription}>
                <div className={styles.productTitle}>Lương khô bay</div>
              </div>
              <div className={styles.productNumbers}>
                <div>2</div>
                <div>50.000</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OrderCard;
