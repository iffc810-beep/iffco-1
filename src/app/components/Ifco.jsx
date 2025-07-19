// components/IffcoEcosystem.js
import Image from 'next/image';
import styles from './ifco.module.css';

const services = [
  { name: "Fertilisers", icon: "/fert.svg" },
  { name: "General Insurance", icon: "/gen-assu.svg" },
  { name: "Logistics", icon: "/logis.svg" },
  { name: "Kisan SEZ", icon: "/kisan-sez.svg" },
  { name: "Rural Retail", icon: "/rural-retail.svg" },
  { name: "Multi Commodity", icon: "/multi-com.svg" },
  { name: "Rural Telecom", icon: "/rural-tel.svg" },
  { name: "Organic Agri-Input", icon: "/organic.svg" },
  { name: "Rural Finance", icon: "/rural-fin.svg" },
  { name: "Frozen Foods", icon: "/frozen-food.svg" },
  { name: "Agro Chemicals", icon: "/agro-chem.svg" }
];

export default function IffcoEcosystem() {
  return (
    <section className={styles.ecosystem}>
      <h2 className={styles.heading}>The IFFCO Ecosystem</h2>
      <p className={styles.subheading}>
        Over the previous 54 years, IFFCO has grown into an ecosystem of goods, services, and support
        systems that assure justice, transparency, and sustainable practices
      </p>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={service.icon}
              alt={service.name}
              width={60}
              height={60}
              className={styles.icon}
            />
            <p className={styles.label}>{service.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
