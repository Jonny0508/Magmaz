

'use client'

import UserBar from "@/components/UserBar/UserBar"
import styles from './PaymentOrder.module.css';
import PaymentMethods from "@/components/PaymentMethods/PaymentMethods";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Order from "@/components/Order/Order";
import Button from "@/components/Button/Button";
import { useState } from "react";
import PurchaseSuccess from "@/components/PurchaseSuccess/PurchaseSuccess";


export default function PaymentOrder() {

    const [showSuccess, setShowSuccess] = useState(false);

    const handlePayment = () => {
      // Simulación de pago exitoso
      setShowSuccess(true);
    };

    return (
       <div className={styles.container}>
          <div className={styles.head}>
            <ProgressBar  step={2}/>
          </div>
          <div className={styles.row}>
            <div className={styles.rith}>
                <UserBar  email="ronaldangel231456@gmail.com"  />
                <PaymentMethods />
              <div>
                <Button label={'Pagar'} style={{marginTop:'60px', marginLeft: '200px',width: '350px'}} onClick={handlePayment}/>
                <PurchaseSuccess isVisible={showSuccess} onClose={() => setShowSuccess(false)} />
              </div>
            </div>
           <div className={styles.left}>
                <Order />
           </div>
      </div>
          
            
       </div>
    )
}

