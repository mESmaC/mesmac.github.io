import styles from './main-content.module.scss';
import cx from 'classnames';

export interface MainContentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const MainContent = ({ className }: MainContentProps) => {
    return <div className={cx(styles.root, className)}></div>;
};
