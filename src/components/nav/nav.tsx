import styles from './nav.module.scss';
import cx from 'classnames';

export interface NavProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Nav = ({ className }: NavProps) => {
    return <div className={cx(styles.root, className)}>Nav</div>;
};
