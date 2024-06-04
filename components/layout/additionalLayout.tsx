import React, {FC} from 'react';
import styles from './styles.module.scss'

interface IAdditionalLayoutProps {
  children: React.ReactNode
}
const AdditionalLayout: FC<IAdditionalLayoutProps> = ({children}) => {
  return (
    <div className={styles['wrapper-additional']}>
      {children}
    </div>
  );
};

export default AdditionalLayout;