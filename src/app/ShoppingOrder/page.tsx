'use client'

import MustLogin from "@/components/Must_Login/MustLogin";
import Order from "@/components/Order/Order";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import ShoppingCart from "@/components/ShoppingCard/ShoppingCart";

import styles from './ShoppingOrder.module.css';
import Button from "@/components/Button/Button";

export default function ShoppingOrder() {
    return (
    
    <div className={styles.container}>
      <div className={styles.head}>
        <ProgressBar  step={1}/>
      </div>
      <div className={styles.row}>
        <div className={styles.rith}>
            <MustLogin />
            <ShoppingCart />
        </div>
        <div className={styles.left}>
          <Order />
          
          <Button label={'Siguiente'} style={{marginTop:'20px', marginLeft: '130px',width: '350px' }} href={'/PaymentOrder'} />
          
        </div>
      
      </div>
    </div>
       
    );
}