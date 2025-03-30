import Image from 'next/image';
//styles//
import styles from './Hero.module.css';
//import styles1 from './Benefits.module.css';//
import styles2 from './GoPlans.module.css';


//images//
import Rocket from '/public/images/Benefits/Rocket.png';
import Lock from '/public/images/Benefits/Lock.png';
import Intersect from '/public/images/Benefits/intersect.png';
import Burger from '/public/images/Benefits/Burger.png';

//components//
import Button from '@/components/Button/Button';
import {Article1} from '@/components/Article1/Article1';
import {Footer} from "@/components/Footer/Footer";


export default function Home() {
  return (
   <>
    <section className={styles.hero}>
     <div className={styles.content}>
       <h1>
         Potencia Tu Éxito <br/>
         Digital en la Nube
       </h1>
       <p>
         Desata el poder de tu presencia online con nuestro hosting web,<br/>
         juegos y servidores virtuales de alto rendimiento
       </p>
       <Button label={'Ver Planes'}  style={undefined} href={'/Plans'}/>
     </div>
    
     <Image  src="/images/Proyect/hero.png" className={styles.image} alt="hero" width={543} height={464}  />
    </section>      
    <section className={styles.benefits}>
          <h2 className={styles.h2}>Mira Nuestros Beneficios</h2>
          <p className={styles.p}>Simplificamos tu experiencia en la nube para que puedas enfocarte en lo que <br />
            realmente importa: hacer crecer tu proyecto.
          </p>
          <div className={styles.articleContainer}>
          <Article1 imageSrc={Rocket}  title={'Velocidad'}  text={'Nuestro servicio te ofrece una experiencia de usuario intuitiva desde el primer click'}  />
          <Article1   imageSrc={Lock} title={'Seguridad'}  text={'Nuestro servicio te ofrece una experiencia de usuario intuitiva desde el primer click'}  />
          <Article1  imageSrc={Intersect} title={'Soporte'}  text={'Nuestro servicio te ofrece una experiencia de usuario intuitiva desde el primer click'}  />
          <Article1  imageSrc={Burger}title={'Facilidad'}  text={'Nuestro servicio te ofrece una experiencia de usuario intuitiva desde el primer click'}  />
          </div> 
    </section>
    <section className={styles2.GoPlans}>
        <div className={styles2.contentGoplans}>
          <h1>
          ¿Listos para elevar tu<br/>
          presencia online?
          </h1>
          <p>
            Descubre Aqui los Planes Perfectos para<br/>
            Potenciar tu Proyecto Digital
          </p>
          <Button label={'Ver Planes'} href={'/Plans'} style={{backgroundColor:'white', color:'#6c5da1'}}/>
        </div>
        <Image  src="/images/Proyect/Goplans.png" className={styles2.imageGoPlans} alt="hero" width={543} height={464}  />
    </section>
    <Footer />
   </>
  );
}
